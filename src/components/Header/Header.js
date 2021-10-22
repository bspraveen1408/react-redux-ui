import React, {useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import LogoutPage from '../auth/logout/logout';
import { Grid, Popover } from '@mui/material'
import './Header.css'
import {Person,Settings,Logout} from '@mui/icons-material'

export const HeaderComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [status,setStatus]=useState('getin')
    const history = useHistory();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const logoutHandle=()=>{
        // setStatus('getout')
        history.push('/logout');
    }
    return (
        <div>
            <Grid container spacing={2} columns={12} className="header">
                <Grid item xs={6} className="header-left-panel">
                    <NavLink to='/' activeClassName='current'>HOME</NavLink>
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
                            <span className="pointer"><Person onClick={handleClick}/></span>
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
                                        <li className='pointer'><Settings/>Settings</li>
                                        <li className='pointer'><Person/>Profile</li>
                                        <li className='pointer' onClick={logoutHandle}><Logout />Log Out</li>
                                    </ul>
                                    
                                </Popover>
                            </span>
                        </li>
                    </ul>
                </Grid>
            </Grid>
            {/* {status==='getout'&&<LogoutPage/>} */}
        </div>
    )
}
