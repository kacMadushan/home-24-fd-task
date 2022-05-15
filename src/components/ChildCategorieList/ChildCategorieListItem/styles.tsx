import styled from 'styled-components';
import { neutral, typeScale, weights } from '../../../utils';

export const ListItem = styled.li`
  text-align: left;
`;

export const ItemLink = styled.a`
  display: block;
  color: ${neutral[600]};
  font-weight: ${weights.normal};
  font-size: ${typeScale.paragraph};
  padding: 12px 16px;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    background-color: ${props => props.theme.primaryColor}
  } 
`;