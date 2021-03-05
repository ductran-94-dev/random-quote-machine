import React from 'react';

import Anchor from './Anchor';
import Subtitle from './Subtitle';
import Title from './Title';
import Wrapper from './Wrapper';

function Header() {
  return (
    <Wrapper>
      <Title>Random Quote Machine</Title>
      <Subtitle>
        Welcome! Enjoy these cool random quotes below - using the{' '}
        <Anchor>Forismatic API.</Anchor>
      </Subtitle>
    </Wrapper>
  );
}

export default Header;
