import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
    return (
      <Box
        sx={{
          width: '70%',
          marginLeft: '15%',
          marginTop: '3%'
        }}
      >
      <TextField fullWidth label="Search" id="fullWidth" />
    </Box>
    );
  }
  