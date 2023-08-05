import { Box, Link, Switch } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import React, { useState } from 'react';

const Sidebar = ({setPath, mode, setMode}) => {
    const[dark, setDark] = useState(false);
    const handleChangeMode = () => {
        setDark(!dark);
        setMode(mode === "light" ? "dark" : "light");
    }
    return (
        <Box sx={{ flex: {md: '1', sm:'2'} }}>
            <Box sx={{ position: 'fixed' }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setPath("home")}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setPath("product")}>
                            <ListItemIcon>
                                <ProductionQuantityLimitsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setPath("wishlist")}>
                            <ListItemIcon>
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Wishlist" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setPath("about")}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setPath("contact")}>
                            <ListItemIcon>
                                <PermPhoneMsgIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact Info" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                               {!dark ? <WbSunnyIcon /> : <NightsStayIcon />}
                            </ListItemIcon>
                            <ListItemText primary="Dark Mode" />
                            <Switch color="secondary" onChange={handleChangeMode}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar