import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
`;

export const StyledLogo = styled.div`
  & a {
    display: flex;
    align-items: center;
    gap: 0.1rem;
  }

  & span::first-letter {
    color: #d84315;
    font-size: x-large;
    font-weight: bold;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;

  & li:hover a,
  & li a.active {
    color: #d84315;
  }
`;
