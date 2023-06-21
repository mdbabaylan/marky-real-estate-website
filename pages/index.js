import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (
    <Layout currentPage={"home"}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Home</h1>
    </Layout>
  );
}