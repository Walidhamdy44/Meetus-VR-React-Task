import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductImage = () => {
  return (
    <div className="image">
      <img src="/images/img1.webp" alt="adidas shirt" />
      <div>
        <Swiper
          className="swiper"
          spaceBetween={50}
          slidesPerView={4}
          style={{ maxWidth: "550px" }}
        >
          <div class="swiper-button-prev"></div>
          <SwiperSlide>
            <img src="/images/Group 333.png" alt="adidas shirt" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Group 331.png" alt="adidas shirt" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Group 329.png" alt="adidas shirt" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Group 335.png" alt="adidas shirt" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Group 333.png" alt="adidas shirt" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImage;
