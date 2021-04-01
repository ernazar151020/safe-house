import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import { swiperImg } from "./data";
SwiperCore.use([Navigation, Pagination]);

const SwiperFunc = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {swiperImg.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ImgDiv>
                <Img src={item.img} />
              </ImgDiv>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperFunc;
const Img = styled.img`
  /* outline: 10px solid #ff7a00;
  outline-offset: -10px; */
  object-fit: cover;
  max-width: 100%;
`;
const ImgDiv = styled.div`
  list-style: none;
  /* position: relative;
  :before {
    position: absolute;
    content: "";
    border: 10px solid #ff7a00;
    width: 100%;
    height: 100%;
    z-index: 20;
  } */
`;
