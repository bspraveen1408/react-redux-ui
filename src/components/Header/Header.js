import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Popover, Typography, Button } from '@mui/material'
import './Header.css'
import {Person,Settings,Logout} from '@mui/icons-material'
export const HeaderComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Grid container spacing={2} columns={12} className="header">
                <Grid item xs={6} className="header-left-panel">
                    <NavLink to='/home' activeClassName='current'>HOME</NavLink>
                </Grid>
                <Grid item xs={6} className="header-right-panel">
                    <ul>
                        <li>
                            <NavLink to='/about'activeClassName='current'>ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services'activeClassName='current'>SERVICES</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact-us'activeClassName='current'>CONTACT US</NavLink>
                        </li>
                        <li>
                            <span>
                               <span><Person onClick={handleClick}/></span>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <ul className="user-details">
                                        <li><Settings/>Settings</li>
                                        <li><Person/>Profile</li>
                                        <li><Logout/>Log Out</li>
                                    </ul>
                                    
                                </Popover>
                            </span>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>



    )
}
