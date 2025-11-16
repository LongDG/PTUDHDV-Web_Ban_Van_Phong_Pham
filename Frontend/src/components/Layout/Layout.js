import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <main className="Layout-main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

