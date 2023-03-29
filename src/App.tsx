import { ThemeProvider } from '@emotion/react';
import { TimerOutlined, Widgets } from '@mui/icons-material';
import { Button, createTheme, CssBaseline, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { KeyboardEvent, useEffect, useState } from 'react';
import './App.css';
import Key from './components/key';
import Paragraph from './components/Paragraph';
import SettingPanel from './components/settingPanel';
import Timer from './components/Timer';
import { lightTheme, darkTheme } from './config/theme';
import { ThemeContext } from './context/themeContext';
import { keyboardLayout, setPressed } from './helpers/Keyboard';
import Home from './pages/Home';

function App () {

  const [actualTheme, setActualTheme] = useState(lightTheme);
  const [keyboard, setKeyboard] = useState(keyboardLayout);

  const toggleTheme = (light: boolean) => {
    const newTheme = createTheme(light ? lightTheme : darkTheme);
    setActualTheme(newTheme);
  };

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      console.log(event.code)
      setKeyboard(setPressed(event.code, true));
    });

    window.addEventListener('keyup', (event) => {
      setKeyboard(setPressed(event.code, false));
    });
    return () => {
      window.removeEventListener('keydown', (event) => { });
      window.removeEventListener('keyup', (event) => { });
    };
  }, []);


  return (
    <ThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={actualTheme}>
        <CssBaseline />
        <Home>
          <Grid container direction='row' justifyContent={'center'} alignItems='center' p={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={6}>
              <Stack direction={'row'} justifyContent={'flex-end'} alignItems='center' spacing={2}>
                <Timer />
                <Box>
                  <Button color='secondary' variant='contained' fullWidth>
                    Timer <TimerOutlined />
                  </Button>
                </Box>
              </Stack>
              <Paragraph />
              <Stack
                component={'div'}
                direction={'column'}
                justifyContent='center'
                alignItems={'center'}>
                {keyboard.map((row, rowIndex) => (
                  <Stack
                    spacing={2}
                    key={rowIndex}
                    direction="row"
                    width={'100%'}
                    justifyContent={'center'}
                  >
                    {row.map((key, columnIndex) => (
                      <Key key={columnIndex} Keyboard_item={key.value} pressed={key.pressed} />
                    ))}
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
              <SettingPanel />
            </Grid>
          </Grid>
        </Home>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
