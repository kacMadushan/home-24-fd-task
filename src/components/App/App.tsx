import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, darkTheme, defaultTheme } from '../../utils';
import { Container, Header, SideBar, Content, PanelHeading, Footer, FooterText } from './styles';
import { useCategoriesFetch, useSearchQuery } from '../../hooks';
import { searchdArticles } from '../../helper';
import Logo from '../Logo';
import Spinner from '../Spinner';
import SearchBar from '../SearchBar';
import { H3 } from '../Heading';
import ChildCategorieList from '../ChildCategorieList';
import ArticleList from '../ArticleList';

const App = () => {
  const [
    isLoading,
    childCategories,
    articles,
    name
  ] = useCategoriesFetch();
  const [searchQuery, setSearchQuery] = useSearchQuery('');
  // set app thems (dark or light) in hooks
  //const [currentTheme] = useTheme();

  // search onChange
  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value)
  };

  const useDarkTheme = false;
  const filterdArticle = searchdArticles(articles, searchQuery);

  const childCategoriesRender = isLoading ? (
    <Spinner />
  ) : (
    <>
      <PanelHeading>
        <H3>Kategorien</H3>
      </PanelHeading>
      <ChildCategorieList list={childCategories} />
    </>
  )

  const articleListRendered = isLoading ? (
    <Spinner />
  ) : (
    <>
      <PanelHeading>
        <H3>{name}</H3>
      </PanelHeading>
      <ArticleList articles={filterdArticle} />
    </>
  )

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo />
          <SearchBar
            value={searchQuery}
            onChange={handleSearchQuery}
          />
        </Header>
        <SideBar>{childCategoriesRender}</SideBar>
        <Content>{articleListRendered}</Content>
        <Footer>
          <FooterText>
            All prices are in euros (€) including statutory sales tax plus shipping costs.
          </FooterText>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default App;