import React, { FC } from 'react';

type ImageProps = {
  path: string,
  alt?: string
};

const Thumbnail: FC<ImageProps> = ({ path, alt }) => {
  return (
    <img src={path} alt={alt} />
  );
};

export default Thumbnail;