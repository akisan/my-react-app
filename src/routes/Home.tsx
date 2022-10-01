/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import Posts from '../components/Posts';
import logo from '../logo.svg';

function Home() {
  return (
    <div css={styles.app}>
      <header css={styles.appHeader}>
        <img src={logo} css={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          css={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Posts />
    </div>
  );
}

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const styles = {
  app: css({
    textAlign: 'center',
  }),
  appLogo: css({
    height: '40vmin',
    pointerEvents: 'none',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${logoSpin} infinite 20s linear`,
    },
  }),
  appHeader: css({
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  }),
  appLink: css({
    color: '#61dafb',
  }),
};

export default Home;
