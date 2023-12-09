import { ReactNode } from 'react';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';
import { Divider } from '@mui/material';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar/>
      <Divider/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
