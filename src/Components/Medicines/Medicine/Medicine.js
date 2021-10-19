import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Utilitis from '../../Utilitis';

const Medicine = ({ drug }) => {
    // individual item in medicines
    const { drugHandler } = Utilitis()
    const { id, img, description, name, unitPrice } = drug

    return (
        <Card className="hoverCart"
            sx={{
                textAlign: 'center',
                margin: '10px',
                maxWidth: 345
            }}>
            <img
                height="140"
                src={img}
                style={{
                    margin: '0 auto',
                    maxWidth: 'fiContent',
                }}
                alt="Drug sample"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div">
                    {name}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h7"
                    component="div">
                    Unit price: {unitPrice}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary">
                    {description}
                </Typography>

                <Button onClick={() => drugHandler(id)}
                    variant='outlined'
                    style={{
                        display: 'block',
                        width: '50%',
                        margin: '1rem auto',
                        marginBottom: 'auto'
                    }}
                >Details
                </Button>

            </CardContent>

        </Card>
    );
};

export default Medicine;