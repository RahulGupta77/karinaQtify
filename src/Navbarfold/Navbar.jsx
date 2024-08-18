import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import Logo from "./Group1.png";
import "./Navbar.css";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(4), // Adjusted to create gap between search bar and logo
  marginLeft: 0,
  width: 'auto', // Set width to auto to fit content
  display: 'flex', // Use flexbox to align items
  flexGrow: 1 ,
  alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  padding: theme.spacing(2),
  // Padding on the right to make space for the button
  paddingRight: `calc(3em + ${theme.spacing(2)})`, // Adjusted padding to fit button
  transition: theme.transitions.create('width'),
 
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
  flexGrow: 1 ,
}));

const SearchButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  height: '100%',
  borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
  padding: theme.spacing(0, 2),
  minWidth: 'auto', // Adjust width to fit content
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.common.white, 0.0),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.8),
  },
  display: 'flex', // Center content inside button
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1 ,
}));

export default function Navbar() {
  return (
    
      <AppBar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'normal',flexGrow: 1 }} position="static" className='header'>
        <Toolbar>
          <a href="./" aria-label="logo">
            <div>
              <img src={Logo} alt="Company Logo" />
            </div>
          </a>

          <Search>
            <StyledInputBase 
              placeholder="Search an album of your choice."
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchButton variant="contained">
              <SearchIcon />
            </SearchButton>
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex' } }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'black',
                color: 'green',
                '&:hover': {
                  backgroundColor: 'darkgrey', // Optional: Change color on hover
                },
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Give Feedbacks
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
   
  );
}
