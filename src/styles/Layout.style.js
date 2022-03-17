import styled from 'styled-components';

export const StyledLayout = styled.div`
  & main {
    min-height: 70vh;
  }

  @media (max-width: 700px) {
    & main {
      min-height: 60vh;
    }
  }
`;
