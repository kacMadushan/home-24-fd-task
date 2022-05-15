import React, { FC } from 'react';
import { Wrapper } from './styles';
import { formatter } from '../../../helper';
import Thumbnail from '../../Thumbnail';
import { PrimaryButton } from '../../Button';

type ArticleProps = {
  name: string,
  images: {
    path: string
  }[],
  prices: {
    regular: {
      value: number
    }
  }
};

const ArticleListItem: FC<ArticleProps> = ({ name, images, prices }) => {
  const urlPath = images[0].path;
  return (
    <Wrapper>
      <Thumbnail path={urlPath} alt={name} />
      <h5>{name}</h5>
      <div>{formatter.format(prices.regular.value / 100)}</div>
      <PrimaryButton>Add To Cart</PrimaryButton>
    </Wrapper>
  );
};

export default ArticleListItem;