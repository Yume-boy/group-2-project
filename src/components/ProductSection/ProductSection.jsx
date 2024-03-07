import './ProductSection.css'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Mousewheel, FreeMode, Scrollbar } from 'swiper/modules';
import { useWindowSize } from "@uidotdev/usehooks";
import { IoFlashSharp } from "react-icons/io5";



const ProductSection = (props) => {

      const [count, setCount] = useState(36000)


      useEffect(()=>{
          setTimeout(() => {
              count === 0 ? setCount(count) : setCount( count - 1)
          }, 1000)

          
      })  
      

      let seconds = count % 60
      let minutes =  Math.floor((count / 60) % 60)
      let hours = Math.floor(count / 3600)
      seconds = seconds < 10 ? '0' + seconds : seconds
      

  

  const [cardData, setCardData] = useState(props.data)
    const size = useWindowSize()
  const render2 = cardData.map((card,idx) => {
      return (
          <SwiperSlide key={idx} className='content'>
               
          <div className='content tol'>
              <div><img src={card.imageUrl} /></div>
              <div className='products'>
              <div style={{width:'100%'}}><p className='p1'>{card.name}</p></div>
              <p className='p2'>{card.newPrice} <br /><span className='p3'>{card.oldPrice}</span></p>
              <p className='p5'>{card.itemsleft}</p>
              </div>
              <div class={`progress ${props.display} my-2`} role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div class={`progress-bar ${card.progressLength > 0 && card.progressLength < 20  ? 'bg-danger' : card.progressLength >= 20 && card.progressLength <= 40 ? 'bg-warning' : 'bg-info'}`} style={{width: `${card.progressLength}%`}}></div>
              </div>
              </div>    
          </SwiperSlide>
      )
  })
  return (
    <div className="my-3">
      <div className="">
      
        <div className=" cover">
            <div className='card-text-1 d-flex justify-content-between px-2' style={{backgroundColor: `${props.bgcolor}`,  Color: `${props.color}`}}>
                <div className='d-flex align-items-center'><div className={`flash ${props.flash}`}><IoFlashSharp /></div><h4 className={`${props.color} flash-text`}>{props.left}</h4></div>
                <h3 className={`${props.time}`}> Time Left: {hours}h : {minutes}m : {seconds}s</h3>
                <h4 className={`${props.color} see-all`}>{props.Right}</h4>
            </div>
          <Swiper
        slidesPerView={size.width < 1034 ? 3 : 6}
        spaceBetween={10}
        mousewheel={{
          enabled: true,
          forceToAxis: true
        }}
        freeMode={true}
        scrollbar={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay, Mousewheel, FreeMode, Scrollbar]}
        className="mySwiper"
        
      >
        {render2}
      </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ProductSection