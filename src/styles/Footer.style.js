import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & a {
    color: #d84315;
    margin: 0 0.5rem;
    font-size: 0.9rem;
    font-weight: bold;
  }

  @media (max-width: 700px) {
    display: inline-block;
    text-align: center;

    & small {
      display: block;
      margin: 1rem auto;
    }
  }
`;
