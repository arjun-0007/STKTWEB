import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "./Product";
import { productData, responsive } from "./Data";
import React from "react";
import "./Services.css";
import Nav from "../Navbar/Nav"
import Footer from "../Footer/Footer"
import Card from "./Card"




export default function Services() {
  // const product = productData.map((item) => (
  //   <Product
  //     name={item.name}
  //     url={item.imageurl}
  //     price={item.price}
  //     description={item.description}
  //   />
  // ));

  return (
    <>
    <Nav/>
    <div className="App" >
      <h1 style={{fontSize:"2.5rem", color:"#791dae"}}>Our Services</h1>
      <div className="coub">
      {/* <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel> */}
      <Card
        image="https://th.bing.com/th/id/OIP.D7if1CNTwcaIqBnH9UDjEQHaEq?rs=1&pid=ImgDetMain"
        title="Client Acquisition"
        description="VYLEE luxury salons involves strategic marketing and personalized outreach to attract high-end salon partners. Building relationships with influencers and beauty industry leaders, and attending exclusive events, helps gain referrals and recommendations. Offering incentives such as promotional support, exclusive features, and access to a high-spending clientele is crucial.  We also ensure a smooth and efficient onboarding process with dedicated support makes the transition effortless for the salon. "
      />
      <Card
        image="https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Client Engagement"
        description="VYLEE onboards salons involve a multi-faceted strategy to attract and retain high-quality partners and customers. This includes targeted advertising through social media, search engine marketing, and luxury publications; creating valuable content like blog posts and videos; and building industry partnerships and networks. Offering special promotions and exclusive features incentivizes salon participation, while regular communication through newsletters and webinars ensures ongoing engagement. Continuous feedback collection helps improve the platform's services, keeping it aligned with the evolving needs of luxury salons and maintaining its appeal. "
      />
      <Card
        image="https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Event Management"
        description="VYLEE specializes in onboarding luxury salons, focuses on those that offer event management services such as kitty parties, events, works shops, campaign management, etc... We streamline the onboarding process by providing tailored support and showcasing the unique benefits of joining our platform. By highlighting salon’s event management expertise and its potential for attracting high-end clientele, we ensure a seamless integration that enhances visibility and maximizes opportunities for exclusive events. Our goal is to help partners effortlessly connect with clients seeking sophisticated and high-quality event experiences."
      />
      <Card
        image="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Market Research"
        description="VYLEE analyzes industry trends, consumer preferences, and competitive landscapes to make informed business decisions. This includes studying customer demographics, identifying emerging beauty trends, also evaluate the services available in the market. With effective market research we help our partnersto understand target audience, refine their service offerings, and tailor their marketing strategies. By gathering insights into customer needs and market conditions, salons can enhance their services, improve customer satisfaction, and stay ahead in the competitive beauty industry."
       />
      <Card
        image="https://images.pexels.com/photos/4173362/pexels-photo-4173362.jpeg"
        title="Customer Management"
        description="VYLEE focuses on building and maintaining strong relationships with clients to ensure satisfaction and loyalty. This involves personalized service, understanding individual client needs, and providing exceptional experiences. Effective customer management includes maintaining detailed records of customers preferences, managing appointments efficiently, and addressing feedback promptly. Implementing loyalty programs, sending reminders for appointments, and engaging customers through regular communication help in nurturing long-term relationships and encouraging repeat business. By prioritizing customers’ needs and delivering high-quality service, salons can foster a loyal customer base and enhance overall business success."
      />
      <Card
        image="https://codegeekz.com/wp-content/uploads/promotion-design.jpg"
        title="Cross-Promotion"
        description="VYLEE involves in collaborating with complementary businesses to reach new audiences and enhance customer value. This strategy includes partnering with beauty &cosmetic, lifestyle boutiques to offer joint promotions, referral programs, or bundled services. By leveraging each other's customer bases and creating mutually beneficial offers, salons can attract new customers and provide added value to existing ones. Cross-marketing helps increase brand visibility, drive traffic, and build a network of partnerships that enhance the overall customer experience and expand market reach."
      />
      <Card
        image="https://wallpaperbat.com/img/554920-digital-advertising-advertising-1920x1080-download-hd-wallpaper-wallpapertip.jpg"
        title="Advertisement"
        description="VYLEE offers businesses an excellent opportunity to promote their products and services to a targeted, luxury-focused audience of VYLEE. Through strategic advertisement placements on our website and mobile app, sponsored content, and exclusive promotions, businesses can reach potential customers who are engaged with high-end beauty and wellness services. Additionally, co-branding initiatives, email and social media campaigns, and event sponsorships provide diverse ways to enhance brand visibility. By leveraging our platform's reach and audience, businesses can effectively showcase their offerings and drive engagement with a premium clients and customers."
      />
      <Card
        image="https://th.bing.com/th/id/OIP.t8-2iWzqRS1TAgSbZF5k0gHaDt?rs=1&pid=ImgDetMain"
        title="Promoting Freelancers"
        description="Promoting freelancers on VYLEE involves targeted marketing initiatives like showcasing their profiles on our website and social media. By highlighting their specializations and capabilities, we enhance their visibility and attract potential customers. This approach effectively connects freelancers with opportunities, driving engagement and growth. We empower individuals to reach their potential goal by onboarding on our platform as freelancer."
      />
      
      </div><br/>
      
      <div  className="AI">
      
      <h1 className="h12">Additional Information</h1>
      
        
        <p className="xt">Effortless onboarding lets you showcase your salon's strengths quickly.
            Dedicated support ensures you get the most out of VYLEE.
            VYLEE equips salons for success in the digital age, bringing new clients, streamlining operations, and enhancing client engagement.
        </p>
      <br/>
      </div>
      <br/><br/><br/>
      </div>
      
      <Footer/>
    
    </>
  );
  
    
  }