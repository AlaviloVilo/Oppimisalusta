import { Card } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";

{/* Component that shows the name of a specific course and it's background.
    The cards are clickable and will dicrect you to the course page of corresponging course.
    Everything in here is hardcoded for now and will be updated once the database is ready. 
*/}
export default function CourseCard(){
    return(
        <Card sx={{width: '280px', height:'180px', backgroundColor:"#AC91E5", borderRadius:2}}>
            <CardMedia
            sx={{height:'120px'}}
            image="/src/assets/courseCard_background.png"
            title="Mikrokontrollerit 1"
            />
            <Typography gutterBottom variant='h5' component = "div" sx={{color:"white"}}>
            Mikrokontrollerit 1
            </Typography>

        </Card>
    )
}