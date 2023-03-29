import { Container } from '@mui/system';
import React from 'react';
import Layout from '../components/layout';

interface Props {
  children: React.ReactNode;
}

const Home = ({ children }: Props) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default Home;