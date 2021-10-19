import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import bnrBg from '../../Images/bannarImages.jpg'

const SecFild = () => {
    return (
        <div style={{ backgroundColor: '#5EB4E7' }}>
            <Container>
                <Grid style={{ backgroundColor: '#5EB4E7' }} container alignItems={'center'} >
                    <Grid item xs={12} marginTop={{ xs: '50px', sm: '50px', md: 0 }} sm={12} md={6}  >
                        <Typography style={{ fontWeight: 400, letterSpacing: '2px' }} color={"white"} variant='h3'>THE RIGHT
                            <br />
                            <span style={{ color: '#34495e', fontWeight: '800', display: 'inline-block', letterSpacing: '3px' }}>PEDIATRICIAN</span>
                        </Typography>
                        <Typography marginTop={2} color={'#34495e'}>
                            You can choose from 15 Medicare demos made for a range of medical specialties to save your time and make it easy for you to have a website ready in no time.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <img width={'100%'} src={bnrBg} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default SecFild;