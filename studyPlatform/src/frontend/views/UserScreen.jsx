import NavigationBar from "../components/NavigationBar"
import Footer from "../components/footer";
import { Box, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from "react";
import profilepic from "/src/assets/default_profile_pic.jpg"
import CourseCard from "../components/courseCard";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

{/* This view shows users information and courses that they have.
    Information icludes profilepicture, name and email. It will also show if you are a student or a teacher.
    The information here is partially hardcoded as we need to deside if we actually want information like phonenumber.
*/}


{/* The number of cards is currently hardcoded for testing purposes.
    The Courses box showcases first 2 courseCards by default but if "Näytä enemmän kursseja" is clicked it will make
    the box scrollable and render all the courses 2 per row.
    The teacher version of Courses box only shows links to courses instead of cards. One link is rendered per row.
    Links are also on the left of the box instead of center like cards.
*/}


export default function UserScreen() {
    const [user, setUser] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const numOfCourses = 6;
    const courseLink = "kevät/2024/mikrokontrollerit";

    const handleShowMore = () => {
        setShowMore(!showMore);
    };
    const coursesToShow = showMore ? numOfCourses : 2;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/users/666801f7d7da07deb01d19da`); {/*666854ce822efbf976fe743f */}
                if (!response.ok) {
                    console.log('Response not ok:', response);
                    throw new Error(`Failed to fetch user data: ${response.status}`);
                }
                console.log('Response:', response);
                const userData = await response.json();
                console.log('user data: ', userData);
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setUser(null);
            }
        };
        fetchUserData();
    }, []);
    if (user === null) {
        return (
            <div>Loading...</div>
        );
    }

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
                <Box
                    sx={{
                        height: '100%',
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "flex-start",
                        px: '40px',
                        backgroundColor: "white"
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', pt: '20px' }}>
                            <img src={profilepic} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{ fontSize: 40, color: "black", pt: '40px', px: '20px' }}
                            >
                                {user.firstName} {user.lastName}
                            </Typography>
                        </Box>
                        <a href="/settings" style={{ paddingTop: '90px' }}>
                            <SettingsIcon sx={{ color: "black", fontSize: 20 }} />
                        </a>
                    </Box>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: 20, color: "white", backgroundColor: "#686868", border: '2px solid black',
                            width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: '20px', pb: '20px'
                        }}
                    >
                        <h2 style={{ fontSize: '20px' }}>Käyttäjätiedot</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '10px' }}>{user.email}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '10px' }}>puh. +358358358588</span>
                            </div>
                            <div>Lehtori, tieto- ja viestintätekniikka</div>
                        </div>
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: "#686868", border: '2px solid black', width: '100%', minHeight: '40%', display: 'flex',
                            flexDirection: 'column', alignItems: 'flex-start', pl: '20px', pb: '20px', marginTop: '20px'
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{ fontSize: 20, color: "white", fontWeight: 'bold', py: '20px' }}
                        >
                            Kurssit
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                overflowY: showMore ? 'scroll' : 'hidden',
                                maxHeight: showMore ? '400px' : 'auto',
                                padding: '10px'
                            }}
                        >
                            {user.isTeacher
                                ? <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '20px 0', alignItems: 'flex-start', justifyContent:'flex-start' }}>
                                    
                                        { Array.from({ length: coursesToShow }).map((_, index) => (
                                            <a key={index} href={courseLink} >
                                                {courseLink} {index + 1}
                                            </a>
                                        ))}
                                       
                                </Box> 
                                : <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', gap: '20px 0' }}>
                                        {Array.from({ length: coursesToShow }).map((_, index) => (
                                            <CourseCard key={index} />
                                        ))}
                                </Box>
                            }

                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                onClick={handleShowMore}>
                                <Typography sx={{ pt: '20px', color: 'white' }}>
                                    {showMore ? 'Näytä vähemmän kursseja' : 'Näytä enemmän kursseja'}
                                </Typography>
                                {showMore ? <ExpandLessIcon/> : <ExpandMoreIcon />}
                                
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
