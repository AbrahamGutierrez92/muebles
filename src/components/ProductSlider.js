import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

import { Navigation, Pagination } from "swiper";
import { products } from "../data";
import { HiPlus } from "react-icons/hi";

const ProductSlider = () => {
  const { pages } = products;

  return (
    <Swiper 
    modules={[Pagination, Navigation]} 
    pagination={{ clickable: true }} 
    navigation={true} 
    className="productSlider min-h-[1300px]"
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">

              {page.productList.map((product, index) => {
                const { image, name, price, oldPrice } = product;

                return (
                  <div key={index} className=" w-full max-w-[290px] h-[380px] text-left">

                    <div className="border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[285px] flex items-center justify-center hover:bg-gray-100 mb-[15px] relative transition">
                      <img src={image.type} alt="muebles"/>

                      <div className="absolute bottom-4 right-[22px] bg-accent w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition">
                        <HiPlus className="text-xl text-white" />
                      </div>
                    </div>

                    <div className="font-semibold lg:text-xl">
                      {name}
                    </div>

                    <div className="flex items-center gap-x-3">
                      <div>$ {price}</div>
                      <div className="text-[15px] text-grey line-through">$ {oldPrice}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
