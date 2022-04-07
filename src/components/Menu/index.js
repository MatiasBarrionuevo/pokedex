import React, { useRef } from "react";
import { Search } from "@mui/icons-material";
import { AppBar, Avatar, CircularProgress, IconButton, InputAdornment, TextField, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import logoImage from '../../assets/images/Pokedex_logo.png'
import logo from '../../assets/images/logo.png';
import './styles.scss';

function Menu({onSubmit, loadingSubmit}){
    const ref = useRef(null);
    const innerOnSubmit = evt => {
        evt.preventDefault();
        if(!ref || !ref.current || !ref.current.value) {
            return;
        }
        onSubmit(ref.current.value);
    } 
    const isMobile = window.innerWidth <= 768;
    return <Box className="boxMenu" sx={{ flexGrow: 1, marginBottom: isMobile ? 4 : 12  }}>
        <AppBar position="fixed" sx={isMobile ? { top: 'auto', bottom: 0 } : {}}>
            <Toolbar>
                {isMobile ? <Avatar alt="Pokemon" src={logoImage} /> : <div  className="menuLogo">
                    <img src={logo} alt="logo" />
                </div>}
                <form onSubmit={innerOnSubmit}>
                    <TextField
                        id="search-input"
                        variant="outlined"
                        label="Search"
                        disabled={loadingSubmit}
                        size="small"
                        fullWidth={isMobile}
                        classes={{root:"searchInput"}}
                        InputProps={{
                            inputRef: ref,
                            startAdornment: <InputAdornment position="start">
                                { loadingSubmit ?
                                    <CircularProgress size={25} /> 
                                    : <IconButton onClick={innerOnSubmit}>
                                        <Search />
                                    </IconButton>
                                }
                            </InputAdornment>,
                        }}
                    />
                </form>
            </Toolbar>
        </AppBar>
    </Box>;
}

export default Menu;