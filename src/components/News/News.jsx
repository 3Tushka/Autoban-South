import React from 'react'
import { Pagination, A11y, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import test from '../../assets/images/test.jpg';
import test1 from '../../assets/images/test1.jpg';
import test2 from '../../assets/images/test2.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

import './news.scss'

export const News = () => {
    return (
        <>
            <div className="news">
                <div className="news-wrapper">
                    <div className="news-press-head">
                        Новини
                    </div>
                    <Swiper
                        modules={[Pagination, A11y, Mousewheel]}
                        spaceBetween={50}
                        slidesPerView={3}
                        mousewheel
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className="news-slide">
                                <a href="">
                                    <div className="news-slide-photo">
                                        <img src={test} alt="test" />
                                    </div>
                                    <div className="news-slide-content">
                                        <span>
                                            На Дніпропетровщині триває масштабна кампанія з експлуатаційного відновлення автошляхів!
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
