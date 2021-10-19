
import { Box, Typography } from '@mui/material';
import React from 'react';

const UnitePrice = ({ unitPrice, category }) => {
    const packUnit = () => {
        if (category === 'Tablet') {
            return 10
        } else if (category === 'Capsule') {
            return 10
        } else {
            return 4
        }
    }
    const boxUnit = () => {
        if (category === 'Tablet') {
            return 10
        } else if (category === 'Capsule') {
            return 10
        } else {
            return 5
        }
    }
    return (
        <>
            <Box>
                <Typography display={'inline'} variant='subtitle2'>Unit Price: &#2547;</Typography>
                <Typography display={'inline'} variant='subtitle1'>{unitPrice} </Typography>
                <Typography color={'GrayText'} display={'inline'} variant='subtitle2'>( Unit pack: &#2547;</Typography>
                <Typography color={'GrayText'} display={'inline'} variant='subtitle1'>
                    {unitPrice * packUnit()}<small> { packUnit()}pis</small>)</Typography>
            </Box>
            <Box>
                <Typography display={'inline'} variant='subtitle2'>Unit Price: &#2547;</Typography>
                <Typography display={'inline'} variant='subtitle1'>{unitPrice} </Typography>
                <Typography color={'GrayText'} display={'inline'} variant='subtitle2'>( Unit Box: &#2547;</Typography>
                <Typography color={'GrayText'} display={'inline'} variant='subtitle1'>{(parseFloat(unitPrice) * packUnit()) * boxUnit()} <small>{boxUnit()}pack</small> )</Typography>
            </Box>
        </>
    );
};

export default UnitePrice;