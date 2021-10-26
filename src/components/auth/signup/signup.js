import React, { useState } from 'react';
import { Button, TextField, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import { stateList, cityList } from '../../../common/constants'
import { Email } from '@mui/icons-material';
import { useHistory } from 'react-router';
import { connect,useSelector,useDispatch } from 'react-redux';
import {registerEmployeeActions} from '../../../redux/actions/employeeAcion'
import { bindActionCreators } from 'redux';
export const Signup = () => {
    // From Material UI for Date pick
    // const [dob, setDob] = useState(new Date(''));
    // const [city, setCity] = useState('');
    // const [statename, setStatename] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [sex, setSex] = useState('');
    // const [mail, setMail] = useState('');
    // const[pass,setPass]=useState('');

    const history = useHistory();
    const [userdetails, setUserDetails] = useState(
        { firstName: '', lastName: '', dob: null, sex: '', mail: '', pass: '', city: '', statename: '' });
    const dispatch =useDispatch();
    // const employeesList =useSelector((store)=>store.employeesList)

    // const firstNameHandler = (e) => {
    //     setFirstName(e.target.value);
    //     console.log(firstName);
    // }
    // const lastNameHandler = (e) => {
    //     setLastName(e.target.value);
    //     console.log(lastName);
    // }


    // //Material UI for DOB
    const handleChange = (date) => {
        setUserDetails({ ...userdetails, dob: date });
    };
    // const genderHandle = (e) => {
    //     setSex(e.target.value);
    //     console.log(sex);
    // }
    // const emailHandle=(e)=>{
    //     setMail(e.target.value);
    //     console.log(mail);
    // }
    // const passwordHandle=(e)=>{
    //     setPass(e.target.value);
    //     console.log(pass);
    // }
    // //Material UI for City selection

    // const cityHandle = (event) => {
    //     setCity(event.target.value);
    //     console.log(city);
    // };

    // const statelistHandle = (event) => {
    //     setStatename(event.target.value);
    //     console.log(statename);
    // };


    const signupHandle = (event) => {
        
        const target = event.target;
        let ObjKey = target.name;
        const obj = {};
        obj[ObjKey] = target.value;

        setUserDetails({ ...userdetails, ...obj });
        console.log('Object is', obj);
        console.log('userDetails are ', userdetails);
        
        console.log(userdetails);
      
    }
const registerEmployee = ()=>{
    dispatch(registerEmployeeActions(userdetails))
    history.push('/employees')
}
    return (
        <div>
            <Grid container style={{ marginBottom: "50px" }}>
                <Grid xs={12}><div><h2><center>Register Form</center></h2></div></Grid>
                <Grid container>
                    <Grid xs={2}></Grid>
                    <Grid xs={8}>
                        <form>
                            <div>
                                <Grid container >
                                    <Grid item xs={6}>
                                        <div>
                                            <label>First Name</label>
                                            <div>
                                                <TextField id="outlined-basic"
                                                    variant="outlined"
                                                    placeholder='First Name'
                                                    name='firstName'
                                                    value={userdetails.firstName}
                                                    autoComplete='off'
                                                    onChange={signupHandle} />
                                                {/* onChange={firstNameHandler} /> */}
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <label>Last Name</label>
                                            <div>
                                                <TextField id="outlined-basic"
                                                    variant="outlined"
                                                    name='lastName'
                                                    value={userdetails.lastName}
                                                    placeholder='Last Name'
                                                    autoComplete='off'
                                                    onChange={signupHandle} />
                                                {/* onChange={lastNameHandler} /> */}
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div>
                                <Grid container >
                                    <Grid item xs={6}>
                                        <div>
                                            <label>DOB</label>
                                            <div>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <Stack spacing={1}>
                                                        <DesktopDatePicker

                                                            inputFormat="MM/dd/yyyy"
                                                            value={userdetails.dob}
                                                            name='dob'
                                                            onChange={handleChange}
                                                            // onChange={handleChange}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />
                                                    </Stack>
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>
                                            <label>Gender</label>
                                            <div>
                                                <FormControl component="fieldset">

                                                    <RadioGroup name="row-radio-buttons-group" onClick={signupHandle}>
                                                        <span>
                                                            <FormControlLabel name='sex' value="female" control={<Radio />} label="Female" />
                                                            <FormControlLabel name='sex' value="male" control={<Radio />} label="Male" />
                                                            <FormControlLabel name='sex' value="other" control={<Radio />} label="Other" />
                                                        </span>
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div>
                                <Grid container >
                                    <Grid item xs={6}>
                                        <div>
                                            <label>Email Id</label>
                                            <div>
                                                <TextField id="outlined-basic"
                                                    variant="outlined"
                                                    placeholder='Email id'
                                                    name='mail'
                                                    autoComplete='off'
                                                    value={userdetails.mail}
                                                    onChange={signupHandle} />
                                                {/* onChange={emailHandle}/> */}
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                            <div>
                                <Grid container >
                                    <Grid item xs={6}>
                                        <div>
                                            <label>Password</label>
                                            <div>
                                                <TextField
                                                    id="outlined-password-input"
                                                    label="Password"
                                                    type="password"
                                                    name='pass'
                                                    value={userdetails.pass}
                                                    autoComplete="current-password"
                                                    onChange={signupHandle}
                                                // onChange={passwordHandle}
                                                />
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                            <div>
                                <Grid container >
                                    <Grid item xs={6}>
                                        <label>City</label>
                                        <div>
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name='city'
                                                        value={userdetails.city}
                                                        label="city"
                                                        onChange={signupHandle}
                                                    // onChange={cityHandle}
                                                    >
                                                        {cityList.map((item, index) => {
                                                            return (
                                                                <MenuItem key={index} value={item}>{item}</MenuItem>
                                                            )
                                                        })}
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                            <div>
                                <Grid container >
                                    <Grid item xs={6}>
                                        <label>State Name</label>
                                        <div>
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">State Name</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={userdetails.statename}
                                                        name='statename'
                                                        label="statename"
                                                        // onChange={statelistHandle}
                                                        onChange={signupHandle}
                                                    >
                                                        {stateList.map((province, index) => {
                                                            return (
                                                                <MenuItem key={index} value={province}>{province}</MenuItem>
                                                            )
                                                        })}
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                            <Button variant="contained"
                                onClick={registerEmployee}>Sign up</Button>
                        </form>
                    </Grid>
                    <Grid xs={2}></Grid>
                </Grid>

            </Grid>
        </div>

    )
}
