import React,{useState} from "react";
import "./Product.css";
import { motion } from "framer-motion";

export default function Product(props) {
  const [buttonTexts, setButtonTexts] = useState([
    'Explore More!'
  ]);
  const handleClick=()=>{
    // var btnss = document.getElementsByClassName("ton");
    // Array.from(btnss).forEach((x) => {
    // if(x.style.innerHtml === "Explore More!"){
    //   x.style.innerHtml = "Show Less!";
    // }
    // else{
    //   x.style.innerHtml = "Explore More!";
    // }
    // });
    var elms = document.getElementsByClassName("desk");
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
        const newText = 'Show Less!';
        setButtonTexts(buttonTexts.map(() => newText));

      } else {
        x.style.display = "none";
        const newText = 'Explore More!';
        setButtonTexts(buttonTexts.map(() => newText));
      }
    })
    
  }



  return (
    <div className="ard">
      <img className="product--image" src={props.url} alt="product image" />
      <h2 className="hg">{props.name}</h2>
      <p className="desk">{props.description}</p>
      <p>
        <motion.button id="btn" onClick={handleClick} className="ton" whileTap={{ scale: 0.85 }}>{buttonTexts}</motion.button>
      </p>
    </div>
  );
}

