import React, { FC } from 'react';
import { SearchWrapper, Input } from './styles';

type SearchProps = {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: FC<SearchProps> = ({ value, onChange }) => {
  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder="Find favorite products..."
        value={value}
        onChange={onChange}
      />
    </SearchWrapper>
  )
}

export default SearchBar;