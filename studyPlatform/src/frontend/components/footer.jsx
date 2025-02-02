import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const resetStyles = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
};
export default function Footer() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '5vh',
                backgroundColor: "#0B981E",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 20px',
                position: "fixed",
                bottom: 0
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: "1.5em" }}>VILO</Typography>
                <InstagramIcon style={{ color: 'white', fontSize: "1.5em" }} />
                <LinkedInIcon style={{ color: 'white', fontSize: "1.5em" }} />
            </Box>
            <Box sx={{ flexGrow: 1, textAlign: 'center', fontSize: "1em" }}>
                <a href="/yhteystiedot" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Yhteystiedot</a>
                <a href="/tietosuojakaytanto" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Tietosuojakäytäntö</a>
                <a href="/copyright" style={{ color: 'white', textDecoration: 'none', margin: '0 20px' }}>Copyright</a>
            </Box>
        </Box>
    )
}

