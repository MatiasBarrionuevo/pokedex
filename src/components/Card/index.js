import React, { useState } from 'react';
import DataView from './../DataView';
import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import CardMUI from '@mui/material/Card';
import TypeGrid from '../TypeGrid';
import './styles.scss';

function Card({data}) {
    const [open,innerToggleDrawer] = useState(false);
    const toggleDrawer = () => {
        innerToggleDrawer(!open);
    }
    const {
        name,
        sprites,
        id,
        types,
    } = data;
    return <CardMUI>
        <CardActionArea onClick={toggleDrawer}>
            <CardMedia
                component="img"
                height={window.innerWidth <= 768 ? '300' : '150'}
                image={sprites.front_default}
                alt={name}
            />
            <CardContent>
                <Typography className="order" variant="body2">#{id}</Typography>
                <Typography className="capitalize" gutterBottom variant="h5" component="div">{name}</Typography>
                <TypeGrid types={types} />
                <DataView
                    open={open}
                    toggleDrawer={toggleDrawer}
                    data={data}
                />
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={toggleDrawer}>who's that pokemon?</Button>
        </CardActions>
    </CardMUI>;
}

export default Card;