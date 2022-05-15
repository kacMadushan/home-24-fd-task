import React, { FC } from 'react';
import { StickyBar, List, } from './styles';
import ChildCategorieListItem from './ChildCategorieListItem';

type ListProps = {
  list: {
    name: string,
    urlPath: string,
  }[]
};

const ChildCategorieList: FC<ListProps> = ({ list }) => {
  return (
    <StickyBar>
      <List>
        {list.map(({ name, urlPath }) => (
          <ChildCategorieListItem
            key={name}
            name={name}
            url={urlPath}
          />
        ))}
      </List>
    </StickyBar>
  );
};

export default ChildCategorieList;