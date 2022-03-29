import "./MainCarousel.css"
import React from "react";
// import { mainCarouselItems } from "../../constats/favorite.constants";
import Slider from "react-slick";

export default  function MainCarousel () {
 
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <div className='box'><img src={require("../../assets/2img.png")}></img></div>
          </div>
          <div>
          <div className='box'><img src={require("../../assets/1img.png")}></img></div>
          </div>
          <div>
          <div className='box'><img src={require("../../assets/3img.png")}></img></div>
          </div>
        </Slider>
      </div>
    );
  }
