/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import dbHandler from '../db/dbHandler';
import { IconButton, Stack, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { useState } from 'react';

export default function Sites({text, type}) {
    const [refresh, setRefresh] = useState(true);
    const deleteHandler = async (site) => {
        await dbHandler.deleteUrl(site);
        setRefresh(!refresh);
    }
    return (
        <Box sx={{ '&::-webkit-scrollbar': {display: 'none',}, overflow: 'auto', maxHeight: '200px', 
                    width: '85%', marginLeft:'7.5%', marginTop:'2%', bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    {dbHandler.getUser().history.map((site) => {
                        if(site.name.startsWith(text) && ( type === '' || site.category.includes(type))){
                            return (
                                <>
                                    <ListItem disablePadding>
                                        <ListItemButton on onClick={() => {chrome.tabs.create({ url:site.link  });}}>
                                            <Stack>
                                                <Typography>
                                                    {`${site.name} - ${site.link}`}
                                                </Typography>
                                                {site.category.length <= 4 ? (
                                                    <Typography>
                                                        {`Categories: ${site.category}`}
                                                    </Typography>
                                                ): site.category.length <= 8 ? (
                                                    <>
                                                        <Typography>
                                                            {`Categories: ${site.category.slice(0, 4)}`}
                                                        </Typography>
                                                        <Typography>
                                                            {`${site.category.slice(4, 8)}`}
                                                        </Typography>
                                                    </>
                                                ): (
                                                    <>
                                                        <Typography>
                                                            {`Categories: ${site.category.slice(0, 4)}`}
                                                        </Typography>
                                                        <Typography>
                                                            {`${site.category.slice(4, 8)}`}
                                                        </Typography>
                                                        <Typography>
                                                            {`${site.category.slice(8)}`}
                                                        </Typography>
                                                    </>
                                                )}
                                                
                                            </Stack>
                                        </ListItemButton>
                                        <IconButton color='black' onClick={()=>{deleteHandler(site)}}>
                                            <DeleteOutline/>
                                        </IconButton>
                                    </ListItem>
                                    <Divider />
                                </>
                            )
                        }
                    })}
                </List>
            </nav>
        </Box>
    );
  }
 