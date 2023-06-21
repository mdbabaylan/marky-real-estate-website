import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import OffcanvasExample from './bootstrap-nav-bar';

export const siteTitle = 'Marky Real Estate';

export default function Layout({ children, currentPage }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Render nav bar everywhere */}
      <OffcanvasExample/>

      {/* Render contents of children here */}
      <main>{children}</main>
      {/* Inserts Home / Not home depending on which page you are */}
      {/* <header className={styles.header}>
        {home ? (
          <>
            <h2>Home</h2>
          </>
        ) : (
          <>
            <h2>Not home</h2>
          </>
        )}
      </header> */}
      {/* {!home && (
        // display these contents below if the <Layout> does not have a "home" prop </Layout>
        // <div className={styles.backToHome}>
        //   <Link href="/">← Back to home</Link>
        // </div>
        <></>
      )} */}
    </div>
  );
}