import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Box, Container, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import NewsCardComponent from "../components/NewsCardComponent";
import { useState, useEffect } from "react";


const NoHoverButton = styled(Button)({
    '&:hover': {
        backgroundColor: 'inherit', // Keeps the background color the same on hover
        boxShadow: 'none',         // Removes any box shadow on hover
        color: 'green',
        alignItems: "flex-start"
    },
    // Restyling a mui Button using "styled"-method. This is used for the in-page navigation.
});

export default function Home() {

    const [user, setUser] = useState(null);
    const [newsCards, setNewsCards] = useState([]);
    const [courses, setCourses] = useState([]);
    const buttons = ["Kaikki", "Kommentit", "Ilmiannot", "Uutiset"];

    const enrolledCourses = [
        { courseId: '101', courseName: 'Matematiikka' },
        { courseId: '102', courseName: 'Fysiikka' },
        { courseId: '103', courseName: 'Maantiede' },
    ];

    /*
        useEffect(() => {
            const fetchUserData = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/api/users/666801f7d7da07deb01d19da`); {/*666854ce822efbf976fe743f }
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
    */

    //Currently gets all the news
    useEffect(() => {
        const fetchNewsCards = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/newsCards');
                if (!response.ok) {
                    console.log("response not ok: ", response)
                    throw new Error(`Failed to fetch news cards: ${response.status}`);
                }
                const data = await response.json();
                console.log("data: ", data)
                setNewsCards(data);
            } catch (error) {
                console.error('Error fetching news cards:', error);
            }
        };
        fetchNewsCards();
    }, []);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/courses');
                if (!response.ok) {
                    console.log("response not ok: ", response)
                    throw new Error(`Failed to fetch courses: ${response.status}`);
                }
                const data = await response.json();
                console.log("data: ", data)
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);

    return (
        <>
            <NavigationBar />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                minHeight: "100vh",
                width: "100vw",
                overflowX: "hidden"
            }}
            >
                <div >
                    <input type="text" placeholder="Etsi Sivulta" className="navbar-search" style={{ width: '25rem' }} />
                </div>
                <div>
                    <Box sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        width: "75vw"

                    }}
                    >
                        {buttons.map((label, index) => (
                            <Box key={label} sx={{ display: "flex", alignItems: "center" }}>
                                <NoHoverButton>{label}</NoHoverButton>
                                {index < buttons.length - 1 && <span style={{ margin: '0 0.1rem', fontSize: "1.2rem" }}>|</span>}
                            </Box>
                        ))}
                    </Box>
                </div>

                <div>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <Box sx={{
                            width: "60vw",
                            height: "60vh",
                            backgroundColor: "#F4F4F4",
                            display: "flex",
                            justifyContent: "center",
                            overflowY: "scroll",
                            marginRight: "3%"
                        }}
                        >
                            <Box sx={{
                                width: "45vw",
                                minheight: "100%",
                                flexDirection: "column",
                                alignItems: "center",
                                flexShrink: 0,
                            }}
                            >
                                {newsCards.map((card, index) => (
                                    <NewsCardComponent
                                        key={index}
                                        refCourse={card.refCourse}
                                        newsTitle={card.newsTitle}
                                        message={card.message}
                                        date={card.date}
                                        author={card.author}
                                    />
                                ))}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: '20vw',
                                height: '60vh',
                                backgroundColor: '#EFEFEF',
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: '10px',
                            }}
                            >
                            <Box sx={{
                                backgroundColor: "#DBDBDB",
                                marginBottom: "4%"
                            }}>
                                <h3>Enrolled Courses</h3>
                            </Box>
                            <Box
                                sx={{
                                    overflowY: 'scroll',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    height: "100%"
                                }}
                            >
                                {courses.map((course, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: '90%',
                                            
                                            padding: '3em',
                                            margin: '5px 0',
                                            backgroundColor: '#FFF',
                                            borderRadius: '5px',
                                            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        {course.courseName}
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                    </Box>
                </div>
                <Footer />
            </Box >
        </>
    )
}