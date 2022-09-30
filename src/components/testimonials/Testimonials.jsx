import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.png'
import AVATAR2 from '../../assets/avatar2.png'
import AVATAR3 from '../../assets/avatar3.png'
import AVATAR4 from '../../assets/avatar4.png'
import AVATAR5 from '../../assets/avatar5.png'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: 'Marcio Reis',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo ipsum quos, recusandae quibusdam praesentium quod distinctio, sint velit, sequi tempore id laboriosam incidunt earum quo officiis porro odit minima.'
  },
  {
    avatar: AVATAR2,
    name: 'Marta Santos',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo ipsum quos, recusandae quibusdam praesentium quod distinctio, sint velit, sequi tempore id laboriosam incidunt earum quo officiis porro odit minima.'
  },
  {
    avatar: AVATAR3,
    name: 'Jhon Ken',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo ipsum quos, recusandae quibusdam praesentium quod distinctio, sint velit, sequi tempore id laboriosam incidunt earum quo officiis porro odit minima.'
  },
  {
    avatar: AVATAR4,
    name: 'Lisa Maria',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo ipsum quos, recusandae quibusdam praesentium quod distinctio, sint velit, sequi tempore id laboriosam incidunt earum quo officiis porro odit minima.'
  },
  {
    avatar: AVATAR5,
    name: 'Joice Silva',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo ipsum quos, recusandae quibusdam praesentium quod distinctio, sint velit, sequi tempore id laboriosam incidunt earum quo officiis porro odit minima.'
  }
]

const Testimonials = () => {
  return (
    
    <section id='testimonials'>
      <h5>Clientes e amigos</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Cliente imagem" />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>

  )
}

export default Testimonials