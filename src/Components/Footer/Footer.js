import { Box, Container, Typography } from '@mui/material';
import React from 'react';


import "./Footer.css"

const Footer = () => {
    return (
        <div className='footers'>
            <Container style={{ paddingY: '3%' }}>
                <Box>
                    <Box className="fot1" sx={{ gridRow: '1', gridColumn: 'span 2' }}>

                        <div className='footerBox'>
                            
                            <Typography
                                gutterBottom component="div">
                                56/8, Hossen market Tongi Gazipur Dhaka
                            </Typography>
                        </div>
                        <Box className='footerBox' >
                            
                            <Typography
                                gutterBottom component="div">
                                Official: abdullah1532002@gmail.com
                            </Typography>
                        </Box>
                        <Box className='footerBox' >
                            
                            <Typography
                                gutterBottom component="div">
                                Helpline : 01733941913
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Footer;