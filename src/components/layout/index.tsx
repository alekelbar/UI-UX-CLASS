import { Box } from '@mui/system';
import React from 'react';
import Footer from '../footer';
import Nabvar from '../nabvar';

interface Props {
  children: React.ReactNode;
}


const Layout = ({ children }: Props) => {
  return (
    <Box component="div" py={9}>
      <Nabvar />
      {children}
      <Footer/>
    </Box>
  );
};

export default Layout;