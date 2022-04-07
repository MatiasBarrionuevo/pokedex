import { ArrowBack, Build, Grade, Leaderboard, OfflineBolt } from "@mui/icons-material";
import { Button, Divider, Drawer, List, ListItemText, ListSubheader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CollapseData from "../CollapseData";
import StatsGrid from "../StatsGrid";
import TypeGrid from "../TypeGrid";
import './styles.scss';

export function DataView({
  open,
  toggleDrawer,
  data,
}) {
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
    return <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        classes={{modal: "drawerContainer"}}
    >
        <Button className="backButton" startIcon={<ArrowBack />} onClick={toggleDrawer}>Close</Button>
        <Box className="drawerImageContainer">
            <img className="drawerImage" src={sprites.front_default} alt={name} />
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