import React from 'react'
import phones from '../../apiData/Fashion'
import './ProductDetails.css'
import ProductSection from '../ProductSection/ProductSection'
import imageFour from '../../apiData/imageFour'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useState,useEffect } from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { IoShieldHalfSharp } from "react-icons/io5";
import { FaHandsHolding } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoPackageDependencies } from "react-icons/go";
import { RiShieldStarFill } from "react-icons/ri";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const ProductDetails = () => {
  const [display, setDisplay] = useState('d-none')
  const { addItem,  } = useCart()
    let { id } = useParams();
    const product = phones.find(phones => String(phones.id) === id);

  

    const addedItems = ()=>{
      addItem(product)

      setTimeout(()=> {
        setDisplay('d-block')
      }, 2000)

      setTimeout(()=> {
        setDisplay('d-none')
      }, 4000)
    }

  return (
    <div className='container-lg'>
      <div className={`fixed-top text-center py-2 addProduct ${display}`}><p>Product added successfully</p></div>
      <div className='d-lg-block d-none'>
      <div className='pt-4 nav-text'>
        <p>
          <a href="/" className='me-2 text-reset text-decoration-none'>Home {'> '} </a>
          <a href="/category" className='me-2 text-reset text-decoration-none'>Fashion {'>'}</a>
         <a href={`/productDetail/${product.id}`} className='me-2  text-decoration-none baby'>{product.name}</a>
        </p>
      </div>
      <div>
        <div className='row px-2'>
          <section key={id} className="details-section bg-white mt-2 col-9" id='detail'>
                  <div className='row mt-3'>
                  <div className='col-4'>
                    <img src={product.imageUrl} alt="" className=''/>
                    <p className='mx-2'>SHARE THIS PRODUCT</p>
                    <div className=' d-flex mx-2'>
                      <div className='mx-1 border rounded-circle border-1 social-1 border-dark d-flex justify-content-center align-items-center'><TiSocialFacebook /></div>
                      <div className='mx-1 border rounded-circle border-1 social-1 border-dark d-flex justify-content-center align-items-center'><FaTwitter /></div>
                    </div>
                  </div>
                  
                  <div className='col-8'>
                      <h3>{product.name}</h3>
                      <h4>brand: </h4>
                      <div className='straight'></div>
                      <div className='d-flex align-items-end'>
                      <p className='me-1 pFirst'>{product.new}</p>
                      <p className='pSecond'>{product.old}</p>
                      </div>
                      <p className='pThird'>{Math.floor(Math.random() * 20)} units left</p>
                      <p className='pFourth'>+ shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)</p>
                     <div className='d-flex align-items-center'>
                     <div className='star-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                     <div className='random mt-1 ms-1'>({Math.floor(Math.random() * 300)} verified ratings)</div>
                     </div>
                     <div className='straight my-2'></div>
                     <p>VARIATION AVAILABLE</p>
                     <div className='variation py-1'>
                        black
                     </div>

                     <div className='my-2 py-2 toCart d-flex justify-content-between align-items-center px-2 mx-1' onClick={(addedItems)}>
                      <div className='cartImg'><MdAddShoppingCart /></div>
                      <p>ADD TO CART</p>
                      <div></div>
                      </div>
                      <div className='straight my-3'></div>
                      <p>YOU CAN ALSO BUY:</p>
                      <div className='border border-1 buy p-2'>
                        <div className='d-flex align-items-center'>
                        <img src="https://ng.jumia.is/b/axa-mansard_33f400a1459ca3a7d40d4e3399dee77a.jpg" alt="" />
                        <div>
                          <p className='ms-2'>Jumia Protect - Device Insurance <br /><strong>+ ₦ 2,376</strong></p>
                        </div>
                        </div>
                        <div className='straight my-3'></div>
                        <div className='d-flex justify-content-between'>
                          <div>Total Price: <br /><strong>₦ {product.price + 2376}</strong></div>
                          <div className='both text-white d-flex align-items-center justify-content-center px-3 my-2'>BUY BOTH</div>
                        </div>
                      </div>
                      <div className='straight my-4'></div>

                      <div>
                        <div>PROMOTIONS</div>
                        <div className='d-flex '>
                          <div className='color-1'><MdStars /></div>
                          <p className='ms-2 random mt-1'>Call 0700600000 To Order</p>
                        </div>
                         <div className='d-flex'>
                            <div className='color-2'><IoShieldHalfSharp /></div>
                            <p className='ms-2 random mt-1'>Need extra money? Loan up to N500,000 on the JumiaPay Android app.</p>
                        </div>
                        <div className='d-flex '>
                          <div className='color-1'><MdStars /></div>
                          <p className='ms-2 random mt-1'>Enjoy cheaper shipping fees when you select a PickUp Station at checkout.</p>
                        </div>
                      </div>
                  </div>


                  </div>
                  <p className='random down ms-2'>report incorrect product information</p>
          </section>

          <section className='col-3 '>
            <div className='bg-white px-2 mt-2 detail-section-2 pt-2'>
              <div className='dt-sub-1'>
                <p>DELIVERY RETURNS</p>
              </div>
              <div className='straight my-2'></div>
              <div className='express-another'>
                <img src="https://vendorhub.jumia.co.ke/wp-content/uploads/2017/08/Jumia-Express-logo-e1556633520715.png" alt="" />
                <p>Free delivery on thousands of products in Lagos, Ibadan & Abuja Details</p>
              </div>
              <div className='straight my-2'></div>
              <select class="form-select my-3" aria-label="Default select example">
                <option selected>Lagos</option>
                <option value="1">Ibadan</option>
                <option value="2">Ogun</option>
                <option value="3">Ondo</option>
              </select>
              <select class="form-select my-2" aria-label="Default select example">
                <option selected>Lekki-Ajah</option>
                <option value="1">Ikeja</option>
                <option value="2">VI</option>
                <option value="3">Mile-2</option>
              </select>
              <div>
                <div className='d-flex '>
                  <div className='p-2 border me-2 ordering'><FaHandsHolding /></div>
                    <div>
                      <div className='d-flex justify-content-between w-100'>
                        <p className='subb-1'>Pickup Station</p>
                        <p className='subb-2'>Details</p>
                      </div>
                      <p className='subb-3'>Delivery Fees ₦ 250</p>
                      <p className='subb-4'>Arriving at pickup station between 26 February & 27 February when you order within next 5hrs 15mins</p>
                    </div>
                  </div>
                </div>
            <div>
                <div className='d-flex '>
                  <div className='p-2 border me-2 ordering'><CiDeliveryTruck /></div>
                    <div>
                      <div className='d-flex justify-content-between w-100'>
                        <p className='subb-1'>Door Delivery</p>
                        <p className='subb-2'>Details</p>
                      </div>
                      <p className='subb-3'>Delivery Fees ₦ 620</p>
                      <p className='subb-4'>Ready for delivery between 26 February & 27 February when you order within next 5hrs 15mins</p>
                    </div>
                  </div>
                </div>

                <div>
                <div className='d-flex '>
                  <div className='p-2 border me-2 ordering'><GoPackageDependencies /></div>
                    <div>
                      <div className='d-flex justify-content-between w-100'>
                        <p className='subb-1'>Return Policy</p>
                        
                      </div>
                      
                      <p className='subb-4'>Free return within 7 days for ALL eligible itemsDetails</p>
                    </div>
                  </div>
                </div>

                <div>
                <div className='d-flex '>
                  <div className='p-2 border me-2 ordering'><RiShieldStarFill /></div>
                    <div>
                      <div className='d-flex justify-content-between w-100'>
                        <p className='subb-1'>Warranty</p>
                        
                      </div>
                      
                      <p className='subb-4'>One Year Warranty For smartphones, we offer 12 months repair warranty counted from the date of purchase.Warranties on all replacements follow the same warranty timeframe of the original defective item, or 3 months after being replaced, whichever is longer.DO Apply to The Following1. For quality-related warranty claims (non-human damage),  buyers can return items for repairs. Buyers pay the shipping fees for sending the item back, while we pay for the shipping fees for sending the repaired item back to the buyer.2. For damage from misuse(including, but not limited to: falls, extreme temperatures, water, operating devices improperly), we can offer free repair, but replacement for damaged parts will be charged based on the condition.</p>
                    </div>
                  </div>
                </div>
            </div>

          </section>
        </div>
        </div>
      </div>


      <div className='d-lg-none'>
        <div className=' details-second mt-2'>
         <div className='text-center bg-white'>
            <img src={product.imageUrl} alt="" className=''/>
         </div>
         <div className='bg-white mt-2 p-2'>
            <h3>{product.name}</h3>
            <h4>brand:</h4>
            <div className='d-flex align-items-center'>
              <p className='me-2 smallp-1'>{product.new}</p>
              <p className='smallp-2'>{product.old}</p>
            </div>
            <p className='pThird'>{Math.floor(Math.random() * 20)} units left</p>
            <p className='pFourth smallp-3'>+ shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)</p>
            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <div className='star-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                <div className='random mt-1 ms-1'>({Math.floor(Math.random() * 300)} verified ratings)</div>
              </div>
              <div className='smallIcons d-flex'>
                <div className='me-2'><IoShareSocial /></div>
                <div><FaRegHeart /></div>
              </div>
            </div>

         </div>
        </div>

        <div className='promo mt-2 ps-2'>
          promotions
        </div>

        <div className='bg-white p-2'>
            <div className='d-flex '>
              <div className='color-1'><MdStars /></div>
              <p className='ms-2 random mt-1'>Call 0700600000 To Order</p>
            </div>
            <div className='d-flex'>
              <div className='color-2'><IoShieldHalfSharp /></div>
              <p className='ms-2 random mt-1'>Need extra money? Loan up to N500,000 on the JumiaPay Android app.</p>
            </div>
            <div className='d-flex '>
              <div className='color-1'><MdStars /></div>
              <p className='ms-2 random mt-1'>njoy cheaper shipping fees when you select a PickUp Station at checkout.</p>
            </div>
        </div>

        <div className='promo mt-2 ps-2'>delivery & returns</div>

        <div className='bg-white p-2'>
          <div className='express-another'>
            <img src="https://vendorhub.jumia.co.ke/wp-content/uploads/2017/08/Jumia-Express-logo-e1556633520715.png" alt="" />
            <p>Free delivery on thousands of products in Lagos, Ibadan & Abuja Details</p>
          </div>
          <p>Choose your location</p>
          <select class="form-select my-3" aria-label="Default select example">
            <option selected>Lagos</option>
            <option value="1">Ibadan</option>
            <option value="2">Ogun</option>
            <option value="3">Ondo</option>
          </select>
          <select class="form-select my-2" aria-label="Default select example">
            <option selected>Lekki-Ajah</option>
            <option value="1">Ikeja</option>
            <option value="2">VI</option>
            <option value="3">Mile-2</option>
          </select>
          <div className='d-flex changeColor'>
                  <div className='p-2 border me-2 ordering'><FaHandsHolding /></div>
                    <div>
                      <div className='d-flex justify-content-between w-100'>
                        <p className='subb-1'>Pickup Station</p>
                        <p className='subb-2'>Details</p>
                      </div>
                      <p className='subb-3'>Delivery Fees ₦ 250</p>
                      <p className='subb-4'>Arriving at pickup station between 26 February & 27 February when you order within next 5hrs 15mins</p>
                    </div>
                  </div>
                  <div className='d-flex changeColor'>
                  <div className='p-2 border me-2 ordering'><CiDeliveryTruck /></div>
                    <div>
                      <div className='d-flex justify-content-between w-100'>
                        <p className='subb-1'>Door Delivery</p>
                        <p className='subb-2'>Details</p>
                      </div>
                      <p className='subb-3'>Delivery Fees ₦ 650</p>
                      <p className='subb-4'>Ready for delivery between 26 February & 27 February when you order within next 5hrs 15mins</p>
                    </div>
                  </div>
                  <div className='d-flex changeColor'>
                  <div className='p-2 border me-2 ordering'><GoPackageDependencies /></div>
                    <div>
                      <div className='d-flex justify-content-between w-100'>
                        <p className='subb-1'>Warranty</p>
                        
                      </div>
                      <p className='subb-3'>1 Year warranty</p>
                      
                    </div>
                  </div>

                  
        </div>

        
      <div className='bg-white p-1 mt-2 sticky-bottom d-flex align-items-center'>
        <div className='smallBottom p-3'><FaPhoneAlt /></div>
        <div className='my-2 py-2 toCart d-flex justify-content-between align-items-center px-2 mx-1 w-100' onClick={(addedItems)}>
          <div className='cartImg'><MdAddShoppingCart /></div>
          <p>ADD TO CART</p>
          <div></div>
        </div>
      </div>
      </div>
    



        <div className='mt-3 bg-white w-100'><ProductSection data={imageFour}/></div>
    </div>
  )
}

export default ProductDetails
