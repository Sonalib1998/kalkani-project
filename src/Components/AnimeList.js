import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
export const AnimeList = ({ animelist }) => {
  
  
  const goto=(anime)=>{
    window.open(anime.url, "_blank");

  }
  return (
    <>
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <Container maxWidth="sm">
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                  <img
                  src={anime.images.jpg.image_url}
                  alt="animeImage"
                />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={anime.name} />
                <IconButton color="primary" aria-label="upload picture"  component="label" onClick={() => goto(anime)}>
 <ArrowForwardIcon />
 </IconButton>
              </ListItem>
            </List></Container>
            );
          })
        : "No Characters Found !!!"}

    </>
  );
};
