import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Review() {
  return (
    <div className="h-full">
      <Swiper
        style={{
          '--swiper-navigation-color': '#d4af37',
          '--swiper-pagination-color': '#d4af37',
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-80 h-128 bg-bn-navy"
      >
        <SwiperSlide className="text-center text-xl bg-bn-navy flex justify-center items-center flex-col ">
          <h1 className='text-2xl text-bn-gold font-montserrat'>Review #1 Event Type</h1>
          <p className=' text-base w-3/4 text-white font-raleway'>"Review #1 Text"</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center text-xl bg-bn-navy flex justify-center items-center flex-col">
          <h1 className="text-2xl text-bn-gold font-montserrat">Review #2 Event Type</h1>
          <p className="text-base w-3/4 text-white font-raleway">"Review #2 Text"</p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-xl bg-bn-navy flex justify-center items-center flex-col">
          <h1 className="text-2xl w-1/3 text-bn-gold font-montserrat whitespace-nowrap">Review #3 Event Type</h1>
          <p className="text-base w-3/4 text-white font-raleway ">"Review #3 Text"</p>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Review;