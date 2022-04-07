import { ArrowBack, Build, Grade, Leaderboard, OfflineBolt } from "@mui/icons-material";
import { Button, Divider, Drawer, FormControl, FormControlLabel, FormGroup, IconButton, List, ListItemText, ListSubheader, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CollapseData from "../CollapseData";
import StatsGrid from "../StatsGrid";
import TypeGrid from "../TypeGrid";
import CachedIcon from '@mui/icons-material/Cached';
import LightModeIcon from '@mui/icons-material/LightMode';
import TransgenderIcon from '@mui/icons-material/Transgender';
import './styles.scss';

export function DataView({
  open,
  toggleDrawer,
  data,
}) {
    const [imgGender,setImgGender] = useState(false);
    const [imgShiny, setImgShiny] = useState(false);
    const [imgOrientation, setImgOrientation] = useState(false);
    if (!data) {
        return null;
    }
    const {
        name,
        id,
        sprites,
        types,
        abilities,
        stats,
        moves,
    } = data;
    const hasFemale = imgGender && sprites.front_female && sprites.back_female;
    let imgSrc = imgOrientation ? 'back' : 'front';
    if (!hasFemale && !imgShiny) {
        imgSrc += '_default';
    } 
    if (imgShiny) {
        imgSrc += '_shiny';
    }
    if (hasFemale) {
        imgSrc += '_female';
    }
    return <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        classes={{modal: "drawerContainer"}}
    >
        <Button className="backButton" startIcon={<ArrowBack />} onClick={toggleDrawer}>Close</Button>
        <Box className="drawerImageContainer">
            <img className="drawerImage" src={sprites[imgSrc]} alt={name} />
            <FormControl component="fieldset">
                <FormGroup row>
                    <FormControlLabel
                        value="top"
                        control={<Switch size="small" checked={imgOrientation} onChange={() => setImgOrientation(!imgOrientation)} color="primary" />}
                        label={<IconButton size="small" color="primary" onClick={() => setImgOrientation(!imgOrientation)}>
                            <CachedIcon />
                        </IconButton>}
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="top"
                        control={<Switch size="small" checked={imgGender} onChange={() => setImgGender(!imgGender)} color="primary" />}
                        label={<IconButton size="small" color="secondary" onClick={() => setImgGender(!imgGender)}>
                            <TransgenderIcon />
                        </IconButton>}
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="top"
                        control={<Switch size="small" checked={imgShiny} onChange={() => setImgShiny(!imgShiny)} color="primary" />}
                        label={<IconButton size="small" color="warning" onClick={() => setImgShiny(!imgShiny)}>
                            <LightModeIcon />
                        </IconButton>}
                        labelPlacement="top"
                    />
                </FormGroup>
            </FormControl>
        </Box>
        <List
            className="drawer"
            subheader={
                <ListSubheader>
                    <Typography variant="subtitle">#{id}</Typography>
                    <Typography className="capitalize" variant="h4">{name}</Typography>
                </ListSubheader>
            }
        >
            <Divider />
            <CollapseData defaultOpen={true} icon={<OfflineBolt />} text="Types">
                <TypeGrid types={types} />
            </CollapseData>
            <Divider />
            <CollapseData defaultOpen={true} icon={<Leaderboard />} text="Stats">                    
                <StatsGrid stats={stats} />
            </CollapseData>
            <Divider />
            <CollapseData defaultOpen={true} icon={<Build />} text="Abilities">                    
                <List component="div" disablePadding>
                    {abilities.map(({ability,is_hidden}) => <ListItemText key={ability.name} className={`capitalize ${is_hidden ? 'isHidden' : 'isNotHidden'}`} primary={ability.name} />)}
                </List>
            </CollapseData>
            <Divider />
            <CollapseData defaultOpen={false} icon={<Grade />} text="Moves">
                <List component="div" disablePadding>
                    {moves.map(({move}) => <ListItemText key={move.name} className="capitalize" primary={move.name} />)}
                </List>
            </CollapseData>
        </List>
    </Drawer>;
}

export default DataView;