import { Typography, useTheme } from '@mui/material';

interface Props {
  Keyboard_item: string;
  pressed?: boolean;
}

const Key = ({ Keyboard_item, pressed = false }: Props) => {
  const theme = useTheme();
  return (
    <Typography p={1} variant='h5' sx={{
      display: 'inline',
      borderRadius: '8px',
      bgcolor: pressed ? theme.palette.primary.main : '',
      color: 'black'
    }}>
      {Keyboard_item}
    </Typography>
  );
};

export default Key;