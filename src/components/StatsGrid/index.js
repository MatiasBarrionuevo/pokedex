import React from "react";
import { Grid, LinearProgress, Typography } from "@mui/material";

function StatsGrid({stats}) {
    return <Grid container spacing={2}>
        {stats.map(({stat,base_stat}) => <Grid key={stat.name} item xs={12} md={6}>
            <Typography variant="body1">{stat.name}: {base_stat}</Typography> 
            <LinearProgress color={base_stat > 50 ? "success" : "primary"} variant="determinate" value={base_stat} />
        </Grid>)}
    </Grid>;
}

export default StatsGrid;