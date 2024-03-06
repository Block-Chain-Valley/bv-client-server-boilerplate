import type { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";

// Global styles for tailwindcss
// import "../../public/shared/styles/globals.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to client-demo!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default CustomApp;
