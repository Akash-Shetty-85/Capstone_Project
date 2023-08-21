// // import React from 'react'

// // const Singup = () => {
// //   return (
// //     <>
// //     <Header/>
// //     <div>Singup</div>

// //     </>
// //   )
// // }

// // export default Singup

// import Header from '../../common/Header'
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { enqueueSnackbar, useSnackbar } from "notistack";
// import { useNavigate } from 'react-router-dom';
// import { FormControlLabel, Radio, RadioGroup } from '@mui/material';



// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const { enqueueSnackbar } = useSnackbar();
//   const url = 'http://localhost:3001/api/v1'
//   const histroy = useNavigate()
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log(data);
//     const formdata = {
//       firstName: data.get('firstName'),
//       lastName: data.get('lastName'),
//       password: data.get('password'),
//       email: data.get('email'),
//       contactNumber: data.get('contact'), // Use 'contact' instead of 'contactNumber'
//       role: data.get('role'),
//     };
    
//     console.log(formdata);
//     const validate_data = Validate(formdata)
//     if (validate_data) {
//       try {
//         console.log(JSON.stringify(formdata));
//         const response = await fetch(`${url}/users`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json', // Set the content type based on your API requirements
//           },
//           body: JSON.stringify(formdata),
//         });
//         console.log('Response Status:', response);
//         if (response.ok) {
//           const responseData = await response.json();
//           console.log('API Response:', responseData);
//           histroy("/signin")
//           enqueueSnackbar("Signed UP sucessfully", { variant: 'success' })
//         } else {
//           console.error('API Error:', response.statusText);
//           enqueueSnackbar(`${response.statusText}`, { variant: 'error' })

//         }

//       } catch (error) {
//         console.error('Fetch Error:', error);

//         enqueueSnackbar(`${error}`, { variant: 'error' })
//       }
//       console.log("validation_result", validate_data);
//     }
//   };

//   const Validate = (data) => {
//     const { firstName, lastName, email, password,contactNumber} = data
//     // console.log(contactNumber);
//     if (password.length < 6 || firstName.length < 5 || lastName.length < 5 || contactNumber.length !== 10) {
//       enqueueSnackbar('More than 6 characters are required');
//       return false;
//     }
   
//     if (firstName === '') {
//       enqueueSnackbar('Firstname is required', { variant: 'error' })
//       return false
//     }
//     if (lastName === '') {
//       enqueueSnackbar('Lastname is required', { variant: 'error' })
//       return false
//     }
//     if (email === '') {
//       enqueueSnackbar('Email is required', { variant: 'error' })
//       return false
//     }
//     return true;
//   }
//   return (
//     <>
//       <Header hasHiddenAuthButtons />
//       <ThemeProvider theme={defaultTheme}>
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign up
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     autoComplete="given-name"
//                     name="firstName"
//                     required
//                     fullWidth
//                     id="firstName"
//                     label="First Name"
//                     autoFocus
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="lastName"
//                     label="Last Name"
//                     name="lastName"
//                     autoComplete="family-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="contact"
//                     label="Contact Number"
//                     type="number"
//                     name="contact"
//                     autoComplete="family-name"
//                   />

//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="new-password"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <RadioGroup aria-label="role" name="role" row>
//                     <FormControlLabel value="admin" control={<Radio />} label="Admin" />
//                     <FormControlLabel value="user" control={<Radio />} label="user" />
//                   </RadioGroup>
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign Up
//               </Button>
//               <Grid container justifyContent="flex-end">
//                 <Grid item>
//                   <Link href="/signin" variant="body2">
//                     Already have an account? Sign in
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//           <Copyright sx={{ mt: 5 }} />
//         </Container>
//       </ThemeProvider>
//     </>
//   );
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../common/Header';
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

function SignUp() {
  const { enqueueSnackbar } = useSnackbar();
  const url = 'http://localhost:3001/api/v1';
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formdata = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      password: data.get('password'),
      email: data.get('email'),
      contactNumber: data.get('contact'),
      // role: data.get('role')
    };

    const validateData = validate(formdata);
    if (validateData) {
      try {
        const response = await fetch(`${url}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formdata),
        });
          console.log(response);
        if (response.ok) {
          const responseData = await response.json();
          history("/signin");
          enqueueSnackbar("Signed Up successfully", { variant: 'success' });
        } else {
          console.error('API Error:', response.statusText);
          enqueueSnackbar(`${response.statusText}`, { variant: 'error' });
        }

      } catch (error) {
        console.error('Fetch Error:', error);
        enqueueSnackbar(`${error}`, { variant: 'error' });
      }
    }
  };

  const validate = (data) => {
    const { firstName, lastName, email, password, contactNumber } = data;
    
    if (password.length < 6 || firstName.length < 5 || lastName.length < 5 || contactNumber.length !== 10) {
      enqueueSnackbar('More than 6 characters are required', { variant: 'error' });
      return false;
    }
   
    if (firstName === '') {
      enqueueSnackbar('Firstname is required', { variant: 'error' });
      return false;
    }
    if (lastName === '') {
      enqueueSnackbar('Lastname is required', { variant: 'error' });
      return false;
    }
    if (email === '') {
      enqueueSnackbar('Email is required', { variant: 'error' });
      return false;
    }
    return true;
  }

  return (
    <>
      <Header hasHiddenAuthButtons />
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="contact"
                    label="Contact Number"
                    type="number"
                    name="contact"
                    autoComplete="family-name"
                  />

                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <RadioGroup aria-label="role" name="role" row>
                    <FormControlLabel value="ADMIN" control={<Radio />} label="Admin" />
                    <FormControlLabel value="USER" control={<Radio />} label="user" />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default SignUp;
