/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import dbHandler from '../db/dbHandler';

export default function Sites({text, type}) {
    return (
        <Box sx={{ '&::-webkit-scrollbar': {display: 'none',}, overflow: 'auto', maxHeight: '200px', 
                    width: '85%', marginLeft:'7.5%', marginTop:'2%', bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
            <List>
                {dbHandler.getUser().history.map((site) => {
                    if(site.name.startsWith(text) && type == 'site'){
                        return (
                            <>
                                <ListItem disablePadding>
                                    <ListItemButton on onClick={() => {chrome.tabs.create({ url:site.url  });}}>
                                        {`(${site.category}) ${site.name}: ${site.url}`}
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </>
                        )
                    } else if (site.category.startsWith(text) && type == 'category'){
                        return (
                            <>
                                <ListItem disablePadding>
                                    <ListItemButton on onClick={() => {chrome.tabs.create({ url:site.url  });}}>
                                        {`(${site.category}) ${site.name}: ${site.url}`}
                                    </ListItemButton>
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
 