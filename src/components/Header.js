import React from 'react';
import { FcReddit } from 'react-icons/fc';
import { Link, NavLink } from 'react-router-dom';
import { StyledHeader, StyledLogo, StyledNav } from '../styles/Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <Link to="/">
          <FcReddit size="2rem" />
          <span>Reddit Time</span>
        </Link>
      </StyledLogo>
      <StyledNav>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Search
          </NavLink>
        </li>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
