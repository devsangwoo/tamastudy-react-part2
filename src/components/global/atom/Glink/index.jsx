import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
//프롭스에서 받은 나머지 css, 클래스등을 받아줌.
const Glink = ({ linkTitle, ...rest }) => {
  const LinkMapping = {
    HOME: '/',
    CONTACT: '/contact',
    TAMA: '/tama',
  };
  return (
    <div {...rest}>
      <Link
        to={LinkMapping[linkTitle]}
        css={css`
          text-decoration: none;
          font-size: 20px;
          color: inherit;
          font-weight: 600px;
          transition: color 0.5s;
          display: block;
          text-align: center;
          width: 200px;
          &:hover {
            color: crimson;
            font-weight: 900;
          }
        `}
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Glink;
