import { Box, Typography, FormControl, FormLabel, TextField, Checkbox, FormControlLabel, Button } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";



export default function RegisterScreen() {
    return (
        <>
            <NavigationBar />
            <Box
                sx={{
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "flex-start",
                    alignItems: 'center',
                    backgroundColor: "white",
                    overflowY:'auto',
                    py:'20px',
                    minHeight:'110vh'
                }}
            >
                <Typography sx={{ color: "black", fontSize: '1.5em', fontWeight: 'bold', py: '20px' }}>
                    VILO
                </Typography>
                <Box sx={{height:'85%', width: '30%', backgroundColor:'#F4F4F4'}}> 
                    <FormControl sx={{width:'100%', display:'flex', alignItems:'flex-start', justifyContent:'flex-start'}}>
                        <FormLabel sx={{pl:'40px', pt:'5%', color: 'black','&.Mui-focused': {color: 'black',},}}>Etunimi</FormLabel>
                        <TextField variant="outlined" sx={{
                            width:'100%',
                            px:'40px', 
                            height:'50px', 
                            input: { cursor: 'pointer' },
                            '& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: 'black',},
                        },}}></TextField>
                         <FormLabel sx={{pl:'40px', pt:'5%', color: 'black','&.Mui-focused': {color: 'black',},}}>Sukunimi</FormLabel>
                        <TextField variant="outlined" sx={{
                            width:'100%',
                            px:'40px', 
                            height:'50px', 
                            input: { cursor: 'pointer' },
                            '& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: 'black',},
                        },}}></TextField>
                        <FormLabel sx={{pl:'40px', pt:'5%', color: 'black','&.Mui-focused': {color: 'black',},}}>Sähköposti</FormLabel>
                        <TextField variant="outlined" sx={{
                            width:'100%',
                            px:'40px', 
                            height:'50px', 
                            input: { cursor: 'pointer' },
                            '& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: 'black',},
                        },}}></TextField>
                        <FormLabel sx={{pl:'40px', pt:'5%', color: 'black','&.Mui-focused': {color: 'black',},}}>Salasana</FormLabel>
                        <TextField variant="outlined" sx={{
                            width:'100%',
                            px:'40px', 
                            height:'50px', 
                            input: { cursor: 'pointer' },
                            '& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: 'black',},
                        },}}></TextField>
                        <FormLabel sx={{pl:'40px', pt:'5%', color: 'black','&.Mui-focused': {color: 'black',},}}>Toista salasana</FormLabel>
                        <TextField variant="outlined" sx={{
                            width:'100%',
                            px:'40px', 
                            height:'50px', 
                            input: { cursor: 'pointer' },
                            '& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: 'black',},
                        },}}></TextField>
                        <FormControlLabel sx={{pl:'40px', py:'5%', color:'black'}} control={<Checkbox name="I'm teacher" sx={{color: '#0B981E','&.Mui-checked': {color: '#1B822C'}}}/>} label="Luon opettajan tunnukset"/>
                    </FormControl>
                    <Button sx={{
                        backgroundColor:'#0B981E',
                        width:'82%', 
                        color:'white', 
                        height:'50px',
                        mb:'30px',
                        '&:hover': {
                            backgroundColor: '#1B822C',
                        },
                        }}>Rekisteröidy</Button>
                </Box>
            </Box>
            <Footer />
        </>

    )
}