import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 60%;
  margin: 3rem auto;
  text-align: center;

  & h1,
  & h2 {
    color: #d84315;
  }

  & ul {
    line-height: 2rem;
  }

  & img {
    width: 100%;
    border: 1px solid #d84315;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 0.8rem;
    font-weight: lighter;
  }
`;

export const StyledBtn = styled.button`
  padding: 1rem 1.2rem;
  outline: none;
  border: none;
  border-radius: 0.2rem;
  background-color: #d84315;
  cursor: pointer;
  margin: 1rem auto;
  color: #fff;
  font-size: 1.1rem;
`;
