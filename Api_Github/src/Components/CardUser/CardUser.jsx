import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function CardUser(props) {
  return (
    <Card sx={{ width: 400, height: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.image}
          alt="imagen avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <a href={props.url}>{props.url}</a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
