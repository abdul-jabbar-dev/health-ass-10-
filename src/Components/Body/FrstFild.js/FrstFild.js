import './FrstFild.css'
import React from 'react';
import { Grid, Typography } from '@mui/material';
import factoryIco from '../../Images/headIcon/factory.svg'
import protectedIco from '../../Images/headIcon/protection.svg'
import brandIco from '../../Images/headIcon/home-remedies.svg'
import tastingIco from '../../Images/headIcon/testing.svg'
const FrstFild = () => {
    return (
        <>
            <div className='frstFild'>
                <Grid container gap={4} className="frstFildContainer ">
                    <Grid className='frstFildCart' item xs={12} sm={4} lg={2}>
                        <div>
                            <h2 style={{ marginTop: '0px' }}>222</h2>
                            <Typography variant='button'>Pharmaceutical</Typography>
                        </div>
                        <div>
                            <img className='headIcons' src={factoryIco} alt="" />
                        </div>
                    </Grid>
                    <Grid className='frstFildCart' item xs={12} sm={4} lg={2}>
                        <div>
                            <h2 style={{ marginTop: '0px' }}>158</h2>
                            <Typography variant='button'>BRAND NAME</Typography>
                        </div>
                        <div >
                            <img className='headIcons' src={protectedIco} alt="" />
                        </div>
                    </Grid>
                    <Grid className='frstFildCart' item xs={12} sm={4} lg={2}>
                        <div>
                            <h2 style={{ marginTop: '0px' }}>2445</h2>
                            <Typography variant='button'>Generic (Herbal)</Typography>
                        </div>
                        <div>
                            <img className='headIcons' src={brandIco} alt="" />
                        </div>
                    </Grid>
                    <Grid className='frstFildCart' item xs={12} sm={4} lg={2}>
                        <div>
                            <h2 style={{ marginTop: '0px' }}>1247</h2>
                            <Typography variant='button'> GENERIC (Allopathic)</Typography>
                        </div>
                        <div>
                            <img className='headIcons' src={tastingIco} alt="" />
                        </div>
                    </Grid>
                </Grid>
                <Typography margint={1} paddingBottom={5} color={'white'} style={{ fontWeight: 400, letterSpacing: '2px' }} variant='h3'>A comprehensive online pharmacie index of <br />
                    Bangladesh</Typography>
            </div>

        </>
    );
};

export default FrstFild;