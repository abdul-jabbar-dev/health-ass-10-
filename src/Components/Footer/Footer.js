import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import footerIcon from '../Images/drug.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footers'>
            <Container style={{ paddingY: '3%' }}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
                    <Box className="fot1" >
                        <Box  textAlign={'start'}>
                            <Box className='footerBox' alignItems={'center'} display={'flex'}>
                                <img width='60px' src={footerIcon} alt="" />
                                <Typography marginLeft={'10px'} fontWeight={'bolder'} color={'white'} display={'inline'} variant='h5'>
                                    MediCare Phara
                                </Typography>
                            </Box>
                            <Box className='footerBox' >
                                <Typography marginTop={'15px'} className='footer-icon-set'
                                     component="div">
                                    <FacebookOutlinedIcon />
                                    <GoogleIcon />
                                    <YouTubeIcon />
                                    <LinkedInIcon />
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="fot1" >
                        <Box textAlign={'start'}>
                            <div className='footerBox'>
                                <Typography
                                    className='footer-icon-set'
                                    gutterBottom component="div">
                                    <RoomIcon />
                                    56/8, Hossen market Tongi Gazipur Dhaka
                                </Typography>
                            </div>
                            <Box className='footerBox' >
                                <Typography className='footer-icon-set'
                                    gutterBottom component="div">
                                    <MailOutlineIcon />
                                    Official: abdullah1532002@gmail.com
                                </Typography>
                            </Box>
                            <Box className='footerBox' >
                                <Typography className='footer-icon-set'
                                    gutterBottom component="div">
                                    <PhoneIcon />
                                    Helpline : 01733941913
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Typography marginBottom={0} color="#34495E" variant='button'>Copyright © 2021 MediCare Pharmacie.com</Typography>
            </Container>
        </div>
    );
};

export default Footer;