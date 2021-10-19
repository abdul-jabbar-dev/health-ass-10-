import { Typography } from '@mui/material';
import React from 'react';
import orderImg from '../../Images/order.gif'
const Order = () => {
    return (

        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', }}>
            <img width={'370px'} src={orderImg} alt="" />
            <Typography mb={10} variant='h2'>
                Order Confirmed
            </Typography>
        </div>

    );
};

export default Order;