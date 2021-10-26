import React, { useEffect, useState } from 'react';
import { styled, Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import {getEmployees} from '../../../redux/actions/employeeAcion'
// import {employeesList} from '../../../common/constants'
const Employees = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getEmployees())
  }, [])
  const employeesList = useSelector((store) => store.employees)
  

  //MUI code//////////////////////////////////////////
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



  return (
    <>
      {/* <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Mail Id</th>
                    <th>Password</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {employeesList.map((item,index)=>{
                    return (
                        <tr>
                            <th>{index+1}</th>
                            <td>{item.firstName}</td>
                            <td>{item.sex}</td>
                            <td>{item.mail}</td>
                            <td>{item.pass}</td>
                            <td>{item.city}</td>
                        </tr>
                    )
                    })}
            </tbody>
        </table> */}

      {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell align="left">First Name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Mail Id</StyledTableCell>
            <StyledTableCell align="left">Password</StyledTableCell>
            <StyledTableCell align="left">City</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {employeesList.map((item,index)=>{
                    return (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              {index+1}
              </StyledTableCell>
              <StyledTableCell align="left">{item.firstName}</StyledTableCell>
              <StyledTableCell align="left">{item.lastName}</StyledTableCell>
              <StyledTableCell align="left">{item.sex}</StyledTableCell>
              <StyledTableCell align="left">{item.mail}</StyledTableCell>
              <StyledTableCell align="left">{item.pass}</StyledTableCell>
              <StyledTableCell align="left">{item.city}</StyledTableCell>
            </StyledTableRow>
          )
                    }
          )
        }
          
        </TableBody>
      </Table>
    </TableContainer> */}


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell align="left">First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left">Gender</StyledTableCell>
              <StyledTableCell align="left">Mail Id</StyledTableCell>
              <StyledTableCell align="left">Password</StyledTableCell>
              <StyledTableCell align="left">City</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeesList && employeesList.map((item, index) => {
              return (
                <StyledTableRow >
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.firstName}</StyledTableCell>
                  <StyledTableCell align="left">{item.lastName}</StyledTableCell>
                  <StyledTableCell align="left">{item.sex}</StyledTableCell>
                  <StyledTableCell align="left">{item.mail}</StyledTableCell>
                  <StyledTableCell align="left">{item.pass}</StyledTableCell>
                  <StyledTableCell align="left">{item.city}</StyledTableCell>
                </StyledTableRow>
              )
            }
            )
            }

          </TableBody>
        </Table>
      </TableContainer>


    </>
  )
}
export default Employees;