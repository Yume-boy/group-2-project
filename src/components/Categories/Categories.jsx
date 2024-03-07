import React from 'react'
import './Categories.css'
import { useState } from 'react'
import firstCardData from '../../apiData/firstCardData'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel'

// import required modules
import { Autoplay, Pagination, Mousewheel, FreeMode, Scrollbar, } from 'swiper/modules';



const Categories = () => {
  const [cardData, setCardData] = useState(firstCardData)
  const render2 = cardData.map((newer,oh) => {
      return (
        <div key={oh} className=''>
            <SwiperSlide className='catego'> 
              <div className='no'>
                  <div id='yes'><img src={newer.imagesrc} /></div>
                   <p>{newer.productName}</p> 
              </div>    
             </SwiperSlide>
        </div>
      )
  })


  return (
    <div className="">
      <div className='appliances my-3  text-center'>
      
            <Swiper
        slidesPerView={1}
        spaceBetween={5}
        mousewheel={{
          enabled: true,
          forceToAxis: true
        }}
        
        freeMode={true} 
        // scrollbar={true}
         breakpoints={{
          '@0.00': {
            slidesPerView: 5,
            spaceBetween: 6,
          },
          '@0.75': {
            slidesPerView: 5,
            spaceBetween: 6,
          },
          '@1.00': {
            slidesPerView: 8,
            spaceBetween: 6,
          },
          '@1.50': {
            slidesPerView: 8,
            spaceBetween: 6,
          },
        }}
        
        modules={[Pagination, Autoplay, Mousewheel, FreeMode, Scrollbar, ]}
        className="mySwiper"
      >
        {render2}
      </Swiper>
        </div>
    </div>
  )
}

export default Categories