import { Typography } from "@mui/material";
import React from "react";
import loadingImage from '../../assets/images/loading.gif';

function LoadingScreen() {
    return <div className="splashScreen">
        <img src={loadingImage} alt="Loading..." />
        <Typography variant="h4">Loading...</Typography>
    </div>;
}

export default LoadingScreen;