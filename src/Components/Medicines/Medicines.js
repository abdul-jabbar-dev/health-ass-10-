import { Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { DataContext } from '../../App';
import Medicine from './Medicine/Medicine';

const Medicines = () => {
    // items container in medicines
    const datas = useContext(DataContext)
    return (
        <Container margin={'0 auto'}>
            <Grid
                margin={'10px auto'}
                style={{
                    flexDirection: 'row',
                    margin: '10% auto',
                    justifyContent: 'center',
                    alignItems: 'stretch'
                }} container >
                {
                    datas.map(drug => <Medicine key={drug.id} drug={drug}></Medicine>)
                }
            </Grid>

        </Container>
    );
};

export default Medicines;