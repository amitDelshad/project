import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dbHandler from '../db/dbHandler';

const defaultTheme = createTheme();

export default function SignUp({setPage, setUser}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('username') === '' || data.get('password') === ''){
      alert('Username and Password can not be empty');
      return;
    }
    const users = await dbHandler.getUsers();
    let tnay = true;
    users.forEach((user) => {
      if(data.get('username') === user.username){
        alert('Username is taken!')
        tnay = false;
      }
    })
    if( tnay ){
      await dbHandler.insertUser({firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      username: data.get('username'),
      password: data.get('password'),
      history: []});
      await dbHandler.loadUser(`${data.get('username')}?${data.get('password')}`);
      setPage('Index');
      setUser(`${data.get('username')}?${data.get('password')}`);
      sessionStorage.setItem('user', `${data.get('username')}?${data.get('password')}`);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: "#1976d2" }}>
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
                  id="username"
                  label="UserName"
                  name="username"
                  autoComplete="username"
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
              <Button onClick={()=>{setPage('SignIn')}} variant="body2" sx={{marginLeft: "38.5%"}}>
                Sign in
              </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}