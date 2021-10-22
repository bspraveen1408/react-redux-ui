import React from 'react';
import { Button } from '@mui/material'
import { useHistory } from 'react-router';
import Login from '../Login';

const LogoutPage=()=>{
    const history=useHistory();
    const loginButton=()=>{
        history.push('/login')
    }
   return (
            <div>
                <h3>You have successfully logged out</h3><br />
                <span>
                    <h3>Click below to Login again</h3> &nbsp;
                    <Button variant="outlined" onClick={loginButton}>Login</Button>
                </span>
            </div>
        )
    }
export default LogoutPage;