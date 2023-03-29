import { Menu, RestartAlt, Score, Settings } from '@mui/icons-material';
import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
import React from 'react';

const SettingPanel = () => {
  return (
    <Stack direction={'column'} spacing={1}>
      <Button fullWidth variant='contained' color='secondary'>
        <Stack direction={'row'} justifyContent='space-between' spacing={2}>
          <Typography variant='caption'>Settings</Typography>
          <Settings />
        </Stack>
      </Button>
      <Button fullWidth variant='contained' color='secondary'>
        <Stack direction={'row'} justifyContent='space-between' spacing={2}>
          <Typography variant='caption'>Enumerate</Typography>
          <Menu />
        </Stack>
      </Button>
      <Button fullWidth variant='contained' color='secondary'>
        <Stack direction={'row'} justifyContent='space-between' spacing={2}>
          <Typography variant='caption'>Score</Typography>
          <Score />
        </Stack>
      </Button>
      <Button fullWidth variant='contained' color='secondary'>
        <Stack direction={'row'} justifyContent='space-between' spacing={2}>
          <Typography variant='caption'>Restart</Typography>
          <RestartAlt />
        </Stack>
      </Button>
    </Stack>
  );
};

export default SettingPanel;