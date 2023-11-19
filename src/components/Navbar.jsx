import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
// import { Margin } from '@mui/icons-material';
// import SearchPage from '../Pages/SearchPage';
import FindWork from '../Pages/FindWork';

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit',
};

const pages = ['Home', 'Hire', 'Find Work'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({ isLogin, setIsLogin }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };





  return (
    <>

      <AppBar position="static" sx={{ backgroundColor: '#f8be00' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src='./assets/ll.png' height='30px' width='30px'></img>
              <p style={{color:'black'}}>⠀LabourLink</p>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
           

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Montserrat',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <p style={{color:'black'}}>⠀LabourLink</p>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <a href='/' style={{textDecoration:'none'}}>
              <Button
                // key={page}
                // onClick={() => { console.log('hello world') }}
                sx={{ my: 2, color: 'black', fontWeight:'600', display: 'block', marginLeft: 10 }}
              >
                Home
              </Button></a>
              <a href='/hire' style={{textDecoration:'none'}}>
              <Button
                // key={page}
                // onClick={() => { console.log('hello world') }}
                sx={{ my: 2, color: 'black', fontWeight:'600', display: 'block', marginLeft: 10 }}
              >
                Hire
              </Button></a>
              <Link to='/findwork' style={linkStyles}>
                <Button
                  // onClick={() => { console.log('hello world') }}
                  sx={{ my: 2, color: 'black', fontWeight:'600', display: 'block', marginLeft: 10 }}
                >
                  Find Work
                </Button>
              </Link>
            </Box>



            {/* Login button */}
            {!isLogin && <Link to="/login" style={linkStyles}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: 'black',
                  display: 'block',
                  width: '100%',
                  maxWidth: '200px',
                  margin: '0 auto',
                }}
              >
                Sign In
              </Button>
            </Link>}

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="D" src="/static/images/avatar" />
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
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
              ))}
              </Menu>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>

  );
}

export default ResponsiveAppBar;

