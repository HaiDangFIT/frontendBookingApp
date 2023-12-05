import { ReactNode } from 'react';
import Header from './header/Header';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';
import MailList from './mailList/MailList';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar/>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
