import Head from 'next/head';
import Image from 'next/Image';
import Layout, { siteTitle } from '../components/layout';
//<Link> -- client side rendering, no browser refresh, quick
//a href = for external pages (pages not within your project)


export default function Gallery() {
  return (<Layout>
  <Head>
    <title>Gallery - {siteTitle}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <h1>Gallery</h1>
  <Image 
    src="/profile.jpg" //whoa directly from public folder, the optimization is nuts
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Home Page Image" 
    loading="lazy" />
    </Layout>);
  
}