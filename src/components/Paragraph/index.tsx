import { Box, TextField } from '@mui/material';
import React from 'react';

const Paragraph = () => {
  return (
    <Box p={2}>
      <TextField rows={3} multiline sx={{ width: '100%' }} disabled value={'Enim exercitation incididunt cupidatat nostrud. In non cillum dolore velit. Anim quis amet nisi quis ut.'} />
    </Box>
  );
};

export default Paragraph;