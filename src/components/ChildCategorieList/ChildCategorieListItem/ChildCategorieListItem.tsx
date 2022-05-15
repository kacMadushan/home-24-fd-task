import React, { FC } from 'react';
import { ListItem, ItemLink } from './styles';

type LinkProps = {
  url: string,
  name: string
};

const ChildCategorieListItem: FC<LinkProps> = ({ url, name }) => {
  return (
    <ListItem>
      <ItemLink href={`/${url}`}>{name}</ItemLink>
    </ListItem>
  );
};


export default ChildCategorieListItem;