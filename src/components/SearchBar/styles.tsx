import styled from 'styled-components';
import { primaryFont, typeScale, weights } from '../../utils';

export const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr);

  @media (max-width: 500px) {
    grid-auto-flow: auto;
  }
`;

export const Input = styled.input`
  display: inline-block;
  font-family: ${primaryFont};
  font-weight: ${weights.medium};
  font-size: ${typeScale.paragraph};
  padding: .5rem 2rem;
  border: 1px solid;
  border-radius: .2rem;
`;