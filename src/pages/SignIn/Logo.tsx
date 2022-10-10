/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import logo from '../../assets/logo.svg';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Logo = () => {
  return (
    <img
      src={logo}
      css={{
        height: '40vmin',
        pointerEvents: 'none',
        '@media (prefers-reduced-motion: no-preference)': {
          animation: `${spin} infinite 20s linear`,
        },
      }}
      alt="logo"
    />
  );
};

export default Logo;
