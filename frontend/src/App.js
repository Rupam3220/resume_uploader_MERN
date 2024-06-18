import { 
  Alert,
  Avatar,
  Box, 
  Button, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  FormLabel, 
  Grid, 
  Input, 
  InputLabel, 
  MenuItem, 
  Paper, 
  Radio, 
  RadioGroup, 
  Select, 
  Stack, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField, 
  Typography } from '@mui/material';

  import { styled } from '@mui/material/styles';
import './App.css';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function App() {

  // Upload button style
  const Input = styled('input')({
    display: 'none',
  })

  // states 
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [dob, setDob] = useState(null)
  const [state, setState] = useState('')
  const [gender, setGender] = useState()
  const [location, setLocation] = useState([])
  const [profileImage, setProfileImage] = useState('')
  const [resumeDoc, setResumeDoc] = useState('')

  // Error handling state
  const [error, setError] = useState({
    status: false,
    message: "",
    type: ""
  })

  // Multiple checkbox 
  const getLocation = (e) => {
    let data = location
    data.push(e.target.value)
    setLocation(data)
  }

  // Form submit - handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('name', name)
    data.append('email', email)
    data.append('dob', dob)
    data.append('state', state)
    data.append('gender', gender)
    data.append('location', location)
    data.append('profileImage', profileImage)
    data.append('resumeDoc', resumeDoc)
    console.log(data)

    // Clear form after submittion
    const clearForm = () => {
      setName('')
      setEmail('')
      setDob(null)
      setState('')
      setGender('')
      setLocation([])
      setProfileImage('')
      setResumeDoc('')
      document.getElementById('resume-form').reset()
    }

    // error handling
    if(name && email) {
      console.log(data.get('name'))
      console.log(data.get('email'))
      console.log(data.get('dob'))
      console.log(data.get('state'))
      console.log(data.get('gender'))
      console.log(data.get('location'))
      console.log(data.get('profileImage'))
      console.log(data.get('resumeDoc'))
      setError({status: true, message: "Resume uploaded successfully...", type: 'success'})
      clearForm()
    }else {
      setError({status: true, message: "All fields are required!", type: 'error'})
    }
  }


  return (
    <>

    {/* Navbar */}
      <Box display='flex' justifyContent='left' sx={{backgroundColor: "brown", padding: 2}}>
        <Typography variant='h5' component='div' sx={{fontWeight: 'bold', color: 'white'}}>Resume Uploader</Typography>
      </Box>
      
    {/* Form heading */}
      <Grid container justifyContent="center">
        <Grid item xs={5}>

        <Box display='flex' justifyContent='center' sx={{background: "white", padding: 1}}>
            <Typography variant='h5' component='div' sx={{color: "brown", fontWeight: 'bold'}}>
              Please fill the details
            </Typography>
          </Box>

        {/* Candidate data upload form start */}
          <Box component='form' sx={{ p:3 }} noValidate id='resume-form' onSubmit={handleSubmit}>
            {/* Name field */}
            <TextField 
              id='name' 
              name='name' 
              required fullWidth margin='normal' 
              label='Name' 
              onChange={(e) => setName(e.target.value)}             
            />
            {/* Email field */}
            <TextField 
              id='email' 
              name='email' 
              required fullWidth margin='normal' 
              label='Email' 
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* DOB field */}
            <Box mt={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                  label='Date of Birth' 
                  value={dob} 
                  onChange= {(newValue) => {setDob(newValue)}} 
                  TextField={(params)=> <TextField {...params}/>}
                />
              </LocalizationProvider>
            </Box>

            {/* State field || Drop down */}
            <FormControl  fullWidth margin="normal">
              <InputLabel id='state-select-label'>State</InputLabel>
              <Select 
                labelId='state-select-label' 
                id='state-select' 
                value={state} 
                label='state' 
                onChange={(e) => {setState(e.target.value)}}>

                <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                <MenuItem value="Assam">Assam</MenuItem>
                <MenuItem value="Bihar">Bihar</MenuItem>
                <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                <MenuItem value="Goa">Goa</MenuItem>
                <MenuItem value="Gujarat">Gujarat</MenuItem>
                <MenuItem value="Haryana">Haryana</MenuItem>
                <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                <MenuItem value="Karnataka">Karnataka</MenuItem>
                <MenuItem value="Kerala">Kerala</MenuItem>
                <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                <MenuItem value="Manipur">Manipur</MenuItem>
                <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                <MenuItem value="Mizoram">Mizoram</MenuItem>
                <MenuItem value="Nagaland">Nagaland</MenuItem>
                <MenuItem value="Odisha">Odisha</MenuItem>
                <MenuItem value="Punjab">Punjab</MenuItem>
                <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                <MenuItem value="Sikkim">Sikkim</MenuItem>
                <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                <MenuItem value="Telangana">Telangana</MenuItem>
                <MenuItem value="Tripura">Tripura</MenuItem>
                <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                <MenuItem value="West Bengal">West Bengal</MenuItem>
              </Select>
            </FormControl>

            {/* Gender field || Radio button */}
            <FormControl  fullWidth margin="normal">
              <FormLabel id='gender-radio-button'>Gender</FormLabel>
              <RadioGroup row name='gender'>
                <FormControlLabel value='male' control={<Radio/>} label='Male' onClick={(e) => setGender(e.target.value)}/>
                <FormControlLabel value='female' control={<Radio/>} label='Female' onClick={(e) => setGender(e.target.value)}/>
                <FormControlLabel value='others' control={<Radio/>} label='Others' onClick={(e) => setGender(e.target.value)}/>
              </RadioGroup>
            </FormControl>
          
            {/* Location field || Radio button */}
            <FormControl component='fieldset' fullWidth margin='normal'>
              <FormLabel id='legend'>Preferred Location</FormLabel>
              <FormGroup row>
                <FormControlLabel control={<Checkbox/>} label='Greater Noida' value='Greater Noida' onClick={(e) => getLocation(e)}/>
                <FormControlLabel control={<Checkbox/>} label='Kolkata' value='Kolkata' onClick={(e) => getLocation(e)}/>
                <FormControlLabel control={<Checkbox/>} label='Bangalore' value='Bangalore' onClick={(e) => getLocation(e)}/>
                <FormControlLabel control={<Checkbox/>} label='Hyderabad' value='Hyderabad' onClick={(e) => getLocation(e)}/>
                <FormControlLabel control={<Checkbox/>} label='Pune' value='Pune' onClick={(e) => getLocation(e)}/>
                <FormControlLabel control={<Checkbox/>} label='Gurgaon' value='Gurgaon' onClick={(e) => getLocation(e)}/>
              </FormGroup>
            </FormControl>

           {/* File upload buttons */} 
            <Stack direction='row' alignItems='center' spacing={4}>
            {/* Image upload */}
              <label htmlFor='profile-pic'>
                <Input accept= 'image/*' id='profile-pic' type='file' onChange={(e) => setProfileImage(e.target.files[0])}/>
                <Button variant='contained' component='span'>Upload pic</Button>
              </label>
            {/* File upload */}
              <label htmlFor='resume-upload'>
                <Input accept='doc/*' id='resume-upload' type='file' onChange={(e) => setResumeDoc(e.target.files[0])}/>
                <Button variant='contained' component='span'>Upload resume</Button>
              </label>
            </Stack>

          {/* Submit Button */}
            <Button variant='contained' type='submit' sx={{ mt:3, mb:2, px:5 }} color='error'>Submit</Button>
            {error.status ? <Alert severity={error.type}>{error.message}</Alert> : ''}
          </Box>
        </Grid>
      {/* Candidate data upload form start */}


      {/* Candidate list start */}
        <Grid item xs={7}>
          <Box display='flex' justifyContent='center' sx={{background: "white", padding: 1}}>
            <Typography variant='h5' component='div' sx={{color: "brown", fontWeight: 'bold'}}>
              List of Candidates
            </Typography>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label='resume-table'>

              {/* Table Heading */}
              <TableHead>
                <TableRow>
                  <TableCell align='center' sx={{fontWeight: 'bold'}}>Name</TableCell>
                  <TableCell align='center' sx={{fontWeight: 'bold'}}>Email</TableCell>
                  <TableCell align='center' sx={{fontWeight: 'bold'}}>DOB</TableCell>
                  <TableCell align='center' sx={{fontWeight: 'bold'}}>State</TableCell>
                  <TableCell align='center' sx={{fontWeight: 'bold'}}>Gender</TableCell>
                  <TableCell align='center' sx={{fontWeight: 'bold'}}>Location</TableCell>
                  <TableCell align='center' sx={{fontWeight: 'bold'}}>Avatar</TableCell>
                </TableRow>
              </TableHead>

              {/* Table content */}
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>test</TableCell>
                  <TableCell align='center'>test@test.com</TableCell>
                  <TableCell align='center'>17.06.2024</TableCell>
                  <TableCell align='center'>Maharashtra</TableCell>
                  <TableCell align='center'>Male</TableCell>
                  <TableCell align='center'>Mumbai</TableCell>
                  <TableCell align='center'><Avatar src='#'/></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </Grid>
      {/* Candidate list end */}

      </Grid>
    </>
  );
}

export default App;
