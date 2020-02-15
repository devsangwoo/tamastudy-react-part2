import React from 'react';
import { css } from '@emotion/core';

const Home = () => {
  return (
    <div>
      <div css={[headerWrapper, headerFont]}>
        <header>Logo</header>
        <nav>
          <div>Home</div>
          <div>Tama</div>
          <div>Contact</div>
        </nav>
      </div>
    </div>
  );
};

export default Home;

const headerWrapper = css`
  background-color: red;
`;
const headerFont = css`
  font-size: 30px;
`;
