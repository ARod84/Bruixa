import React from 'react';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

const Layout = ({children}) => {

  return (
    <React.Fragment>
        <Header />
        <main>{children}</main>
        <Footer />
    </React.Fragment>
  )
};

export default Layout;