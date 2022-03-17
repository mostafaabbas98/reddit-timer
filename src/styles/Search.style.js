import styled from 'styled-components';

export const StyledSearch = styled.div`
  width: 90%;
  margin: 4rem auto;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & input {
    padding: 0.3rem;
    font-size: 1.1rem;
    outline: none;
    border: 1px solid #d84315;
    border-radius: 0.3rem;
  }

  & button {
    padding: 0.3rem 0.6rem;
    font-size: 1.1rem;
    border: 1px solid #d84315;
    border-radius: 0.3rem;
    background-color: #d84315;
    color: #fff;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    & input {
      width: 100%;
      padding: 0.5rem;
    }
  }
`;
