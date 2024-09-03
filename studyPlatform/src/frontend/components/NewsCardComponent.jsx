import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const NewsCard = styled(Card)(({ theme }) => ({
    width: '100%',
    margin: theme.spacing(2, 0),
}));

const NewsCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
});

const NewsCardHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
});

const NewsCardComponent = ({ refCourse, newsTitle, message, date, author }) => {
    return (
        <NewsCard>
            <NewsCardContent sx={{ backgroundColor: "#DBDBDB" }}>
                <NewsCardHeader>
                    <Typography variant="subtitle1">
                        {refCourse || newsTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {new Date(date).toLocaleDateString()}
                    </Typography>
                </NewsCardHeader>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px' }}>
                    {author}
                </Typography>
                <Typography variant="body2">
                    {message.length > 100 ? message.substring(0, 100) + '...' : message}
                </Typography>
            </NewsCardContent>
        </NewsCard>
    );
};

export default NewsCardComponent;

