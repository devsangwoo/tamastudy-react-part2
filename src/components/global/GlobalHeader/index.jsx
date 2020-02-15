import React from 'react';
import { css } from '@emotion/core';
import Glink from '../atom/Glink';
const GlobalHeader = () => {
  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 20px;
      `}
    >
      <div
        css={css`
          width: 200px;
        `}
      >
        <img
          css={css`
            width: 100%;
            height: 100%;
            object-fit: fill;
          `}
          src="https://cdn.auth0.com/blog/react-js/react.png"
          alt="logoImage"
        />
      </div>
      <nav
        css={css`
          display: flex;
        `}
      >
        {['HOME', 'TAMA', 'CONTACT'].map(title => (
          <Glink
            key={title}
            linkTitle={title}
            css={css`
              &:not(:last-of-type) {
                margin-right: 10px;
              }
            `}
          />
        ))}
      </nav>
    </header>
  );
};
export default GlobalHeader;
