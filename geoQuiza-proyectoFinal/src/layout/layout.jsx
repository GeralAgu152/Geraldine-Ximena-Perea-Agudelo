import React from 'react';
import './styles/styles.css';
import Header from '../components/header/header';
const Layout = ({ children }) => {
  return (
    <div className="principal-container-layout">
      <Header />
      <main>{children}</main>
      {/* footer component */}
    </div>
  );
};

export default Layout;
