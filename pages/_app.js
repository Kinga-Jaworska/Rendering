import { useRouter } from "next/router";
import "../styles/globals.css";
import { ImageContent } from "./image-component";

import NavLinks from "./nav-links";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <NavLinks />
      <ImageContent title={router.pathname.replace("/", "").toUpperCase()} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
