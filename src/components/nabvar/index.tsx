import { Keyboard } from '@mui/icons-material';
import { AppBar, Avatar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import TextButton from '../button';

interface Props {

}

const Nabvar = ({ }: Props) => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Grid container direction={'row'} justifyContent='space-between' alignItems={'center'}>
          <Grid item>
            <Stack direction={'row'} alignItems='center'>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Keyboard />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Typing - App
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction={'row'} justifyContent='space-between' alignItems={'center'} spacing={2}>
            <TextButton color="success" text='Sign Up' />
            <TextButton color="info" text='Log In' />
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar >
  );
};

export default Nabvar;