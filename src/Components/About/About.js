import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './about.css'
import proImage from '../Images/aboutDoctor.png'

const About = () => {
    return (
        <div className="about">
            {/* Medi care  details */}
            <div style={{paddingTop:'10px', backgroundColor: '#5EB4E7', color: 'white' }}>
                <Container  >
                    <Grid rowSpacing={5}
                        container className='aboutTop'
                        justifyContent={'center'}
                        display={'flex'}
                        alignItems={'flex-end'}
                        marginBottom={2}
                        >
                            
                        <Grid order={1} paddingTop='0px' marginTop={{sm:'10px',}} className='aboutImgContainer' item height='100%'  display={'flex'} xs={12} sm={6}>
                            <img
                                className='aboutImg' src={proImage} alt="" />
                        </Grid>
                        <Grid
                            marginTop={{ sm: '10px', }}
                            item xs={12}
                            sm={6}
                            display={'flex'}
                            alignItems={'flex-end'}
                            className="aboutDetails">
                            <div>

                                <Typography color='white' variant={'h4'}>
                                    We will achieve this aim by presenting independent.
                                </Typography>
                                <Typography color='white' marginTop={2}>
                                    With all that inspiration we are constantly evolving, expanding our horizons, reaching new heights.
                                </Typography>

                            </div>
                        </Grid>
                    </Grid>
                </Container>
        </div>
            <br /><br />
            
            <div>
                <Typography textAlign={'center'} variant={'h4'}
                    gutterBottom component="div">
                    MediCare.bd is a product of Ology Limited.
                </Typography>
                <Typography textAlign={'center'} variant={'h6'} sx={{ width: '60%', margin: '0 auto', fontWeight: '400' }}
                    gutterBottom component="div">
                    MediCare.bd is a product of Ology Limited. MediCare.com.bd is intended to be the most comprehensive, most updated, independent online medicine information directory in Bangladesh.
                </Typography>
            </div>
            <br /><br /><br />

            <div style={{ backgroundColor: '#5EB4E7', textAlign: 'center', padding: '25px 0' }}>
                <Typography color={'white'} width="50%" margin="0 auto" variant={'h4'}
                    gutterBottom component="div">
                    OUR VALUES:

                    <br /><br />
                    <Grid container spacing={2} >
                        <Grid item md={4} xs={12} >
                            <Typography color={'white'} variant={'h5'}>

                                DOCTOR YOU CHOOSE
                            </Typography>
                            <Typography color={'white'} textAlign="center" margin='10px auto' width='200px' >
                                Donec hendrerit rutrum nibh, id egestas magna sodales.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Typography color={'white'} variant={'h5'}>

                                YOUR HEALTHCARE
                            </Typography >
                            <Typography color={'white'} textAlign="center" margin='10px auto' width='200px' >

                                Vestibulum imperdiet vestibulum laoreet. Integer elementum euismod.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Typography color={'white'} variant={'h5'}>

                                THERE FOR YOU
                            </Typography>

                            <Typography color={'white'} textAlign="center" margin='10px auto' width='200px' >
                                Mauris commodo lacinia nisi a fermentum. Donec risus magna.
                            </Typography>
                        </Grid>
                    </Grid>
                </Typography>
                <br /> <br />
            </div>
        </div>
    );
};

export default About;