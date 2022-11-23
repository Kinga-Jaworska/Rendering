import "../styles/globals.css";

import NavLinks from "./nav-links";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavLinks />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
