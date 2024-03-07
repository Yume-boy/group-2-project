// import React, { useState } from 'react'
// import { NavLink, Link } from "react-router-dom";
// import './OtherHeader.css';
// import { MdStars } from "react-icons/md";
// import { BsSearch, BsPerson } from "react-icons/bs";
// import { IoIosArrowDown, IoIosHelpCircleOutline } from "react-icons/io";import { IoCartOutline } from "react-icons/io5";



// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className=''>
//       {/* 
//       <header className="header-top-strip">
//         <div className="container-xxl">
//           <div className="row justify-content-center">
//             <div className="col-12 text-center">
//               <img className='img-fluid' src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Brand-days/January/rexona/Desktop-Top-Strip_1170X60.jpg" alt="" />
//             </div>
//           </div>
//         </div>
//       </header> */}
//       <header className="header-middle-strip px-5">
//           <div className="container-xxl">
//             <div className="row d-flex align-items-center justify-content-center">
//               <div className="col-3 px-5" style={{color: '#f68b1e'}}>
//                 <MdStars width={16} height={16} className='m-1' />
//                 <span style={{fontSize: '.75rem', fontWeight: '600' }}>Sell on Jumia</span>
//               </div>
//               <div className="col-6 text-center">
//                 <img className='img-fluid me-3' width={67} height={20} src="../public/Jumia-Logo.png" alt="" />
//                 <img className='img-fluid me-3' width={67} height={20} src="../public/Jumia-Logo.png" alt="" />
//                 <img className='img-fluid' width={67} height={20} src="../public/Jumia-Logo.png" alt="" />
//               </div>
//               <div className="col-3 text-center" style={{color: '#f68b1e'}}>
                
//               </div>
//             </div>
//           </div>
//       </header>
//       <header className="header-bottom-strip px-5 ">
//           <div className="container-xxl">
//             <div className="row d-flex align-items-center menu-main">
              
//               <div className="col-3 px-5 d-flex align-items-center">
//                 <div className="menu mb-0">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//                 <div>
//                   <Link to={'/'}>
//                     <img className='img-fluid logo' width={140} height={32} src="../public/Jumia-Logo.png" alt="" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-6 d-flex justify-content-center align-items-center">
//                   <div className="input-group">
//                       <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
//                       <input type="text" className="form-control" placeholder="Search Products, brands and categories" aria-label="Search Products, brands and categories" aria-describedby="basic-addon2" />
//                   </div>
//                   <button type="button" className="btn fw-semibold text-white">SEARCH</button>
//               </div>
//               <div className="col-3">
//                 <div className="header-bottom-links d-flex align-items-center justify-content-end">
//                   <div className='d-flex align-items-center'>
//                     <Link className='g-10 d-flex align-items-center text-dark link-text'>
//                       <BsPerson size={32} className='link-icons'/>
//                       <p className='link-text mb-0 fw-semibold'>Account</p>
//                       <IoIosArrowDown className='link-arrow-down' />
//                     </Link>

//                     <Link className='me-3 g-10 d-flex align-items-center text-dark link-text'>
//                       <IoIosHelpCircleOutline size={32}/>
//                       <p className='link-text mb-0 fw-semibold'>Help</p>
//                       <IoIosArrowDown />
//                     </Link>

//                     <Link to={'cart'} className='g-10 d-flex align-items-center text-dark link-text'>
//                       <IoCartOutline size={32} className='link-icons'/>
//                       <p className='link-text mb-0 fw-semibold'>Cart</p>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row search-button">
//               <div className="col-12 mb-2 w-100">
//                   <div className="input-group search-bar">
//                       <span className="input-group-text" id="basic-addon1"><BsSearch /></span>
//                       <input type="text" className="form-control" placeholder="Search Products, brands and categories" aria-label="Search Products, brands and categories" aria-describedby="basic-addon2" />
//                   </div>
//               </div>
//             </div>
//           </div>
//       </header>
//     </div>
//   )
// }

// export default OtherHeader