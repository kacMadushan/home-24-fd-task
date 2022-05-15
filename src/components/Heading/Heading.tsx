import styled from 'styled-components';
import { typeScale, weights } from '../../utils';

export const H1 = styled.h1`
  font-weight: ${weights.bold};
  font-size: ${typeScale.header1};
`;

export const H2 = styled.h2`
  font-weight: ${weights.bold};
  font-size: ${typeScale.header2};
`;

export const H3 = styled.h3`
  font-weight: ${weights.bold};
  font-size: ${typeScale.header3};
`;

export const H4 = styled.h4`
  font-weight: ${weights.medium};
  font-size: ${typeScale.header4};
`;

export const H5 = styled.h5`
  font-weight: ${weights.medium};
  font-size: ${typeScale.header5};
`;

export const H6 = styled.h6`
  font-weight: ${weights.medium};
  font-size: ${typeScale.paragraph};
`;