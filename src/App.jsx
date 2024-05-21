import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputLabel } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main">
        <CssBaseline />

        <Grid item xs={12} sm={8} md={6} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Typography component="h4" variant="h5" sx={{ color: 'red' }}>
              Sign in
            </Typography>
            <Typography component="body" variant="body" sx={{ color: 'gray' }}>
              Enter your email and password to sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <InputLabel>Email</InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <InputLabel>Password</InputLabel>

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                <Box>

                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Keep me logged in?"
                  />
                </Box>
                <Box>

                  <Link href="#" variant="body2"
                    sx={{ color: 'red', textDecoration: 'none' }}>
                    Forgot password?
                  </Link>
                </Box>
              </Box>
              <Button
                type="submit"

                variant="contained"
                sx={{
                  mt: 3, mb: 2,
                  color: 'white',
                  backgroundColor: 'red',
                  border: '1',
                  borderRadius: 3,
                  width: '100%'
                }}
              >
                Sign In
              </Button>
              <Grid container>

                <Grid item>
                  <Link href="#" variant="body2"
                    sx={{ color: 'black', textDecoration: 'none' }}>
                    {"Not registered yet? "}
                  </Link>
                  <Link
                    href="#" variant="body"
                    sx={{ color: 'red', textDecoration: 'none' }}
                  >
                    {"Create an Account"}
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundColor: 'red',
            border: 1,
            borderBottomLeftRadius: "25%",
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',       
            flexDirection: 'column',
          }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',         // Center text
            flex: 1,                    // Take up remaining space
          }}>
           
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',  // Center the icon and text horizontally
            }}>
              <AirportShuttleIcon sx={{ color: 'white' }} />
              <Typography variant="h5" sx={{
                color: 'white',
                border: 3,
                borderRadius: 5,
                paddingX: 7,
                textAlign: 'center',
                marginLeft: 2,  
              }}>
                Spark
              </Typography>
            </Box>
            <Box sx={{
              justifyContent: 'center',
              flexDirection: 'column',
              py: '10%',
              px:3,
              mt:5,
              border:1,
              borderColor:'whitesmoke',
              borderRadius: 5,
              // textAlign: 'center',
            }}>
              <Typography variant="body" sx={{ color: 'white' }}>
                Learn more about Air Drive on
              </Typography>
              <Typography variant="h5" sx={{ color: 'white' }}>
                Spark.pl
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',  
            width: '60%',
            pb: 2,                          
          }}>
            <Typography variant="body" sx={{ color: 'white' }}>License</Typography>
            <Typography variant="body" sx={{ color: 'white' }}>Terms of Use</Typography>
            <Typography variant="body" sx={{ color: 'white' }}>Blog</Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
