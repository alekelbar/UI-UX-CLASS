import { Button } from '@mui/material';
import React from 'react';

interface Props {
  text: string;
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  icon?: JSX.Element;
  fullwidth?: boolean
}

const TextButton = ({ text, color, icon, fullwidth }: Props) => {
  return (
    <Button variant='outlined' color={color} fullWidth={fullwidth || false}>
      {text}
      {icon && icon}
    </Button>
  );
};

export default TextButton;