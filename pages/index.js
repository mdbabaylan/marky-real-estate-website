import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import BookNowButton from '../components/book-now-modal';
import {HomeFilled} from '@ant-design/icons';

const mainPageStyle = {
  position: "relative",
  minWidth: "100%",
  height: "100vh",
  marginTop: "-50px",
}

//create a reactHook modal
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

export default function Home() {
  return (
    <Layout currentPage={"home"}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* object-fit cover salsa */}
      <div style={mainPageStyle}>
        <Image 
          src="/placeholder_room.jpg"
          alt="Marky Real Estate Room Preview"
          fill={true}
          quality={100}
          style={{objectFit: "cover"}}
        />
        {/* or dim the brightness / contrast of the image to make the white text visible then remove the opacity */}
        <p style={
          {
           fontFamily: "Prata", 
           color:"white",
           backgroundColor: "rgba(70, 70, 70, 0)", 
           position:"absolute", 
           left:"3%", top:"42%",
           fontSize: "1.8rem"
          }
          }>Affordable Comfort</p>
         {/* <Button variant="primary" style={{fontWeight:"bold", position:"absolute", left:"3%", top:"50%"}} onClick={handleShow}>Book Now</Button>{' '} */}
         {/* <Button variant="primary" style={{fontWeight:"bold", position:"absolute", left:"3%", top:"50%"}}>Book Now</Button>{' '} */}
         <BookNowButton layoutName={"index"}/>
      </div>
      <h6 style={{backgroundColor: "#fcfcfc", padding: "8px"}}><HomeFilled style={{padding:"5px", marginBottom: "2px"}}/>San Francisco Street, Barugo, Leyte</h6>
      <div style={{paddingBottom: "45%", position: "relative"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.50694987166472!2d124.73614599593404!3d11.326582348201534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33080fc0d0edc32d%3A0x2d4f5e0dd54ae5ab!2sBarly%20Real%20Estate!5e0!3m2!1sen!2sph!4v1687614284745!5m2!1sen!2sph"
          style={{
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
            position: "absolute"
          }}>  
        </iframe>
      </div>

    </Layout>
  );
}