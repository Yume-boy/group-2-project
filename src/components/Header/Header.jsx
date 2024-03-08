import React, { useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";
import { useCart } from 'react-use-cart';
import { useLocation } from 'react-router-dom';
import './Header.css';
import { MdStars } from "react-icons/md";
import { BsSearch, BsPerson } from "react-icons/bs";
import { FaApple, FaPhoneAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { BsBox2 } from "react-icons/bs";
import { GiEyelashes } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { GrDropbox } from "react-icons/gr";
import { CiApple } from "react-icons/ci";
import { PiCookingPotBold } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiTelevisionSimple } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
import { PiTShirt } from "react-icons/pi";
import { LuBaby } from "react-icons/lu";
import { IoIosArrowDown, IoIosHelpCircleOutline } from "react-icons/io";import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMarkChatRead } from "react-icons/md";
import { LuTicket } from "react-icons/lu";
import JumiaImage from './Jumia-Logo.png'
import JumiaPay from './JumiaPay-removebg-preview.png'



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalUniqueItems}= useCart()


  const location = useLocation()

    const [showNavBar, setShowNavBar] = useState()

    useEffect(()=> {
        console.log('this is location', location)
        if (location.pathname === '/') {
            setShowNavBar('d-flex d-lg-none ')
        } else {
            setShowNavBar('d-flex')
        }
    },[location])

    





    const [show, useShow] = useState('d-none')
    const [show1, useShow1] = useState('d-none')
    const [show2, useShow2] = useState('d-none')
    const [show3, useShow3] = useState('d-none')
    const [show4, useShow4] = useState('d-none')
    const [show5, useShow5] = useState('d-none')
    const [show6, useShow6] = useState('d-none')
    const [show7, useShow7] = useState('d-none')
    const [show8, useShow8] = useState('d-none')
    const [show9, useShow9] = useState('d-none')
    const [show10, useShow10] = useState('d-none')
    const [show11, useShow11] = useState('d-none')
    const [show12, useShow12] = useState('d-none')
    const [show13, useShow13] = useState('d-none')

  
  
    function showContent() {
        useShow('d-block')
    }
  
    const hideContent = () => {
      useShow('d-none')
    }
  
    function showContent1() {
      useShow1('d-block')
  }
  
  const hideContent1 = () => {
    useShow1('d-none')
  }
  
  function showContent2() {
    useShow2('d-block')
  }
  
  const hideContent2 = () => {
  useShow2('d-none')
  }
  
  function showContent3() {
    useShow3('d-block')
  }
  
  const hideContent3 = () => {
  useShow3('d-none')
  }
  
  function showContent4() {
    useShow4('d-block')
  }
  
  const hideContent4 = () => {
  useShow4('d-none')
  }
  
  function showContent5() {
    useShow5('d-block')
  }
  
  const hideContent5 = () => {
  useShow5('d-none')
  }
  
  function showContent6() {
    useShow6('d-block')
  }
  
  const hideContent6 = () => {
  useShow6('d-none')
  }
  
  function showContent7() {
    useShow7('d-block')
  }
  
  const hideContent7 = () => {
  useShow7('d-none')
  }
  
  function showContent8() {
    useShow8('d-block')
  }
  
  const hideContent8 = () => {
  useShow8('d-none')
  }
  
  function showContent9() {
    useShow9('d-block')
  }
  
  const hideContent9 = () => {
  useShow9('d-none')
  }
  
  function showContent10() {
    useShow10('d-block')
  }
  
  const hideContent10 = () => {
  useShow10('d-none')
  }
  
  function showContent11() {
    useShow11('d-block')
  }
  
  const hideContent11 = () => {
  useShow11('d-none')
  }
  
  function showContent13() {

    
      useShow13('d-none d-lg-block')
   

  }
  
  const hideContent13 = () => {
   
      useShow13('d-none ')
  }
  






  return (
    <div className=''>
      <header className="header-middle-strip px-5">
          <div className="container-xxl">
            <div className="row d-flex align-items-center justify-content-center ">
              <div className="col-3 px-5" style={{color: '#f68b1e'}}>
                <MdStars width={16} height={16} className='m-1' />
                <span style={{fontSize: '.75rem', fontWeight: '600' }}>Sell on Jumia</span>
              </div>
              <div className="col-6 text-center">
                <img className='img-fluid me-3' width={67} height={20} src={JumiaImage} alt="" />
                <img className='img-fluid me-3 jusz' width={67} height={20} src={JumiaPay} alt="" />
              </div>
              <div className="col-3 text-center" style={{color: '#f68b1e'}}>
                
              </div>
            </div>
          </div>
      </header>
      <div className=''>
      <header className="header-bottom-strip px-5 ">
          <div className="container-xxl ">
            <div className="row d-flex align-items-center menu-main  ">
              
              <div className="col-3 px-5 d-flex align-items-center position-relative">
                <div className={`menu mb-0 ${showNavBar}`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation"  onMouseEnter={showContent13} onMouseLeave={hideContent13}>
                  <span className=''></span>
                  <span></span>
                  <span></span>

                  <div class="offcanvas offcanvas-start w-75 p-2 d-lg-none" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div class="d-flex align-items-center">
                      <div type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></div>
                      <div class="offcanvas-title ms-" id="offcanvasNavbar2Label">
                        <Link to={'/'}>
                          <img className='img-fluid ' width={100} height={22} src="./public/Jumia-Logo.png" alt="" />
                        </Link>
                    </div>
                  </div>
                  <div className='offcanvas-body'>
                  <div className='big-dawgs'>
                    <div className='straight'></div>
                    <h4 className='ps-2 py-2'>NEED HELP</h4>
                    <div className='straight'></div>
                    <h4 className='ps-2 py-2'>MY JUMIA ACCOUNT</h4>
                  </div>
                  <div class="ms-3">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                    
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><BsBox2 className='me-1'/>Orders</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><MdOutlineMarkChatRead className='me-1'/>Pending Review</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><LuTicket className='me-1'/>Voucher</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><FaRegHeart className='me-1'/>Saved Items</a>
                      </li>
                    </ul>
                    
                  </div>

                  <div className='big-dawgs'>
                    <div className='straight'></div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h4 className='ps-2 py-2'>OUR CATEGORIES</h4>
                      <h6>See all</h6>
                    </div>
                  </div>
                  <div class="ms-3">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                    
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/"><IoPhonePortraitOutline className='me-1'/>Phones & Tablets</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><PiCookingPotBold className='me-1'/>Appliances</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><PiTelevisionSimple className='me-1'/>Electronics</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><GiEyelashes className='me-1'/>Beauty</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><GoHome className='me-1'/>Home & Office</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><uBaby className='me-1'/>Baby Products</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><CiDumbbell className='me-1'/>Sporting Goods</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/category"><PiTShirt className='me-1'/>Fashion</a>
                      </li> 
                    </ul>
                    
                  </div>
                  <div className='big-dawgs'>
                    <div className='straight'></div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h4 className='ps-2 py-2'>OUR SERVICES</h4>
                      <h6>See all</h6>
                    </div>
                  </div>
                  <div class="ms-3">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                    
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><MdStars className='me-1'/>J-Force</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><MdStars className='me-1'/>Pay Airtime Bills</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><MdStars className='me-1'/>Pay Electricity Bills</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><MdStars className='me-1'/>Pay Internet Bills</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><MdStars className='me-1'/>Buy Data</a>
                      </li>
                    </ul>
                    
                  </div>
                  <div className='big-dawgs'>
                    <div className='straight'></div>
                    <h5 className='ps-2 py-2'>Sell on Jumia</h5>
                    <h5 className='ps-2 py-2'>Service Center</h5>
                    <h5 className='ps-2 py-2'>Contact us</h5>
                  </div>
                 </div>
                 
                  </div>
                  <div className={`navigation  position-absolute ${show13}`} onMouseEnter={showContent13} onMouseLeave={hideContent13}>
            <div className='parent'>
              <div className='links mx-0 '>
                <Link to='/category' href="" onMouseEnter={showContent} onMouseLeave={hideContent} className='text-reset'><div className='icon1'><CiApple /></div> Supermarket</Link>
                <Link to='/category' href="" onMouseEnter={showContent1} onMouseLeave={hideContent1} className='text-reset'><div className='icon1'><GiEyelashes /></div> Health & Beauty</Link>
                <Link to='/category' href="" onMouseEnter={showContent2} onMouseLeave={hideContent2} className='text-reset'><div className='icon1'><GoHome /></div>Home & Office</Link>
                <Link to='/category' href="" onMouseEnter={showContent3} onMouseLeave={hideContent3} className='text-reset'><div className='icon1'><PiCookingPotBold /></div>Appliances</Link>
                <Link to='/category' href="" onMouseEnter={showContent4} onMouseLeave={hideContent4}className='text-reset'><div className='icon1'><IoPhonePortraitOutline /></div>Phones & Tablet</Link>
                <Link to='/category' href="" onMouseEnter={showContent5} onMouseLeave={hideContent5} className='text-reset'><div className='icon1'><HiOutlineDesktopComputer /></div>Computing</Link>
                <Link to='/category' href="" onMouseEnter={showContent6} onMouseLeave={hideContent6} className='text-reset'><div className='icon1'><PiTelevisionSimple /></div>Electronics</Link>
                <Link to='/category' href="" onMouseEnter={showContent7} onMouseLeave={hideContent7} className='text-reset'><div className='icon1'><PiTShirt /></div>Fashion</Link>
                <Link to='/category' href="" onMouseEnter={showContent8} onMouseLeave={hideContent8} className='text-reset'><div className='icon1'><LuBaby /></div>Baby Product</Link>
                <Link to='/category' href="" onMouseEnter={showContent9} onMouseLeave={hideContent9} className='text-reset'><div className='icon1'><IoGameControllerOutline /></div>Gaming</Link>
                <Link to='/category' href=""onMouseEnter={showContent10} onMouseLeave={hideContent10} className='text-reset'><div className='icon1'><CiDumbbell /></div>Sporting Goods</Link>
                <Link to='/category' href=""onMouseEnter={showContent11} onMouseLeave={hideContent11} className='text-reset'><div className='icon1'><HiOutlineDotsCircleHorizontal /></div>Other categories</Link>
              </div>
            </div>
            <div className={`position-absolute second ${show}`} >
                        <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>FOOD CUPBOARD</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Grains & Rice</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pasta & Noodles</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Grains & Rice</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Breakfast Foods</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Herbs, Spices & Seasoning</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Flours & Meals</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Malt Drinks</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Coffee</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Water</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Cooking Oil</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Juices</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Soft Drinks</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Canned & Packaged Foods</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Candy & Chocolate</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Syrups, Sugars & Sweetenerss</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>BEVERAGE</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Soft Drink</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Milk & Cream</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Energy Drink</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bottled Beverages</Link></li>
                    </ul>
                    <h6 className='mb-1'>HOUSEHOLD CLEANING</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Laundry</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Air Fresheners</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Toilet Paper & Wipes</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bathroom Cleaners</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Dishwashing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Cleaning Tools</Link></li>
                    </ul>
                    <h6 className='mb-1'>BEER, WINE & SPIRIT</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Beer</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Red Wine</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Vodka</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>BABBY PRODUCT</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Disposable Diapers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bottle Feeding</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Wipes & Refill</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show1}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>MAKEUP</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Concealers &amp; Color Correctors</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Foundation</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Powder</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Lipstick</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Eyeliner &amp; Kajal</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Mascara</Link></li>
                    </ul>

                    <h6 className='mb-1'>PERSONAL CARE</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Skin Care</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bath &amp; Bathing Accessories</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Sunscreens &amp; Tanning Products</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Contraceptives &amp; Lubricants</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Piercing &amp; Tattoo Supplies</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Deodorants &amp; Antiperspirants</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Lip Care</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>FRAGRANCE</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Women</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Men</Link></li>
                    </ul>
                    <h6 className='mb-1'>HAIR ACCESSORIES</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Hair Cutting Tools</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Shampoo &amp; Conditioner</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Wigs &amp; Accessories</Link></li>
                    </ul>
                    <h6 className='mb-1'>ORAL CARE</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Teeth Whitening</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Toothpaste</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Health Care</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>FIRST AID</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Medical Supplies &amp; Equipment</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Flternative Medicine</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Diabetes Care</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Feminine Care</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Alternative Medicine</Link></li>
                    </ul>

                    <h6 className='mb-1'>Vitamins &amp; Dietary Supplements</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Herbal Supplements</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Vitamins &amp; Mineral</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Supplements</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Multi &amp; Prenatal Vitamins</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show2}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Home &amp; Kitchen</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bath</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bedding</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home Decor</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home Furniture</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Vacuums &amp; Floor Care</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Wall Art</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Cookware</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bakeware</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Small Appliances</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Cutlery &amp; Knife Accessories</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Home &amp; Office Furniture</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Kitchen &amp; Dining</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Lighting</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Stationery</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Storage &amp; Organization</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Office Products</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Office &amp; School Supplies</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Office Furniture &amp; Lighting</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">PPackaging Materials</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show3}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Small Appliances</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Blenders</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Deep Fryers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Juicers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Air Fryers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Rice Cookers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Toasters &amp; Ovens</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Microwaves</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bundles</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Vacuum Cleaners</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Kettles</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Yam Pounders</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Irons</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Large Appliances</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Washing Machines</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Fridges</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Freezers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Air Conditioners</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Heaters</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Fans</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Air Purifiers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Water Dispensers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Generators &amp; Inverters</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show4}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Mobile Phones</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Smartphones</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Basic Phones</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Refurbished Phones</Link></li>
                    </ul>

                    <h6 className='mb-1'>Tablets</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">iPads</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Android Tablets</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Educational Tablets</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Tablet Accessories</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Mobile Accessories</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Accessory Kits</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Adapters</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Batteries</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Battery Chargers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bluetooth Headsets</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Cables</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Car Accessories</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Chargers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Earphones &amp; Headsets</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">MicroSD Cards</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Screen Protectors</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Selfie Sticks &amp; Tripods</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Smart Watches</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Top Smartphones</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">iPhone 11 Pro Max</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Samsung Galaxy S10</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">iPhone 11 </Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nokia 7.2</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Huawei Y9 S</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">iPhone XS Max</Link></li>
                    </ul>

                    <h6 className='mb-1'>Top Phone Brands</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Samsung</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Apple</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Huawei</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nokia</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Xiaomi</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Tecno</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show5}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Computers</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Desktops</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Laptops</Link></li>
                    </ul>

                    <h6 className='mb-1'>Data Storage</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">External Hard Drives</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">USB Flash Drives</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">External Solid State</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Printers</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Inkjet Printers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Laser Printers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Printer Ink &amp; Toner</Link></li>
                    </ul>
                    <h6 className='mb-1'>Computer Accessories</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Keyboards &amp; Mice</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Uninterrupted Power Supply</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Memory Cards</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Batteries</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Scanners</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Video Projectors</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Top Brands</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">HP</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Lenovo</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Apple</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">ASUS</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Huawei</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Microsoft</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Kingston</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Seagate</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Samsung</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Sandisk</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Toshiba</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show6}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Television &amp; Video</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Televisions</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Smart TVs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">LED &amp; LCD TVs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">QLED &amp; OLED TVs</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">DVD Players &amp; Recorders</Link></li>
                    </ul>

                    <h6 className='mb-1'>Home Audio</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Home Theatre Systems</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Receivers &amp; Amplifiers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Sound Bars</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Cameras &amp; Photos</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Digital Cameras</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Projectors</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Video Surveillance</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Camcorders</Link></li>
                    </ul>
                    <h6 className='mb-1'>Generators &amp; Portable Power</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Generators</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Power Inverters</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Solar &amp; Wind Power</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Stablizers</Link></li>
                    </ul>
                  </div>
                </div>
            
            </div>
            <div className={`position-absolute second ${show7}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Women's Fashion</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Clothing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Shoes</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Accessories</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Jewelry</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">AHandbags &amp; Wallets</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Underwear &amp; Sleepwear</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Maternity</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Dresses</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Traditional</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">each &amp; Swimwear</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Flats</Link></li>
                    </ul>

                    <h6 className='mb-1'>Kid's Fashion</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Boy's Fashion</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Girl's Fashion</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Men's Fashion</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Clothing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Shoes</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Accessories</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Underwear &amp; Sleepwear</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Traditional &amp; Cultural Wear</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">T-Shirts</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Polo Shirts</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Trousers &amp; Chinos</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Sneakers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Jewelry</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Jerseys</Link></li>
                    </ul>
                
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Watches</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Women's Watches</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Men's Watches</Link></li>
                    </ul>

                    <h6 className='mb-1'>Sunglasses</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Men's Sunglasses</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Women's Sunglasses</Link></li>
                    </ul>

                    <h6 className='mb-1'>Top Brands</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Adidas</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">DeFacto</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nike</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div  className={`position-absolute second ${show8}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Apparel &amp; Accessories</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Baby Boys</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Baby Girls</Link></li>
                    </ul>

                    <h6 className='mb-1'>Diapering</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Disposable Diapers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Diaper Bags</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Wipes &amp; Holders</Link></li>
                    </ul>

                    <h6 className='mb-1'>Baby &amp; Toddler Toys</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Activity Play Centers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Music &amp; Sound</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bath Toys</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Bathing &amp; Skin Care</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Washcloths &amp; Towels</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Grooming &amp; Healthcare Kits</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Skin Care</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bathing Tubs &amp; Seatsr</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bathroom Safety</Link></li>
                    </ul>

                    <h6 className='mb-1'>Feeding</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bibs &amp; Burp Cloths</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Breastfeeding</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bottle-Feeding</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Pacifiers &amp; Accessories</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Food Storage</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Highchairs &amp; Booster Seats</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Solid Feeding</Link></li>
                    </ul>
                
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Gear</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Backpacks &amp; Carriers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Swings, Jumpers &amp; Bouncers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Walkers</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className={`position-absolute second ${show9}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>PlayStation</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Playstation 5</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Playstation 4</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Playstation 3</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Playstation</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Playstation Vita</Link></li>
                    </ul>

                    <h6 className='mb-1'>XBOX</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">XBOX One</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">XBOX 360</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">XBOX</Link></li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Nintendo</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nintendo 3DS</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nintendo DS</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nintendo Switch</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nintendo Wii</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Top Games</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">FIFA '23 PS5</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">PES '23 PS4</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">God of war</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Spiderman</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Call of Duty</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Assassin's Creed Valhalla</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">The Last Of Us</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">The Witcher 3</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Metal Gear Solid</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Fallout</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Madden NFL</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Far Cry</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Grand Theft Auto</Link></li>
                    </ul>
                
                  </div>

                </div>
            </div>
            <div className={`position-absolute second ${show10}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Cardio Training</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Exercise Bikes</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Treadmills</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Elliptical Trainers</Link></li>
                    </ul>

                    <h6 className='mb-1'>Strength Training Equipment</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Bars</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Core &amp; Abdominal Trainers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Dumbbells</Link></li>
                    </ul>

                    <h6 className='mb-1'>Accessories</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Exercise Bands</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Exercise Mats</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Sports Clothing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Jump Ropes</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Team Sports</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Basketball</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Team Sport Accessories</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Tennis &amp; Racquet Sports</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Swimming</Link></li>
                    </ul>

                    <h6 className='mb-1'>Outdoor &amp; Adventure</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Cycling</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Running</Link></li>
                    </ul>
                
                  </div>

                  
                </div>
            </div>
            <div className={`position-absolute second ${show11}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Toys &amp; Games</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Games</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Dress Up &amp; Pretend Play</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Sports &amp; Outdoor Play</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Top Toys &amp; Games</Link></li>
                    </ul>

                
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Official Store</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Adidas</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nestle</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Xiaomi</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nivea</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Apple</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Intel</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Reckitt Benckiser</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Binatone</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nexus</Link></li>
                    </ul>
                
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Grocery</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Food Cupboards</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Baby Products</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Plastic &amp; Paper Products</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Drinks</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Hygiener</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Household Cleaning</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Beer, Wine &amp; Spirits</Link></li>
                    </ul>
                
                  </div>

                  
                </div>
            </div>
            <div className={`position-absolute second ${show12}`} >
            <div className="row">
                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Women's Fashion</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Clothing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Shoes</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Accessories</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Jewelry</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">AHandbags &amp; Wallets</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Underwear &amp; Sleepwear</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Maternity</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Dresses</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Traditional</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">each &amp; Swimwear</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Flats</Link></li>
                    </ul>

                    <h6 className='mb-1'>Kid's Fashion</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Boy's Fashion</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Girl's Fashion</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Men's Fashion</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Clothing</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Shoes</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Accessories</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Underwear &amp; Sleepwear</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Traditional &amp; Cultural Wear</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">T-Shirts</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Polo Shirts</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Trousers &amp; Chinos</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Sneakers</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Jewelry</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Jerseys</Link></li>
                    </ul>
                
                  </div>

                  <div className="col-6 col-md-4 mb-1">
                    <h6 className='mb-1'>Watches</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Women's Watches</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Men's Watches</Link></li>
                    </ul>

                    <h6 className='mb-1'>Sunglasses</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Men's Sunglasses</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Women's Sunglasses</Link></li>
                    </ul>

                    <h6 className='mb-1'>Top Brands</h6>
                    <hr />
                    <ul className="nav flex-column mb-2">
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Adidas</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">DeFacto</Link></li>
                      <li className="nav-item "><Link to='/category' href="#" className="nav-link p-0 text-body-secondary">Nike</Link></li>
                    </ul>
                  </div>
                </div>
                </div>
          </div>



                </div>
                <div>
                  <Link to={'/'}>
                    <img className='img-fluid logo' width={140} height={32} src="../public/Jumia-Logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                  <div className="input-group">
                      <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
                      <input type="text" className="form-control" placeholder="Search Products, brands and categories" aria-label="Search Products, brands and categories" aria-describedby="basic-addon2" />
                  </div>
                  <button type="button" className="btn fw-semibold text-white">SEARCH</button>
              </div>
              <div className="col-3">
                <div className="header-bottom-links d-flex align-items-center justify-content-end">
                  <div className='g-10 d-flex align-items-center'>
                    <Link className='me-2 d-flex align-items-center text-dark link-text'>
                      <BsPerson size={32} className='link-icons'/>
                      <p className='link-text mb-0 fw-semibold'>Account</p>
                      <IoIosArrowDown className='link-arrow-down' />
                    </Link>

                    <Link className='me-2 d-flex align-items-center text-dark link-text'>
                      <IoIosHelpCircleOutline size={32}/>
                      <p className='link-text mb-0 fw-semibold'>Help</p>
                      <IoIosArrowDown />
                    </Link>
                    <Link className='me-2 d-flex align-items-center text-dark link-text' to='/cart'>
                      <div className='position-relative'>
                      <div className={`unique p-1 rounded-circle position-absolute ${totalUniqueItems === 0 ? 'd-none': 'd-block'}`}>{totalUniqueItems}</div>
                      <IoCartOutline size={32} className='link-icons '/>
                      </div>
                      <p className='link-text mb-0 fw-semibold '>Cart</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row search-button">
              <div className="col-12 mb-2 w-100">
                  <div className="input-group search-bar">
                      <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
                      <input type="text" className="form-control" placeholder="Search Products, brands and categories" aria-label="Search Products, brands and categories" aria-describedby="basic-addon2" />
                  </div>
              </div>
            </div>
          </div>
      </header>
      </div>




      
      
      


    </div>
  )
}

export default Header