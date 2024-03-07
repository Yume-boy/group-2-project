import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import { MdEmail, MdStars } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaTwitter, FaCcMastercard, FaMaxcdn } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IoIosArrowUp } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { RiVisaLine } from "react-icons/ri";
import { TbBrandAirbnb, TbBrandAngular, TbBrandAmongUs,  TbBrandAws } from "react-icons/tb";


const Footer = () => {
  return (
    <div className="">
      <footer className='footer-top-strip px-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 px-5 py-4">
              <img className='img-fluid' width={140} height={32} src="../public/jumia-logo-white.png" alt="" />
            </div>
            <div className="col-6 px-5 py-4">
              <h6 className='text-white left-text-header'>New to Jumia?</h6>
              <p className='text-white left-text-content'>
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
              <div className='d-flex align-items-center'>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                  <MdEmail className='fs-4' color='#a3a3a6' /></span>
                  <input type="text" className="form-control py-3" placeholder="Enter E-mail Address" aria-label="Enter E-mail Address" aria-describedby="basic-addon2" />
                </div>
                <button type="button" className="btn fw-semibold text-white px-3 py-2">Male</button> 
                <button type="button" className="btn fw-semibold text-white px-3 py-2">Female</button> 
              </div>   
            </div>
            <div className="col-4 px-5 py-4">
              <div className="d-flex align-items-start g-10">
                <div className="star-box d-flex align-items-center justify-content-center">
                  <MdStars width={32} height={32} className='m-1 fs-1 text-white' />
                </div>
                <div className="left-text">
                  <h6 className='text-white left-text-header'>New to Jumia?</h6>
                  <p className='text-white left-text-content'>
                    Get access to exclusive offers!
                  </p>
                </div>
              </div>
              <div>
                <img className='img-fluid me-2' width={120} height={82} src="../public/app-store.png" alt="" />

                <img className='img-fluid' width={120} height={32} src="../public/google-play.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom-strip px-5">
        <div className="container-xxl">
          <div className="row py-2 footer-border">
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>NEED HELP?</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <a className='text-white footer-link '>
                  Chat with us
                </a>
                <a className='text-white footer-link '>
                  Help Center
                </a>
                <a className='text-white footer-link ' href='/contact'>
                  Contact Us
                </a>
              </div>

              <h4 className='text-white ps-5 mb-1 left-text-header'>USEFUL LINKS</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <a className='text-white footer-link '>
                  Service Center
                </a>
                <a className='text-white footer-link '>
                  How to shop on Jumia?
                </a>
                <a className='text-white footer-link '>
                  Delivery options and timelines
                </a>
                <a className='text-white footer-link '>
                  How to return a product on Jumia?
                </a>
                <a className='text-white footer-link '>
                  Corporate and bulk purchases
                </a>
                <a className='text-white footer-link '>
                  Report a Product
                </a>
                <a className='text-white footer-link '>
                  Ship your package anywhere in Nigeria
                </a>
                <a className='text-white footer-link '>
                  Dispute Resolution Policy
                </a>
                <a className='text-white footer-link '>
                  Returns & Refund Timeline
                </a>
                <a className='text-white footer-link '>
                  Return Policy
                </a>
              </div>
            </div>
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>ABOUT JUMIA</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <a className='text-white footer-link ' href ='/about'>
                  About us
                </a>
                <a className='text-white footer-link '>
                  Jumia careers
                </a>
                <a className='text-white footer-link '>
                  Jumia Express
                </a>
                <a className='text-white footer-link '>
                  Terms and Conditions
                </a>
                <a className='text-white footer-link '>
                  Privacy Notice
                </a>
                <a className='text-white footer-link '>
                  Jumia Store Credit Terms & Conditions
                </a>
                <a className='text-white footer-link '>
                  Jumia Payment Information Guidelines
                </a>
                <a className='text-white footer-link '>
                  Cookie Notice
                </a>
                <a className='text-white footer-link '>
                  Jumia Global
                </a>
                <a className='text-white footer-link '>
                  Official Stores
                </a>
                <a className='text-white footer-link '>
                  Flash Sales
                </a>
              </div>
            </div>
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>NEED HELP?</h4>
              <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                <a className='text-white footer-link '>
                  Sell on Jumia
                </a>
                <a className='text-white footer-link '>
                  Vendor hub
                </a>
                <a className='text-white footer-link '>
                  Become a Sales Consultant
                </a>
                <a className='text-white footer-link '>
                  Become a Logistics Service Partner
                </a>
                <a className='text-white footer-link '>
                  Join the Jumia DA Academy
                </a>
                <a className='text-white footer-link '>
                  Join the Jumia KOL Program
                </a>
              </div>
            </div>
            <div className="col-3 pe-5 py-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>JUMIA INTERNATIONAL</h4>
              <div className="d-flex">
                <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                  <a className='text-white footer-link '>
                    Algeria
                  </a>
                  <a className='text-white footer-link '>
                    Egypt
                  </a>
                  <a className='text-white footer-link '>
                    Ghana
                  </a>
                  <a className='text-white footer-link '>
                    Ivory Coast
                  </a>
                  <a className='text-white footer-link '>
                    Kenya
                  </a>
                </div>
                <div className='left-text-content ps-5 py-2 mb-2 d-flex flex-column'>
                  <a className='text-white footer-link '>
                    Morocco
                  </a>
                  <a className='text-white footer-link '>
                    Senegal
                  </a>
                  <a className='text-white footer-link '>
                    Tunisia
                  </a>
                  <a className='text-white footer-link '>
                    Uganda
                  </a>
                  <a className='text-white footer-link '>
                    Zando
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-2 footer-border">
            <div className="col-3 pe-5 pb-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>JOIN US ON</h4>
              <div className='social-icons d-flex align-items-center ps-5 py-2 mb-2 '>
                <a href="" className="social-icons text-white fs-4 me-2">
                  <FaFacebookF />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-2">
                  <FaYoutube />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-2">
                  <TiSocialInstagram />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-2">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div className="col-6 pe-5 pb-4 ">
              <h4 className='text-white ps-5 mb-1 left-text-header'>PAYMENT METHODS & DELIVERY PARTNERS</h4>
              <div className='d-flex align-items-center ps-5 py-2 mb-2 '>
                <a href="" className="social-icons text-white fs-4 me-3">
                  <GiReceiveMoney />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <FaCcMastercard />
                </a>
                
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAmongUs />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAngular />
                </a>
                <a href="" className="social-icons text-white fs-4 mx-3">
                  <TbBrandAws />
                </a>
              </div>
            </div>
          </div>
          <div className="row footer-border">
            <div className="col-12">
              <p className="text-center mb-0 text-white p-3 fs-6">
                &copy; {new Date().getFullYear()} Powered By Group 1
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className='small-screen'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center text-white mobile-top">
              <IoIosArrowUp />
              <span>Back to Top</span>
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-center text-white mobile-middle">
              <span>Chat with us</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Help Center</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
             <a href="/contact"className='text-reset'> <span>Contact Us</span></a>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>terms & Conditions</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Privacy Notice</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Cookie Notice</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Become a Seller</span>
            </div>
            <div className="col-3 text-center text-white mobile-middle">
              <span>Report a Product</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center text-white mobile-middle">
              <span>Jumia Anniversary 2024</span>
              <hr className='mt-3' />
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer