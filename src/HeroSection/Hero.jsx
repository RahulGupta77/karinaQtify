import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Headphone from './headphone.png'; // Default import

export default function Hero() {
  return (
    <Container
      disableGutters
      sx={{
        maxWidth: '100%',
        bgcolor: 'black',
        height: 'auto',
        py: 4,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Box>
        <Typography 
          sx={{ 
            color: '#FFFFFF',
            fontSize: '1.5rem',
            lineHeight: '1.4',
            fontFamily: 'Poppins, sans-serif' 
          }}
        >
          100 Thousand Songs, ad-free <br />
          Over thousands podcast episodes
        </Typography>
      </Box>
      <Box
        component="img"
        src={Headphone}
        alt="headphone"
        sx={{
          width: 100,// Adjust size as needed
          height: 'auto',
          flexShrink: 0// Prevents image from shrinking
        }}
      />
    </Container>
  );
}
