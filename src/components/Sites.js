import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';

export default function Sites() {
    return (
        <Box sx={{ width: '85%', marginLeft:'7.5%', marginTop:'2%', bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        1
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        2
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        3
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        4
                    </ListItemButton>
                </ListItem>
                <Divider />
            </List>
            </nav>
        </Box>
    );
  }
 