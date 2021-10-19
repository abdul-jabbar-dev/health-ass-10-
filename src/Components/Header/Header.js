import { Avatar, Button, Container, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Chip from '@mui/material/Chip';
import './Header.css'
import UserState from '../Auth/Auths/userState/UserState';

const Header = () => {
    const { user, signout } = UserState()
    const { displayName, accessToken, photoURL } = user

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="headerContainer">
            <Container  sx={{ textAlign: 'center' }}>
                <div className='navContainer'>
                    <div >
                        <Link style={{textDecoration:'none'}} to={'/home'}>
                            <Typography variant="h6" color="inherit" noWrap sx={{}}>
                                MediCare
                            </Typography>
                        </Link>
                    </div>
                    <div className='navList'>
                        <NavLink
                            id="RouterNavLink"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "White"
                            }}
                            style={{
                                textDecoration: 'none',
                                marginRight: '5%',
                                fontSize: '1.2rem'
                            }}
                            to={'/home'}>
                            Home
                        </NavLink>

                        <NavLink
                            id="RouterNavLink"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "White"
                            }}
                            style={{
                                textDecoration: 'none',
                                marginRight: '5%',
                                fontSize: '1.2rem'
                            }}
                            to={'/medicines'}>
                            Medicines
                        </NavLink>

                        <NavLink
                            id="RouterNavLink"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "White"
                            }}
                            style={{
                                textDecoration: 'none',
                                marginRight: '5%',
                                fontSize: '1.2rem'
                            }}
                            to={'/about'}>
                            About
                        </NavLink>

                        {accessToken ? <Tooltip title="Account settings">
                            <Button onClick={handleClick}  >
                                {photoURL ? <Avatar
                                    alt="Remy Sharp"
                                    src={photoURL}
                                    sx={{ width: 32, height: 32 }}
                                /> :
                                    <Avatar sx={{ width: 32, height: 32, }}
                                    >{displayName?.split(' ')[0][0]}{displayName?.split(' ')[1][0]}
                                    </Avatar>}
                            </Button>
                        </Tooltip> :
                            <NavLink
                                id="RouterNavLink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "White"
                                }}
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '1.2rem'
                                }}
                                to={'/login'}>Login
                            </NavLink>
                        }
                    </div >

                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}

                        PaperProps={{
                            elevation: 0, sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: '-0.5',
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            }
                        }} transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                        <MenuItem >
                            <Typography variant="button" color="inherit" noWrap >
                                {displayName}
                            </Typography>
                        </MenuItem>
                        <MenuItem onClick={signout}>
                            <ListItemIcon>
                                <Chip icon={<LogoutIcon />} />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            </Container>

        </div>
    );


};

export default Header;
