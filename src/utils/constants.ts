export const breakPoints = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const queries = {
  tabletAndUp: `(min-width: ${breakPoints.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${breakPoints.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${breakPoints.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${breakPoints.tabletMin / 16}rem) and
    (max-width: ${(breakPoints.laptopMin - 1) / 16}rem)`,
};
