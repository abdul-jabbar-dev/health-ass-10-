import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UnitePrice from './UnitePrice';
import './drug.css'

const Drug = () => {
    const { drugId } = useParams()
    const [datas, setDatas] = useState({})

    useEffect(() => {
        fetch('/drugApi.json')
            .then(res => res.json())
            .then(item => {
                setDatas(item.find(item => item.id === drugId))
            })
    }, [drugId])

    const { id, name, img, categoryIco, category, brand, unitPrice, description, interaction } = datas

    return (
        <Container style={{ color: ' rgb(52, 73, 94)' }} >
            <Grid className='drugProfile' container justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                {/* druge specification */}
                <Grid item xs={12} sm={6} style={{ justifyContent: 'center', display: 'flex' }}>
                    <Box>
                        <img width={'30px'} src={categoryIco} alt="" />
                        <Typography variant='h5' display={'inline'} fontWeight={'600'}>{name} </Typography>
                        <Typography variant="button" color={'GrayText'} gutterBottom>{category}</Typography>
                        <Typography variant='subtitle2' color={'GrayText'}>{brand}</Typography><br />
                        <Typography display={'inline'} variant='subtitle1'
                        >Druge Id:
                            <Typography display={'inline'} color={'GrayText'} variant='subtitle1'> {id} </Typography>
                        </Typography>
                        <Box marginY={1}>
                            <Typography variant='h6' marginY={2} display={'inline'} fontWeight={'600'}>Price:  </Typography>
                            <Typography variant='h5' marginY={2} display={'inline'} fontWeight={'600'}>&#2547;{unitPrice} <small>pis</small></Typography>
                        </Box>
                        <Box>
                            <UnitePrice unitPrice={unitPrice} category={category}></UnitePrice>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <CardMedia
                        sx={{ padding: '20px 0px', minWidth: '60%', maxWidth: '70%', margin: '10px auto' }}
                        component="img"
                        image={img}
                        alt="green iguana"
                    />
                </Grid>
            </Grid>
            {/* Place order btn */}
            <Link id="RouterNavLink" style={{ textDecoration: 'none' }} to={'/order'}>
                <Button variant='outlined' style={{ display: 'block', width: '50%', margin: '1rem auto' }}>Place order</Button>
            </Link>
            {/* druge details */}
            <div>
                <div style={{ backgroundColor: 'rgb(94 126 145 / 68%)', width: '100%' }}>
                    <Typography variant='h6' pl={1} gutterBottom>Indications </Typography>
                </div>
                <Typography px={2} variant='subtitle1'>{description}</Typography>
            </div>
            <div>
                <div style={{ backgroundColor: 'rgb(94 126 145 / 68%)', width: '100%' }}>
                    <Typography variant='h6' pl={1} gutterBottom>Interaction </Typography>
                </div>
                <Typography px={2} variant='subtitle1'>{interaction}</Typography>
            </div>

        </Container>
    );
};

export default Drug;