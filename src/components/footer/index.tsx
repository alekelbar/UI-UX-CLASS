import { Box, Divider, Grid, styled, useTheme, useThemeProps } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import React, { useContext, useState } from 'react';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { ThemeContext } from '../../context/themeContext';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


const Footer = () => {
  const [checked, setChecked] = useState(false);


  const toggleTheme = useContext(ThemeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (toggleTheme) {
      toggleTheme(checked);
    }
  };


  return (
    <Grid container
      position={'absolute'}
      bottom={0}
      left={0}
      p={2}
      sx={{
        bgcolor: theme => theme.palette.secondary.main,
      }}
      // spacing={2}
      width="100%"
      direction='row'
      justifyContent={'space-between'}
      alignItems='center'>
      {/* toggle night mode */}
      <Grid item xs={4}>
        <Stack direction={'row'} justifyContent='start'>
          <MaterialUISwitch checked={checked} onChange={handleChange} />
        </Stack>
      </Grid>
      {/* About contact page */}
      <Grid item xs={4}>
        <Stack direction={'row'} justifyContent='space-between'>
          <Typography variant='caption' color='whitesmoke'>About</Typography>
          <Typography variant='caption' color='whitesmoke'>|</Typography>
          <Typography variant='caption' color='whitesmoke'>Contact</Typography>
        </Stack>
        <Typography variant='caption' color={'whitesmoke'}>
          @alekelbar - La Cuesta, Corredores, Costa Rica.
          <br />
          ©️ 2023
        </Typography>
      </Grid>
      {/* follow on social networks */}
      <Grid item xs={4}>
        <Stack spacing={1} direction={'row'} justifyContent='flex-end' alignItems={'center'}>
          <Typography variant='body1' color={'white'}>Follow US</Typography>
          <Stack direction={'row'} spacing={2}>
            <Facebook color={"primary"} />
            <Twitter color={"primary"} />
            <Instagram color={"primary"} />
            <YouTube color={"primary"} />
          </Stack>
        </Stack>
      </Grid>
    </Grid >
  );
};

export default Footer;