import { Card, CardActions, CardContent, CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

function CardSkeleton(){
    return <Card>
        <CardMedia>
            <Skeleton variant="rectangular" height={150} animation="wave"/>
        </CardMedia>
        <CardContent>
            <Typography variant="body2">
                <Skeleton variant="text" width={16} animation="wave" />
            </Typography>
            <Typography variant="h5">
                <Skeleton variant="text" animation="wave" style={{marginTop:4}} />
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Skeleton variant="rectangular" animation="wave" height={32} style={{borderRadius:16}} />
                </Grid>
                <Grid item xs={4}>
                    <Skeleton variant="rectangular" animation="wave" height={32} style={{borderRadius:16}} />
                </Grid>
            </Grid>
        </CardContent>
        <CardActions>
            <Skeleton variant="rectangular" animation="wave" width={170} height={36} style={{marginBottom:5}} />
        </CardActions>
    </Card>;
}

export default CardSkeleton;