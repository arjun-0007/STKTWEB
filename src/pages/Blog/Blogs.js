import React from "react";
import Card from "./Card";
import "./Blog.css"
import Nav from "../Navbar/Nav"
import Footer from "../Footer/Footer"

const cards = [
  {
    id: 1,
    title: "Exploring the Latest Innovations in Skincare Technology for 2024",
    imageUrl: "https://th.bing.com/th/id/OIP.S5ezL0Eis6PM7tKk9zRkdQHaEK?rs=1&pid=ImgDetMain",
    url: "/details1",
    text:"Numerous skincare manufacturers have focused on improving the delivery of active ingredients. Advanced delivery systems, such as nanotechnology and encapsulating techniques, are employed to improve the efficacy of skincare treatments. These techniques guarantee that active chemicals penetrate deeper into the skin and stay effective over time, resulting in better results with regular application.",
  },
  {
    id: 2,
    title: "Less is More: The Art of Nude Makeup",
    imageUrl: "https://th.bing.com/th/id/OIP.vaUk1BWvA9zsZr934a2DKQHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7",
    url: "/details2",
    text:"Enhancing your Natural look with limited, understated makeup is the goal of nude makeup. It's a technique to use skin-tone neutral tones to create a sleek, invisible effect. The goal is to appear flawlessly graceful.Nude makeup is a classic option for people who like a natural look because it is elegant and versatile, suitable for both special occasions and everyday wear.  ",

  },
  {
    id: 3,
    title: "Tips for skincare based on your skin type",
    imageUrl: "https://naturals.in/wp-content/uploads/2022/08/Skin-types.jpg",
    url: "/details3",
    text:"Skincare is a necessary add-on to our life. What, how, and when is the most prior concern to us? Once we identify our skin type we are focused on to type of product we are going to use.Now in this blog, I will give some tips to care for your skin.Start your day by using Cleanser regularly use a gentle, foaming cleanser twice a day to remove excess oil without stripping your skin. ",

  },
  {
    id: 4,
    title: "Tool Talk: Understanding Brush Basics",
    imageUrl: "https://th.bing.com/th/id/R.792c2af698875b081015399b57bccea6?rik=xy6I62nU02%2fRtw&riu=http%3a%2f%2fwhatshaute.com%2fwp-content%2fuploads%2f2012%2f05%2fSigmaBrushSet.jpg&ehk=edgl22gCIIuwOKwMQZZwe2Ti8%2fvd8s5Y5HLefuwRaOM%3d&risl=&pid=ImgRaw&r=0",
    url: "/details4",
    text:"When it comes to enhancing your makeup look, selecting the best product and using the right brush are equally important. We should choose our makeup brushes with the same level of care that we do while selecting cosmetic items that meet our demands. With the correct tools, you can improve your application and guarantee a perfect, polished finish every time.",
  },
  {
    id: 5,
    title: "Understanding Your Skin",
    imageUrl: "https://th.bing.com/th/id/OIP.5JGpqB2PgEeefJb63_eoZAHaD2?rs=1&pid=ImgDetMain",
    url: "/details5",
    text:"Healthy, glowing skin starts with understanding your unique skin type. Knowing your skin type allows you to choose the right products, create an effective skincare routine, and address specific concerns. Whether your skin is oily, dry, combination, sensitive, or normal, each type of care for each one has its own set of characteristics and needs.",

  },
  {
    id: 6,
    title: "Unlock the secrets of perfect skincare.",
    imageUrl: "https://api.watsons.com.sg/api/v2/wtcsg/blog/wp-content/uploads/0704-Blog-Main-banner.jpg",
    url: "/details6",
    text:"Healthy, glowing skin starts with understanding your unique skin type. Knowing your skin type allows you to choose the right products, create an effective skincare routine, and address specific concerns. Whether your skin is oily, dry, combination, sensitive, or normal, each type of care for each one has its own set of characteristics and needs. ",

  },
];

function Blogs() {
  return (
    <>
    <Nav/>
    <div className="conainer d-flex justify-content-center align-items-center h-100">
      <br/>
      <div className="rw">
        {cards.map(({ title, imageUrl, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={imageUrl} title={title} text={text} url={url} />
          </div>
        ))}
      </div>
      <br/>
    </div>
    <Footer/>
    </>
  );
}

export default Blogs;
