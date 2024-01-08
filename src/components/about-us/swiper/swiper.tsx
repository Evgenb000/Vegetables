import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import comments from '../../../assets/about-comments.json';
import iconUser from '../../../assets/images/icon-user.png';

import 'swiper/css/bundle';
import './swiper.scss';
import React from 'react';

const AboutSwiper: React.FC = () => {
  const setStars = (rating: number) => {
    const startsArrayJSX = [];

    for (let i = 0; i < 5; i++) {
      if (rating > i) {
        startsArrayJSX.push(<div className='swiper__rating--active' />);
      } else {
        startsArrayJSX.push(<div className='swiper__rating--disabled' />);
      }
    }

    return startsArrayJSX;
  }

  return (
    <Swiper
      className="swiper"
      modules={[EffectCoverflow, Pagination, Autoplay]}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      pagination={true}
      slidesPerView={'auto'}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 15,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {comments.map(({id, firstName, lastName, rating, comment}) => {
        return (
          <SwiperSlide key={id} className='swiper__slide'>
            <div className="swiper__user">
              <img className='swiper__image' src={iconUser} alt='User icon' />
                {firstName}
                <br />
                {lastName}
            </div>

            <div className="swiper__rating">
              {setStars(rating)}
            </div>
            <div className="swiper__comment">
              {comment}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default AboutSwiper;
