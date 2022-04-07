import React from "react";
import { Button, Typography } from "@mui/material";
import errorImage from '../../assets/images/error.gif';
import './styles.scss';

function ErrorScreen(){
    return <div className="splashScreen">
        <img src={errorImage} alt="Error" />
        <div>
            <Typography variant="h4">Our service is taking a nap, please reload this page!</Typography>
        </div>
            <Button variant="contained" size="large" color="error" onClick={() => window.location.reload()}>Reload</Button>
    </div>;
}

export default ErrorScreen;