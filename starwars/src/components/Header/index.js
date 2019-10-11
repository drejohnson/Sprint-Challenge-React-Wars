import React from 'react';

import styled from 'styled-components/macro';

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items; center;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding: 0 1rem;
  z-index: 5;
`;

const H1 = styled.h1`
  display: flex;
  align-items: center;

  span {
    color: white;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <H1>
        <span>React Wars</span>
      </H1>
    </HeaderWrapper>
  );
}
