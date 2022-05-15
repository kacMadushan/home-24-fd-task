import React from 'react';

export const useSearchQuery = (initialValue: string) => {
  return React.useState(initialValue)
};
