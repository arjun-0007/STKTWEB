import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Blogs from "./pages/Blog/Blogs"
import Footer from "./pages/Footer/Footer"
import ShopProducts from"./pages/ShopProducts"
import { Route, Routes } from "react-router-dom"
import Nav from "./pages/Navbar/Nav"
import Login from "./pages/Login/Login"
import Signup from "./pages/Login/Signup"
import Details1 from "./pages/Details/Details1"
import Details2 from "./pages/Details/Details2"
import Details3 from "./pages/Details/Details3"
import Details4 from "./pages/Details/Details4"
import Details5 from "./pages/Details/Details5"
import Details6 from "./pages/Details/Details6"





function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/home" element={<Home/>}/> 
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<Blogs />} /> 
          {/* <Route path="/ShopProducts" element={<ShopProducts />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details1" element={<Details1 />} />
          <Route path="/details2" element={<Details2 />} />
          <Route path="/details3" element={<Details3 />} />
          <Route path="/details4" element={<Details4 />} />
          <Route path="/details5" element={<Details5 />} />
          <Route path="/details6" element={<Details6 />} />
        </Routes>
        
      </div>
    </>
  )
}

export default App

