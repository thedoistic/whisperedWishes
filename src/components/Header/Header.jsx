import React from 'react';
import { Typography, Button, Card, Slider, IconButton, Box, TextField } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = ({ herName, setHerName, handleNameSubmit }) => {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-500 to-black text-white w-full h-full p-6">
      <Card className="w-80 h-80 flex justify-center items-center mb-8 shadow-lg rounded-lg">
        <img 
          src="https://t2.genius.com/unsafe/380x380/https%3A%2F%2Fimages.genius.com%2F8189e957069d9b6c7accea66c7fbab10.1000x1000x1.png" 
          alt="Album Artwork" 
          className="w-full h-full object-cover" 
        />
      </Card>
      <Typography variant="h4" className="font-bold mb-2 text-center">No. 1 Party Anthem</Typography>
      <Typography variant="h6" className="mb-6 text-center">Arctic Monkeys</Typography>
      <Box className="flex gap-4 mb-4">
        <IconButton color="inherit">
          <FavoriteIcon />
        </IconButton>
        <IconButton color="inherit">
          <PlayArrowIcon />
        </IconButton>
        <IconButton color="inherit">
          <PauseIcon />
        </IconButton>
      </Box>
      <Slider defaultValue={50} aria-label="Track Progress" sx={{ width: '80%', color: 'pink' }} />
      <Typography variant="body2" className="text-gray-200 mb-8 text-center" style={{ marginTop: '20px' }}>
        You are my sun, my moon, and all my stars... 🌙✨
      </Typography>
      <Box className="text-center mb-6" style={{ marginTop: '2.5rem' }}>
        <Typography variant="h6" className="font-semibold" style={{ fontFamily: 'cursive' }}>Type your name here:</Typography>
        <form onSubmit={handleNameSubmit} className="flex flex-col items-center space-y-6 w-full max-w-xs"  style={{ marginTop: '1.5rem' }}>
          <TextField
            type="text"
            value={herName}
            onChange={(e) => setHerName(e.target.value)}
            placeholder="Enter your name"
            variant="outlined"
            fullWidth
            InputProps={{
              className: "text-black text-center",
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'gray',
                  borderRadius: '0px',
                },
                '&:hover fieldset': {
                  borderColor: 'pink',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'pink',
                },
                '& input': {
                  backgroundColor: 'white',
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: '12px', backgroundColor: 'red' }} 
            className="w-full"
          >
            Let’s Start!
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Header;
