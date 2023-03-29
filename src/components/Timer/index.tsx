import { Button, Stack, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

const Timer = () => {

  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.info.main} width={'70%'} borderRadius="20px">
      <Typography
        color="white"
        variant='h2'>15:<Box
          component={'span'}
          color="gray">
          00
        </Box>
      </Typography>
    </Box>
  );
};

export default Timer;