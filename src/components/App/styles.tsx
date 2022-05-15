import styled from 'styled-components';
import { typeScale } from '../../utils';

export const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: auto 5fr auto;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer"
  ;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "sidebar"
      "content"
      "footer"
    ;
  }
`;

export const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  border-bottom: 1px solid rgba(26, 54, 126, 0.125);
  background-color: ${props => props.theme.gridBackground};

  @media (max-width: 500px) {
    grid-auto-flow: row;
    gap: 5px;
  }
`;

export const SideBar = styled.div`
  grid-area: sidebar;
  background-color: ${props => props.theme.gridBackground};
`;

export const Content = styled.div`
  grid-area: content;
  display: grid;
  align-items: flex-start;
  align-content: flex-start;
  background-color: ${props => props.theme.gridBackground};
`;

export const PanelHeading = styled.div`
  display: block;
  padding: .8rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(26, 54, 126, 0.125) 
`;

export const Footer = styled.footer`
  grid-area: footer;
  text-align: center;
  padding: 1rem;
  border-top: 1px solid rgba(26, 54, 126, 0.125);
  background-color: ${props => props.theme.gridBackground};
`;

export const FooterText = styled.p`
  font-size: ${typeScale.copyrightText}
`;
