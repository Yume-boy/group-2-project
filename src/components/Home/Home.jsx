import './Home.css'
import LinkSection from '../LinkSection/LinkSection';
import Categories from '../Categories/Categories';
import ProductSection from '../ProductSection/ProductSection';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Card from '../Cards/Card';
import Essay from '../Essay/Essay';
import cardData1 from '../../apiData/cardData'
import cardData2 from '../../apiData/cardData1';
import cardData3 from '../../apiData/cardData3';
import cardData4 from '../../apiData/cardData4';
import cardData5 from '../../apiData/CardData5';
import cardData6 from '../../apiData/cardData6';
import cardData7 from '../../apiData/cardData7';
import imageOne from '../../apiData/imageOne'
import imageTwo from '../../apiData/imageTwo'
import imageThree from '../../apiData/imageThree'
import imageFour from '../../apiData/imageFour'
import imageFive from '../../apiData/imageFive'
import imageSix from '../../apiData/imageSix'
import imageTen from '../../apiData/imageTen'
import imageEight from '../../apiData/imageEight'
import imageNine from '../../apiData/imageNine'


function Home() { 
  return (
      <div className='home'>
      <div className=' container-lg '>
      <LinkSection />
      <Categories />
      <ProductSection data={imageOne} display='d-none' flash='d-none' time = 'd-none'  left='Appliances' Right="See all >"/>
      <BannerCarousel show1='d-none' show2='d-none'  show3='d-none'/>
      <ProductSection data={imageTwo} display='d-none' flash='d-none' time = 'd-none' left='Appliances' Right="See all >" />
      <ProductSection data={imageTen} left='Flash Sale' bgcolor='red' color='text-white'  Right="See all >" />
      <Card data={cardData6} title ='Health And Beauty'/>
      <ProductSection data={imageThree} flash='d-none' display='d-none' time = 'd-none' left='Appliances' Right="See all >" />
      <Card data={cardData1} title = 'Appliances Upgrade'/>
      <ProductSection data={imageFour} flash='d-none' display='d-none' time = 'd-none' left='Appliances' Right="See all >" />
      <ProductSection data={imageFive} flash='d-none' display='d-none' time = 'd-none' left='Appliances' Right="See all >" />
      <Card data={cardData2} title ='Shop From Our Collections'/>
      <BannerCarousel show2='d-none' show3='d-none' show4='d-none'/>
      <Card data={cardData3} title ='Phone Deals'/>
      <ProductSection data={imageSix} flash='d-none' display='d-none' time = 'd-none' left='Appliances' Right="See all >" />
      <Card data={cardData7} title ='Gift For Your Loved Ones'/>
      <BannerCarousel show1='d-none' show3='d-none'  show4='d-none'/>
      <Card data={cardData4} title ='Jumia Football Zones'/>
      <ProductSection data={imageEight} flash='d-none' display='d-none' time = 'd-none' left='Appliances' Right="See all >" />
      <ProductSection data={imageNine} flash='d-none' display='d-none' time = 'd-none' left='Appliances' Right="See all >" />
      <BannerCarousel show1='d-none' show2='d-none'  show4='d-none'/>
      <Card data={cardData5} title ='Computing Deals'/>
      <Card data={cardData6} title ='Health And Beauty'/>
      <Essay />
      </div>
    </div>
  );
}


export default Home