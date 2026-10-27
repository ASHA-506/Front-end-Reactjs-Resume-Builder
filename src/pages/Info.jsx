import Box from '@mui/material/Box'
import React from 'react'
import ResumeInputs from '../Components/ResumeInputs'
import Preview from '../Components/Preview'
import Stack from '@mui/material/Stack'

function Info() {

  const [resumeDetails, setResumeDetails] = React.useState({
    fullName: "",
    location: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    degree: "",
    college: "",
    year: "",
    skills: [],
    summary: ""
  })

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        pt: { xs: 3, md: 5 },
        px: { xs: 2, md: 4 }
      }}
    >

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        sx={{
          width: '100%',
          maxWidth: '1500px',
          mx: 'auto',
          alignItems: 'flex-start'
        }}
      >

        {/* Resume Input Form */}
        <Box
          sx={{
            width: { xs: '100%', md: '65%' },
            minWidth: 0,
            boxSizing: 'border-box'
          }}
        >
          <ResumeInputs
            resumeDetails={resumeDetails}
            setResumeDetails={setResumeDetails}
          />
        </Box>

        {/* Resume Preview */}
        <Box
          sx={{
            width: { xs: '100%', md: '35%' },
            minWidth: 0,
            boxSizing: 'border-box'
          }}
        >
          <Preview
            resumeDetails={resumeDetails}
          />
        </Box>

      </Stack>
    </Box>
  )
}

export default Info