 import React, { useState,useEffect } from 'react'
import { Stack, Paper} from '@mui/material';
import Typography from '@mui/material/Typography'
import  Box from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal';
import { deleteDownloadsAPI, ViewdownloadsAPI  } from '../services/apiServices'
import { Pie, PieChart, Tooltip } from 'recharts';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Download({ isAnimationActive = true }) {
  const [allDownloads,setAllDownloads] = useState([])

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


   // View all downloads
  const getDownloads=async()=>{
    const response = await ViewdownloadsAPI()
    console.log(response);
    setAllDownloads(response.data)
    
  }
  useEffect(()=>{
    getDownloads()
  },[])
const deleteDownloads=async(id)=>{
  try {
    const response = await deleteDownloadsAPI(id)
    console.log(response);
    getDownloads()
    
  } catch (error) {
    console.log(error);
    
  }
}

  return (


   <div> <Box sx={{marginTop:'100px'}}>
      <Box sx={{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexWrap:'wrap',
        my:'10'

      }}>
        <Typography variant='h3'>All Downloaded Resume Details</Typography>
        <Button  onClick={handleOpen} >View in Chart</Button>
      </Box>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
            <PieChart width={400} height={400}>
      <Pie
        activeShape={{
          fill: 'red',
        }}
        data={[
          { name: 'Page A', uv: 590 },
          { name: 'Page B', uv: 590 },
          { name: 'Page C', uv: 868 },
        ]}
        dataKey="uv"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip defaultIndex={2} />
      {/* <RechartsDevtools /> */}
    </PieChart>
        </Box>
      </Modal>
      
      <Typography variant='h6'> Total downloaded resumes from our site is {allDownloads.length} </Typography>

      <Stack 
       direction={{ xs: 'column', sm: 'row' }}
       spacing={{ xs: 1, sm: 2, md: 4 }}
      
      sx={{

        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexWrap:'wrap',
        my:'20px',
        marginTop:2
      }}
 >       
        {
        allDownloads.length>0?
        allDownloads.map(item=>(
         <div >
          
        <p>Downloaded Date:{item.formattedDate}</p>
        <Button variant='contained'
        color='error'
        onClick={()=>deleteDownloads(item.id)}
        >Delete</Button>
        <Paper elevation={3} sx={{
          width:'480px',
          height:'650px',
          padding:'10px',
          textAlign:'center',
          // marginTop:1,
          marginBottom:2

        }}>
          <img src={item.imageUrl} width={'450px'} alt="" />
        </Paper>
</div>
        ))
        :`No Downloads`
      }

     </Stack>



    </Box>
    </div>
  )
}

export default Download

 
 
 
 
 
 

