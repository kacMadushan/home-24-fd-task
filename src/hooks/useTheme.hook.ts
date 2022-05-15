import React from 'react';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = React.useState('light')

  React.useEffect(() => {
    const themeQuery = window.matchMedia('(prefers-color-scheme: light)')
    setCurrentTheme(themeQuery.matches ? 'light' : 'dark')
    themeQuery.addEventListener('change', ({ matches }) => {
      setCurrentTheme(matches ? 'light' : 'dark')
    })
  }, [])

  return [currentTheme] as const;
};