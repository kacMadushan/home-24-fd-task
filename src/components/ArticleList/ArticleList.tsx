import React, { FC } from 'react';
import { Wrapper } from './styles'
import ArticleListItem from './ArticleListItem';
import NotFound from '../NotFound';

type ArticlesProps = {
  articles: {
    name: string,
    images: {
      path: string
    }[],
    prices: {
      regular: {
        value: number
      }
    }
  }[]
};

const ArticleList: FC<ArticlesProps> = ({ articles }) => {
  const info = 'Did not match any products.'
  let articleElement = null;
  if (articles.length) {
    articleElement = articles.map((article, index) => (
      <ArticleListItem key={index} {...article} />
    ))
  } else {
    articleElement = <NotFound message={info} />
  }
  return (
    <Wrapper>{articleElement}</Wrapper>
  );
};

export default ArticleList;