import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';

function CollapseData({children, defaultOpen, icon, text}) {
    const [isVisible, setVisible] = useState(defaultOpen);
    return <>
        <ListItemButton onClick={() => setVisible(!isVisible)}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
            {isVisible ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
            classes={{wrapperInner:"CollapseBody"}}
            children={children}
            in={isVisible}
        />
    </>
}

export default CollapseData;