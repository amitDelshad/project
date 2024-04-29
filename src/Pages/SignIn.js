import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dbHandler from '../db/dbHandler';

const defaultTheme = createTheme();

export default function SignIn({setPage, setUser}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const users = await dbHandler.getUsers();
    let tnay = true;
    Promise.all(users.map(async (user) => {
      if(data.get('username') === user.username && data.get('password') === user.password){
        setPage('Index');
        tnay = false;
        await dbHandler.loadUser(`${user.username}?${user.password}`);
        setUser(`${user.username}?${user.password}`);
        sessionStorage.setItem('user', `${user.username}?${user.password}`);
      }
    }))
    if(tnay) 
      alert('Username or Password are incorrect!');
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button onClick={()=>{setPage('SignUp')}} variant="body2" sx={{marginLeft: "38.5%"}}>
              {"Sign Up"}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
