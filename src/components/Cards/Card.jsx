import React from 'react'
import '../Cards/card.css'
import { useState } from 'react'

const Card = (props) => {
    const [cardData, setCardData] = useState(props.data)
    
    const render2 = cardData.map((love,idx) => {
        return (
            <div key={idx} className='col-lg-2 col-4 '>
                 
            <div className='tol '>
                <div id=''><img src={love.imagesrc} /></div>
            <p>{love.ProductName}</p>
                
                
                </div>    
            </div>
        )
    })

  return (
    <div>
        <div className=' apply my-3  text-center'>
            <div className='card-text'>
                <h4>{props.title}</h4>
            </div>
            <div className=' items my-3 '>
                <div className='row  mx-1 gx-1'> 
                    {render2}
                </div>
            </div>
        </div>

    </div>
  )
}
export default Card
