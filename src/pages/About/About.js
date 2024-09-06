import "./About.css";
import {ReactTyped} from "react-typed";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from 'react-player';
import VideoCarousel from "../VideoCarousel/VideoCarousel";
import Nav from "../Navbar/Nav"
import Footer from "../Footer/Footer"

export default function About() {
 return (
 <>
 <Nav/>
 <div className="about" >
      <h1 className="h1c">About Us</h1>
      <p className="ft">Find Top-Rated{" "}
      <ReactTyped strings={["Salons and Exclusive Deals with VYLEE"]} typeSpeed={50} loop backSpeed={30}/></p>
      <br/>
      <div>
      <p className="nt">At STKT Beauty and Technology, we’re passionate about revolutionizing the salon industry with our innovative platform, VYLEE. VYLEE connects salon owners with customers, making it easier for everyone to access and enjoy highly qualified salon services. VYLEE serves as a seamless bridge between exceptional salon services and customers seeking an empowering and luxurious beauty experience.
      For clients, VYLEE offers an opportunity to showcase their exquisite services to a broader audience, attracting customers who appreciate and seek the highest standards of beauty care. Our platform provides a seamless interface for salons to manage appointments, promote special offers, and engage with a clientele that values luxury and refinement.
      For customers, VYLEE is the ultimate destination to explore a curated selection of luxury salons renowned for their vibrant, youthful, luminous, elegant, and exotic beauty services.</p><br/>
      </div>
      <br/>
      <div className="conte">
        <div className="centinal"> 
        <h2 className="heading">Our Vision</h2>
        <p className="daata">To be the leading digital platform that transforms
            the salon industry by empowering salon owners
                and providing customers with exceptional beauty
            experiences.</p>
        </div>

        <div className="centinal">
        <h2 className="heading">Our Mission</h2>
        <p className="daata">To revolutionize the salon industry by seamlessly
            connecting salon owners with discerning
            customers through innovative, convenient, and
            high-quality digital solutions, ensuring access to
            top-notch salon services for everyone.</p>

        </div>

      </div>
    
      <br />
      <br />

      {/*video section here */}
      <div>
      <h3 className="ws">Browse through some of our videos</h3>
      <br />
      <VideoCarousel/>
      <br/><br/>
      </div>
    </div>
    <Footer/>
 </>
 )
}
