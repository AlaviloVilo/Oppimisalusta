
import { Box, List, ListItem, ListItemText, Divider } from '@mui/material';

export default function SideNav() {
  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: '#f7f7f7',
        color: 'black', 
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '20px',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
      }}
    >
      <List component="nav">
      <ListItem button>
          <ListItemText 
            primary="Course content" 
            primaryTypographyProps={{
              fontWeight: 'bold',
              fontSize: '1.2rem', 
            }}
          /></ListItem>
        
        <Divider />
        <ListItem button>
          <ListItemText primary="Section 1" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Section 2" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Section 3" />
        </ListItem>
      </List>
    </Box>
  );
}
