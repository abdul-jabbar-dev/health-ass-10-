import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Login.css'
import { NavLink } from 'react-router-dom';
import { Fab } from '@mui/material';
import UserState from './Auths/userState/UserState';
import { useLocation, useHistory } from 'react-router';

const Login = () => { 
    // login form
    const { googlePop, signinEmailAndPass } = UserState()

    const location = useLocation()
    const history = useHistory()
    const redirectPath = location.state?.from || '/'

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get('email');
        const password = data.get('password')
        signinEmailAndPass(email, password)
    }
    /* 3rd party Authentication handler */
    const googleHand = () => {
        googlePop()
            .then(() => {
                history.push(redirectPath)
            })
            .catch((error) => {
                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    alert('Your email is invalid')
                } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    alert('Your password is wrong')
                } else {
                    alert(error.message)
                }
            });
    }
   

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Typography marginTop={3} component="h1" variant="h4">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant='standard'
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
                    variant='standard'
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    {/* register link */}
                    <Grid item>
                        <NavLink id="RouterNavLink" to='/register'>
                            "Don't have an account? Sign Up"
                        </NavLink>
                    </Grid>
                </Grid>
            </Box>
            {/* 3rd party Authentication btn */}
            <Box display={'flex'} justifyContent={'space-around'}>
                <Fab style={{ marginTop: '30px', marginBottom: '30px' }} onClick={googleHand} variant="extended">
                    <GoogleIcon sx={{ mr: 1, }} />
                    Google
                </Fab>
            </Box>
        </Container>
    );
};

export default Login;
