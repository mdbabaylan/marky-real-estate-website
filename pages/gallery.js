import Head from 'next/head';
import Image from 'next/Image';
import Layout, { siteTitle } from '../components/layout';
//import ImageCarousel from '../components/image-carousel';
import ImageGrid from '../components/image-grid';
//<Link> -- client side rendering, no browser refresh, quick
//a href = for external pages (pages not within your project)


export default function Gallery() {
  return (<Layout>
  <Head>
    <title>BRE - Gallery</title>
  </Head>
  <ImageGrid/>
  </Layout>);

    //bootstrap carousel (image gallery) then cards below (to show the individual images)
  
}