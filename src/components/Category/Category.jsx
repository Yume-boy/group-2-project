import React from 'react';
import './Category.css';
import FilterSection from '../filterSection/FilterSection';
import ProductSection from '../ProductSection/ProductSection';
import OfficialStore from '../officialStore/OfficialStore';
import CategoryProducts from '../categoryProducts/CategoryProducts';
import CategoryEssay from '../categoryEssay/CategoryEssay';
import Card from '../Cards/Card';
import cardData3 from '../../apiData/cardData3';
import imageFour from '../../apiData/imageFour'


const Category = () => {
  return (
    <div className="container-lg">
      
      <div className="row my-2">
        <div className="col-12 direction d-none d-lg-block"><a href="/" className='text-reset'>Home</a> {' > '} <span> Fashion</span></div>
      </div>
      <div className="row">
        <div className='box mb-0'>
          <p className="text-center mb-0">Fashion</p>
        </div>
      </div>
      <div className="row">
        <div className='boxx mb-0'>
          <p className="text-center mb-0 text-white">CALL TO ORDER 07006000000</p>
        </div>
      </div>

      <div className='mt-4'>
        <ProductSection data={imageFour} left='Top Deals' Right="See all >" color='#fff'/>
        <div className='banner-carousel-1'>
              <div className={`row bg-white mt-4 g-2 px-2`}>
                <div className='col-6 py-3 px-1'>
                  <img src="https://ng.jumia.is/cms/0-1-category-pages/fashion/2023/A/B_Test/Men_double_banner.png" alt="" />
                </div>
                <div className='col-6 py-3 px-1'>
                  <img src="https://ng.jumia.is/cms/0-1-category-pages/fashion/2023/A/B_Test/Women_double_banner_.png" alt="" />
                </div>
              </div>
              <div className='bg-white mt-3'>
                <div className='col-12 py-3 px-1'>
                  <img src="https://ng.jumia.is/cms/0-1-category-pages/fashion/2023/A/B_Test/kid_1152x252.png" alt="" />
                </div>
              </div>
        </div>
        <ProductSection data={imageFour} left='Limited Stocks' Right="See all >" color='#fff'  />
        <div className='banner-carousel-1'>
              <div className={`row bg-white mt-4 g-2 px-2`}>
                <div className='col-6 py-3 px-1'>
                  <img src="https://ng.jumia.is/cms/0-1-category-pages/fashion/2023/A/B_Test/mens_accessories_572x250.png" alt="" />
                </div>
                <div className='col-6 py-3 px-1'>
                  <img src="https://ng.jumia.is/cms/0-1-category-pages/fashion/2023/A/B_Test/women_accessories_572x250.png" alt="" />
                </div>
              </div>
              <div className='bg-white mt-3'>
                <div className='col-12 py-3 px-1'>
                  <img src="https://ng.jumia.is/cms/0-1-category-pages/fashion/2023/A/B_Test/watches_1152x252.png" alt="" />
                </div>
              </div>
        </div>
        <ProductSection data={imageFour} left='Top Deals' Right="See all >" color='#fff'/>
        <div className='banner-carousel-1'>
              <div className={`row bg-white mt-4 g-2 px-2`}>
                <div className='col-6 py-3 px-1'>
                  <img src="https://ng.jumia.is/cms/0-1-category-pages/fashion/2023/A/B_Test/mens_clothing_572x250.png" alt="" />
                </div>
                <div className='col-6 py-3 px-1'>
                  <img src="https://ng.jumia.is/cms/0-1-category-pages/fashion/2023/A/B_Test/women_clothing_572x250.png" alt="" />
                </div>
              </div>
        </div>
        <OfficialStore/>
        <div className='banner-carousel-1'>
              <div className='bg-white my-3 '>
                <div className='col-12 py-3 px-1'>
                  <img src="https://ng.jumia.is/cms/0-1-category-pages/fashion/2023/A/B_Test/women_sneakers_1152x252.png" alt="" />
                </div>
              </div>
        </div>
        <div className='row'>
          <div className='col-3 d-none d-lg-block'><FilterSection/></div>
          <div className='col-12 col-lg-9 '><CategoryProducts /></div>
        </div>
        <CategoryEssay/>
      </div>
    </div>
  )
}

export default Category