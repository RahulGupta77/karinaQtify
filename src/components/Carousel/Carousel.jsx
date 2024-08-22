import 'swiper/css';
import 'swiper/css/navigation';
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={7}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          {renderCardComponent(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
