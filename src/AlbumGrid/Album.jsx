// Album.jsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Async function to fetch images
async function GetImages() {
  try {
    const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
    const images = response.data; // Adjust this according to the actual structure of the response
    console.log(images); // For debugging purposes
    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}

// React component
function Album() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await GetImages();
        setImages(data); // Adjust this according to the actual structure of the response
        const arr1 = data.map((ele) => ele.image);
        console.log(arr1);
        const arr2 = data.map((elem) => elem.follows);
        console.log(arr2);
        arr2.forEach(element => console.log(element));
        const arr3 = data.map((val) => val.title);
        console.log(arr3);
      } catch (error) {
        console.error('Failed to fetch images', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {images.map((image) => (
        <div key={image.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card sx={{ maxWidth: "232px" }}>
            <CardMedia
              component="img"
              alt={image.title}
              image={image.image}
            />
            <CardContent>
              <Chip label={image.follows} sx={{ backgroundColor: 'black', color: 'white' }} />
            </CardContent>
          </Card>
          <Typography gutterBottom variant="h5" component="div" sx={{ marginTop: '8px' }}>
            {image.title}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export default Album;

