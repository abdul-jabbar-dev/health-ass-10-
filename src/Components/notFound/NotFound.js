import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../Images/page-lost.svg'

const NotFound = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', }}>

            <img width={'370px'} src={notFoundImg} alt="" />
            <Typography textAlign={'center'} mb={10} variant='h2'>
                404 Page Not Found
            </Typography>

            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/home'}>
                <Button variant='contained' style={{}}>Go to Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;