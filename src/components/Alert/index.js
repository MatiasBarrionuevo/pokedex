import React from "react";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Snackbar } from "@mui/material";
import './styles.scss';

function Alert({ error, showError, clearError }) {
    const origin = window.innerWidth <= 768 ? {vertical: 'top',horizontal: 'center'} : {vertical: 'bottom',horizontal: 'right'};
    return <Snackbar
        anchorOrigin={origin}
        open={showError}
        autoHideDuration={6000}
        onClose={clearError}
        classes={{
            root: 'errorSnackbar'
        }}
    >
        <ListItem>
            <ListItemText primary={error ? error.message : 'Unexpected error'} secondary={error ? error.error : null} classes={{
                primary: 'errorPrimaryText',
                secondary: 'errorSecondaryText',
                root: 'errorRootText'
            }} />
            {error && error.image && <ListItemAvatar>
                <Avatar src={error.image} alt="Confuse Unown" />
            </ListItemAvatar>}
        </ListItem>
    </Snackbar>;
}
  
export default Alert;