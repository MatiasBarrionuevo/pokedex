import { Grid } from "@mui/material";
import React from "react";
import TypeChip from "../TypeChip";

function TypeGrid({types}) {
    return <Grid container spacing={2}>
        {types.map(({slot,type}) => <Grid key={slot} item>
            <TypeChip type={type} />
        </Grid>)}
    </Grid>;
}

export default TypeGrid;