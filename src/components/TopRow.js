/* eslint-disable */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import StarIcon from '@mui/icons-material/Star';
import dbHandler from '../db/dbHandler';

export default function TopRow(setPage) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const bookMarkHandler = () => {
        const siteContent = document.documentElement.outerHTML;
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            dbHandler.insertUrl(tabs[0].url, siteContent)
        });
    }
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <IconButton
                    onClick={() => {setPage.setPage.setPage('Index')}}>
                    <AdbIcon fontSize='large' style={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }}/>
                </IconButton>
                <IconButton style={{marginRight:'0%', color:'white', flexGrow: '1'}} onClick={() => {bookMarkHandler();}}>
                    <StarIcon fontSize='large'/>
                </IconButton>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar/>
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    <MenuItem key={'Profile'} onClick={()=>{setPage.setPage.setPage('Profile')}}>
                        <Typography textAlign="center">{'Profile'}</Typography>
                    </MenuItem>
                    <MenuItem key={'Logout'} onClick={()=>{setPage.setPage.setPage('')}}>
                        <Typography textAlign="center">{'Logout'}</Typography>
                    </MenuItem>
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
  }