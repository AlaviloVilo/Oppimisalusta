import { Box, Typography, FormControl, FormLabel, TextField, Checkbox, FormControlLabel, Button } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";



export default function LoginScreen() {
    return (
        <>
            <NavigationBar />
            <Box
                sx={{
                    height: '90vh',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "flex-start",
                    alignItems: 'center',
                    backgroundColor: "white",
                }}
            >
                <Typography sx={{ color: "black", fontSize: '1.5em', fontWeight: 'bold', py: '20px' }}>
                    VILO
                </Typography>
                <Box sx={{height:'80%', width: '30%', backgroundColor:'#F4F4F4'}}> 
                    <FormControl sx={{width:'100%', display:'flex', alignItems:'flex-start', justifyContent:'flex-start', pt:'10%'}}>
                        <FormLabel sx={{pl:'40px', pt:'5%', color: 'black','&.Mui-focused': {color: 'black',},}}>Sähköposti</FormLabel>
                        <TextField variant="outlined" sx={{
                            width:'100%',
                            px:'40px', 
                            height:'50px', 
                            input: { cursor: 'pointer' },
                            '& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: 'black',},
                        },}}></TextField>
                        <FormLabel sx={{pl:'40px', pt:'5%', color: 'black','&.Mui-focused': {color: 'black',},}}>Salasana</FormLabel>
                        <TextField variant="outlined" name="password" type="password" sx={{
                            width:'100%',
                            px:'40px', 
                            height:'50px', 
                            input: { cursor: 'pointer' },
                            '& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: 'black',},
                        },}}></TextField>
                        <FormControlLabel sx={{pl:'40px', py:'5%', color:'black'}} control={<Checkbox name="remember login" sx={{color: '#0B981E','&.Mui-checked': {color: '#1B822C'}}}/>} label="Muista minut"/>
                    </FormControl>
                    <Button sx={{
                        backgroundColor:'#0B981E',
                        width:'82%', 
                        color:'white', 
                        height:'50px',
                        '&:hover': {
                            backgroundColor: '#1B822C',
                        },
                        }}>Kirjaudu sisään</Button>
                </Box>
            </Box>
            <Footer />
        </>

    )
}