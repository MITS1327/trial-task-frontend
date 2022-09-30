import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

const Note = ({ title, text } : { title : string | null, text : string | null }) => {

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardContent>
                    <HighlightOffIcon />
                    <EditIcon />
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default Note;