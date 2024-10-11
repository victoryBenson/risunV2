import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="This is a global description for the site." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
