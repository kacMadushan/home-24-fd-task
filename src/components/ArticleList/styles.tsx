import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  align-items: flex-start;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;