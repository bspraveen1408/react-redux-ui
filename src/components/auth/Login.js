
import React, { Component, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Login } from '@mui/icons-material';
import { useHistory } from 'react-router';
export default function LoginPage() {
    const [userDetails, setUserDetails] = useState({ username: '', password: '' });
    const history = useHistory();
    const inputHandle = (e) => {
        const objKey = e.target.name
        setUserDetails({ ...userDetails, [objKey]: e.target.value })
        console.log(userDetails);
    }
    const SigninHandle =()=>{
        history.push('/profile')
    }
    const SignupHandle = () => {
        history.push('/signup');
    }
    return (
        <div>
            <center>This is login component</center>
            <form>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    name='username'
                    value={userDetails.username}
                    onChange={inputHandle}
                    autoComplete='off'
                />
                &nbsp; &nbsp;
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="off"
                    name='password'
                    value={userDetails.password}
                    onChange={inputHandle}
                /><br />
                <div><Button
                    variant="contained"
                    color="success"
                    onClick={SigninHandle}>
                    Sign-in
                </Button></div><h5> if you are new user then sign up here</h5>
                <div><Button
                    variant="contained"
                    color="success"
                    onClick={SignupHandle}>
                    Sign-up
                </Button></div>
            </form>
        </div>
    )
}

