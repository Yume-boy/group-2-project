import React from 'react'
import './Contact.css'
import { LuMessagesSquare } from "react-icons/lu";
import contactData from '../../apiData/contactCardData';
import { useState } from 'react';

const Contact = () => {
  const [contactData1, setContactData1] = useState(contactData)

  const render = contactData1.map((data, idx) => {
      return (
        <div key={idx} className='col-6 col-md-3'>
          <div >
              <img src={data.imagesrc} alt="" />
              <p>{data.productName}</p>
          </div>
        </div>
      )
  })

  return (
    <div className='mt-4 container-lg'>
      <div className='needHelp'>
      <h2>NEED HELP?</h2>
      </div>
      <div className='d-none d-lg-block mx-2'>
        <div className='row bg-white mt-2'>
          <div className='col-6 text-center about'>
            <div className='center'>
              <div className='w-75'>
              <div className='mt-5 pt-5'>
                <p>If you have inquiries or need assistance, do not hesitate to chat with us. We are available Monday to Sunday (8am to 7pm)</p>
              </div>
              <div className='d-flex justify-content-center '>
                <div className='d-flex chat'>
                <div className='message'><LuMessagesSquare /></div>
                <div className='pleasee ps-3'>CHAT WITH US</div>
                </div>
              </div>
              <div className='mt-3 pb-5 mb-4'>
                <p>You can also reach us on <strong>02018881106</strong> from Monday to Saturday (8am to 7pm)</p>
              </div>
              </div>
            </div>
          </div>
          <div className='col-6 d-flex py-2'>
            <img src="https://ng.jumia.is/cms/8-18/contact-us/customer-service-woman.png" alt="" />
          </div>
        </div>
      </div>


      <div className='d-lg-none'>
        <div className='row bg-white mt-2'>
        <div className='col-12 d-flex justify-content-center align-items-center py-2'>
              <img src="https://ng.jumia.is/cms/8-18/contact-us/customer-service-woman.png" alt="" />
            </div>
            <div className='col-12 text-center about'>
              <div className='center'>
                <div className='w-75'>
                <div className=' pt-4'>
                  <p>If you have inquiries or need assistance, do not hesitate to chat with us. We are available Monday to Sunday (8am to 7pm)</p>
                </div>
                <div className='d-flex justify-content-center '>
                  <div className='d-flex chat'>
                  <div className='message'><LuMessagesSquare /></div>
                  <div className='pleasee ps-3'>CHAT WITH US</div>
                  </div>
                </div>
                <div className='mt-3 pb-5 mb-4'>
                  <p>You can also reach us on <strong>02018881106</strong> from Monday to Saturday (8am to 7pm)</p>
                </div>
                </div>
              </div>
            </div>
            
          </div>
      </div>

      <div className='bg-white mt-4 offers'>
        <p className='text-center pt-1'>other offers & best deal</p>
      <div className={`row  mt-1  px-2`}>
            <div className='col-6 py-1'>
              <img src="https://ng.jumia.is/cms/0-1-category-pages/0-cat-dev/2024/Feb/572X250_copy_7.png" alt="" />
            </div>
            <div className='col-6 py-1 '>
              <img src="https://ng.jumia.is/cms/0-1-category-pages/0-cat-dev/2024/Feb/572X250_copy_17.png" alt="" />
            </div>
          </div>
      </div>


      <div className='row my-4 text-center'>
        {render}
      </div>
    </div>
  )
}

export default Contact