import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="../public/images/irfan.logo.png" alt="logo" className='logo' />
      </NavLink>
      <Navbar />
  </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${ ({theme}) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center; 

  .logo{
    height: 4rem;
  }
`;

export default Header