import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Utilitis from '../../Utilitis';
import './Cart.css'

const Cards = ({ value }) => {
    const { drugHandler } = Utilitis()
    const { id, img, name, description } = value
    return (
        <div className='hoverCart'>
            <Card>
                <CardMedia
                    sx={{ padding: '20px 0px', width: '80%', margin: '10px auto' }}
                    component="img"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography  height={'60px'} overflow={'hidden'} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                <Button variant='outlined' size='small' onClick={() => drugHandler(id)} style={{ display: 'block', width: '50%', marginTop: '1rem ' }}>Details</Button>
                </CardContent>

            </Card>
        </div>
    );
};

export default Cards;