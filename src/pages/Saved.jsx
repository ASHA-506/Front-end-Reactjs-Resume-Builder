import React, { useEffect, useMemo, useState } from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import DeleteIcon from '@mui/icons-material/Delete'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { deleteSavedAPI, viewAllResumesAPI } from '../services/apiServices'
import { Link } from 'react-router-dom'

function Saved() {

  const [searchKey,setSearchKey] = useState("")
  const [resumes,setResumes] = useState([])
  const [dummyResumes,setDummyResumes] = useState([])

  const searchOutput = useMemo(()=>{
setResumes(dummyResumes.filter(item=>item.job.includes(searchKey)))
  },[searchKey])

  const getAllResumes=async()=>{
    try {
      const response = await viewAllResumesAPI()
      console.log(response);
      setResumes(response.data)
      setDummyResumes(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getAllResumes()
  },[])

  const deleteResume=async(id)=>{
    try {
      const response = await deleteSavedAPI(id)
      console.log(response);
      getAllResumes()
      
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  return (
    <Box>


      <Typography
        sx={{
          textAlign: 'center',
          padding: '20px'
        }}
        variant="h4"
        component="h4"
      >
        All Saved Resumes
      </Typography>

      <Typography
        sx={{
          textAlign: 'center',
          padding: '20px'
        }}
        variant="h6"
        component="h6"
      >
        All resumes submitted to the platform in one place, allowing
        administrators or recruiters to efficiently view, search, filter,
        and manage candidate profiles. It provides a quick overview of
        available candidates and their key details, making the recruitment
        and candidate selection process more organised and efficient.
      </Typography>



      <TextField
      onChange={(e)=>setSearchKey(e.target.value)}
        fullWidth
        placeholder="Search Candidate by their Job Roles"
        sx={{
          maxWidth: '500px',
          display: 'block',
          margin: '40px auto'
        }}
      />



      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                #
              </TableCell>

              <TableCell>
                Resume
              </TableCell>

              <TableCell>
                Job Role
              </TableCell>

              <TableCell>
                ...
              </TableCell>

            </TableRow>
          </TableHead>


        

          <TableBody>
            {
              resumes.length>0?
            resumes.map((item,index=1) => (
              <TableRow key={item.id}>
                <TableCell>
                  {index+1}
                </TableCell>
                <TableCell>
                  <Link to={`/view/${item.id}`}>
                  <Typography>                  
                    {item.fullName}
                  </Typography></Link>
                </TableCell>
                <TableCell>
                  {item.job}
                </TableCell>
                <TableCell>
                  <DeleteIcon
                   sx={{
    color: 'red'}}  onClick={()=>deleteResume(item.id)} />
                </TableCell>
              </TableRow>

            )):'No Data'}

          </TableBody>

        </Table>

      </TableContainer>

    </Box>
  )
}


export default Saved