import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookNowButton from '../components/book-now-modal';
import Image from 'react-bootstrap/Image';
//<Link> -- client side rendering, no browser refresh, quick
//a href = for external pages (pages not within your project)


export default function About() {
  return (<Layout>
  <Head>
    <title>About - {siteTitle}</title>
  </Head>
  <Container fluid={true} style={{backgroundImage: "url(/about-adjusted.png", backgroundSize: "cover"}}>
      <Row>
        <Image style={{marginBottom: "30px", maxHeight: "600px"}} src="/about-adjusted.png" fluid/>
        <Col sm={12} md ={12}><h4 style={{fontFamily: "Prata"}}>About:</h4></Col>
        <Col sm={12} md ={6}>
          <p style={{fontFamily: "DMSans"}}>Affordable rooms right in the heart of Barugo, Leyte</p>
          <ul style={{fontFamily: "DMSans", padding: "1em", listStyleType: "disc"}}>
            <li>Transient rooms</li>
            <li>Mid to long term rentals</li>
         </ul>
        </Col>
        <Col sm={12} md ={6}>
          <p style={{fontFamily: "DMSans"}}>The units are also located near the following facilities:</p>
          <ul style={{fontFamily: "DMSans", padding: "1em",  listStyleType: "disc"}}>
            <li>Barly Pharmacy</li>
            <li>Barugo Municipal Hall</li>
            <li>Barugo Marketplace</li>
            <li>PNP</li>
            <li>Fire Station</li>
            <li>Andok's</li>
            <li>7/11</li>
         </ul>
        </Col>
      </Row>
      <Col sm={12} style={{marginBottom: "20px"}}><BookNowButton layoutName={"about"}/></Col>

    </Container>
    </Layout>);

    //short paragraph about Barly Real Estate, when it was made, how it contributes ()
  
}