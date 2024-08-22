import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

export default function Tablet({ value, handleChangeIndex }) {

  const handleChange = (event, newValue) => {
    handleChangeIndex(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        aria-label="secondary tabs example"
        TabIndicatorProps={{
          style: { backgroundColor: "#34c94b" } // Custom indicator color
        }}
        sx={{
          '& .MuiTab-root': {
            color: '#ffff', // Text color for tabs
            // Optional: Change font weight
          },
          '& .Mui-selected': {
            color: '#ffff', // Text color for selected tab
          },
        }}
      >
        <Tab value={0} label="All" />
        <Tab value={1} label="Rock" />
        <Tab value={2} label="Pop" />
        <Tab value={3} label="Jazz" />
        <Tab value={4} label="Blues" />
      </Tabs>
    </Box>
  );
}
