import React from 'react'
import './filterSection.css'
import { BsSearch } from "react-icons/bs";

const FilterSection = () => {
  return (
    <div>
      <div className='my-1 py-2 px-3 bg-white filter'>
        <div>
          <h6 className='text-uppercase fw-bold'>Category</h6>
          <div className="">
            <h6 className='fw-bold'>Phones & Tablets</h6>
            <p className="side-menu mb-0">Kid's Fashion</p>
            <p className="side-menu mb-0">Men's Fashion</p>
            <p className="side-menu mb-0">Shoe jewlelry & Watch Accessories</p>
            <p className="side-menu mb-0">Watches</p>
            <p className="side-menu mb-0">Womens Fashion</p>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='brand'>
          <h6 className='text-uppercase fw-bold'>Brand</h6>
          <div className="">
            
            <div className="input-group search-bar">
              <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
            </div>

           <div >
            <div className="m-2 d-flex align-items-center">
                <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                <span className='mb-0 text-span'>915 Generation</span>
              </div>

              <div className="m-2 d-flex align-items-center">
                <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                <span className='mb-0 text-span'>Alldocube</span>
              </div>

              <div className="m-2 d-flex align-items-center">
                <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                <span className='mb-0 text-span'>Andoer</span>
              </div>

              <div className="m-2 d-flex align-items-center">
                <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                <span className='mb-0 text-span'>Anker</span>
              </div>

              <div className="m-2 d-flex align-items-center">
                <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                <span className='mb-0 text-span'>Apple</span>
              </div>
           </div>
          </div>
        </div>
        
        <hr className='mt-1' />
        <div className='discount'>
          <h6 className='text-uppercase fw-bold'>Discount</h6>
          <div className="">
            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>Show only discounted items</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='price'>
          <h6 className='text-uppercase fw-bold'>Price</h6>
          <div className="">
            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>Show only discounted items</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='discount-percentage'>
          <h6 className='text-uppercase fw-bold'>Discount Percentage</h6>
          <div className="">
            <div className="m-2 d-flex align-items-center">
            <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />      <span className='mb-0 text-span'>50% or more</span>
            </div>

            <div className="m-2 d-flex align-items-center">
            <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />        <span className='mb-0 text-span'>40% or more</span>
            </div>

            <div className="m-2 d-flex align-items-center">
            <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />        <span className='mb-0 text-span'>30% or more</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />
              <span className='mb-0 text-span'>20% or more</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />
              <span className='mb-0 text-span'>10% or more</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='seller-score'>
          <h6 className='text-uppercase fw-bold'>Seller Score</h6>
          <div className="">
            <div className="m-2 d-flex align-items-center">
            <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />      <span className='mb-0 text-span'>80% or more</span>
            </div>

            <div className="m-2 d-flex align-items-center">
            <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />        <span className='mb-0 text-span'>60% or more</span>
            </div>

            <div className="m-2 d-flex align-items-center">
            <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />        <span className='mb-0 text-span'>40% or more</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />
              <span className='mb-0 text-span'>20% or more</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='color'>
          <h6 className='text-uppercase fw-bold'>Color</h6>
          <div className="">
            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>Beige</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>Black</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>Blue</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>Brown</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>Cyan</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='ram'>
          <h6 className='text-uppercase fw-bold'>Ram</h6>
          <div className="">
            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>0.512</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>1</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>1.2</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>2</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>3</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='megapixels'>
          <h6 className='text-uppercase fw-bold'>Megapixels</h6>
          <div className="">
            <div className="input-group search-bar">
              <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>0.0</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>1.0</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>2.0</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>3.0</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>5.0</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='screen-size'>
          <h6 className='text-uppercase fw-bold'>Screen Size</h6>
          <div className="">
            <div className="input-group search-bar">
              <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>1.0</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>1.3</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>1.5</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>1.6</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>1.7</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='product-rating'>
          <h6 className='text-uppercase fw-bold'>Product Rating</h6>
          <div className="">
            <div className="m-2 d-flex align-items-center">
            <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />      <span className='mb-0 text-span'>80% or more</span>
            </div>

            <div className="m-2 d-flex align-items-center">
            <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />        <span className='mb-0 text-span'>60% or more</span>
            </div>

            <div className="m-2 d-flex align-items-center">
            <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />        <span className='mb-0 text-span'>40% or more</span>
            </div>

            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black" type="radio" value="" aria-label="Radio button for following text input" />
              <span className='mb-0 text-span'>20% or more</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='shipped-from'>
          <h6 className='text-uppercase fw-bold'>Shipped From</h6>
          <div className="">
            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-spans'>Shipped from abroad</span>
            </div>
            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>Shipped from Nigeria</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='express-delivery'>
          <h6 className='text-uppercase fw-bold'>Express Delivery</h6>
          <div className="">
            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-spanx'>JUMIA EXPRESS</span>
            </div>
          </div>
        </div>

        <hr className='mt-1' />
        <div className='official-stores'>
          <h6 className='text-uppercase fw-bold'>Official Stores</h6>
          <div className="">
            <div className="m-2 d-flex align-items-center">
              <input class="form-check-input me-3 mb-0 p-2 border border-black rounded-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className='mb-0 text-span'>Only Official Store</span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        
      </div>
    </div>
  )
}

export default FilterSection
