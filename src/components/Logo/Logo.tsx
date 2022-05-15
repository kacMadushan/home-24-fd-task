import React, { FC } from 'react';
import Home24 from '../../assets/svg/home-24-logo.svg';
import { LogoWrapper, LogoImg } from './styles';

const Logo: FC = () => {
  return (
    <LogoWrapper>
      <LogoImg src={Home24} alt="home-24" />
    </LogoWrapper>
  );
};

export default Logo;