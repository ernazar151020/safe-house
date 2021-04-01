import React from "react";
import { Carousel } from "react-bootstrap";
import { swiperImg } from "../home/data";
import Img1 from "../../assets/img/home-1.png";
import Img2 from "../../assets/img/home-2.png";
import Img3 from "../../assets/img/home-3.png";
const Slider = () => {
  return (
    <Carousel>
      {swiperImg.map((item) => {
        return (
          <Carousel.Item>
            <img src={item.img} alt="" className="d-block w-100" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
