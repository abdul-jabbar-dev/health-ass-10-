import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import UserState from './Auths/userState/UserState';
import { Fab } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const { creatEmailAndPass, googlePop } = UserState()
    const location = useLocation()
    const history = useHistory()
    const redirectPath = location.state?.from || '/'

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get('email');
        const phoneNumber = data.get('phoneNumber');
        const displayName = data.get('displayName');
        const password = data.get('password')
        creatEmailAndPass(email, password, displayName, phoneNumber);
        history.push(redirectPath)
    };
    const googleHand = () => {
        googlePop()
            .then((result) => {
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
            <CssBaseline />
            <Typography marginTop={3} component="h1" variant="h4">
                Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="name"
                            name="displayName"
                            required
                            fullWidth
                            id="displayName"
                            variant='standard'
                            label="Full Name"
                            autoFocus
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            variant='standard'
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="New password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            fullWidth
                            id="phoneNumber"
                            label="Phone number"
                            name="phoneNumber"
                            variant='standard'
                            autoComplete="Phone-number"
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
                <Grid container >
                    <Grid item>
                        <NavLink id="RouterNavLink" to='/login'>
                            Already have an account? Sign in
                        </NavLink>
                    </Grid>
                </Grid>
            </Box>
            <Box display={'flex'} justifyContent={'space-around'}>
                <Fab style={{ marginTop: '30px', marginBottom: '30px' }} onClick={googleHand} variant="extended">
                    <GoogleIcon sx={{ mr: 1, }} />
                    Google
                </Fab>
            </Box>

        </Container>
    );
};

export default Register;