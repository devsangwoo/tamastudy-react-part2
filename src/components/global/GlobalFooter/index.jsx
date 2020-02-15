import React from 'react';
import { css } from '@emotion/core';
const GlobalFooter = () => {
  return (
    <div>
      <div
        css={css`
          background-color: red;
        `}
      >
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

export default GlobalFooter;
