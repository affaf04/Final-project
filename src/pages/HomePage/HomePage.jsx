import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import PopularItems from "../../components/Popular/PopularItems";



function HomePage () {  
 
        return(
      <div title="Inside Out ">
         <h3 className='slogan'></h3>
           <div className="container">
           <div className="slider-wrapper">
          <div className="slider">
            <img
              id="silder-1"
              src="https://risebyrare.com/cdn/shop/files/Slider__1.png"
              alt="img"
            />
            <img
              id="silder-2"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL2hpcHBvdW5pY29ybl9jb3NtZXRpY19tYWtlX3VwX2ZsYXRfbGF5X3BpbmtfYmFja2dyb3VuZF9iODQxY2U1MC1mNDRhLTQ4ODAtODEwMC1hMDc5Yjc4MjA3NDUuanBn.jpg"
              alt="img"
            />
            <img
              id="silder-3"
              src="https://cdn.shopify.com/s/files/1/0410/9608/5665/t/3/assets/pf-715119ea--blog-creative-1.jpg"
              alt="img"
            />
            <div className="text">
               <h3>Welcome to our Inside Out store!</h3>
               <p className='indent'>At our store, we offer a wide range of high-quality beauty products.</p>
              <Link to="./orders" className="li">
                <button className="button">Start Now</button>
              </Link>
            </div>
            </div> 
            </div></div>
            <div className="slider-nav">
            <a href="#silder-1"></a>
            <a href="#silder-2"></a>
            <a href="#silder-3"></a>
          </div>
          <div className='container'>
            <div>
              <h3> Best Sellers</h3>
              <p> Our most popular products</p>
              <PopularItems />
            </div>
          <p className='indent'>
                  Thank you for choosing our store. We hope you enjoy your shopping experience with us.</p>
          </div>

          </div>
        )
    }

    export default HomePage;