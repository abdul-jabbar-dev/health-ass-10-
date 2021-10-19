import { Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../App';
import Cards from '../Card/Cards';

const ThirdFild = () => {
    const datas = useContext(DataContext);
    const data = datas.slice(3, 9)
    return (
        <Container maxWidth="lg">
            <Link id="RouterNavLink" style={{ textDecoration: 'none' }} to={'/medicines'}>
                <Button variant='outlined' style={{ display: 'flex', margin: '20px 0 10px auto' }}>See all</Button>
            </Link>
            <Grid container justifyContent={'space-evenly'}>
                {data.map(value => <ThirdFildData key={value.id} value={value}></ThirdFildData>)}
            </Grid>
        </Container>
    );
};
const ThirdFildData = ({ value }) => {
    return (
        <Grid item sm={5} xs={10} md={3} lg={2} marginY={1} >
            <Cards value={value} ></Cards>

        </Grid>
    )
}

export default ThirdFild;