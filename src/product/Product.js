import React from 'react';
import "../style/navbar.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { laptopapi } from '../api/laptop';
import { featureapi } from '../api/feature';
export function Product() {
  // const feature = useSelector(selectallfeatureproduct)

  // console.log(feature)

 

  const images=[
    "https://frankfurt.apollo.olxcdn.com/v1/files/2p53zys5iwa42-KZ/image;s=600x0;q=50",
    "https://itrentalsdubai.com/wp-content/uploads/2023/09/Macbook-pro.png",
    "https://maytinhanphat.vn/img/n/tim-hieu-chi-tiet-ve-thuong-hieu-laptop-dell-truoc-khi-lua-chon.jpg",
    "https://mywishboard.com/thumbs/wish/r/r/n/600x0_pkvvzpwoabgbmveg_jpg_d9b9.jpg",
    "https://avatars.mds.yandex.net/i?id=fad0a46752d678ef6a641f9d5f672dbe325d7521-12937750-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=67bd1102896936af3f6e85f2dd42c13755f114f8-9245043-images-thumbs&n=13"
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <div className="hero-wrapper">
        <div className="hero font-bold">
          <p className=' my-2 text-lg'>New In One</p>
          <p className=' text-5xl my-4 font-bold w-4/5'>The Best Collections Of laptops</p>
          <p className=' text-2xl w-4/5'>This new collection brings with it the most exciting lorem ipsum dolor sit amet.</p>
          <button className="py-2 my-2 text-black hover:bg-black hover:text-white duration-500 px-4 bg-white">Shop Now</button>
        </div>
      </div>

      <div className="sliderr">
        <Carousel responsive={responsive}
          autoPlay
          autoPlaySpeed={2000}
          
          transitionDuration={500}
          infinite={true}
        >
          {images.map((x)=>{
            return <img src={x} className=' m-auto' alt='' />
          })}
        </Carousel>
      </div>

      <div className="aboutt flex justify-around items-center max-lg:flex-col gap-10 my-28 px-4">
        <div className="about-content">
        <p className=' text-4xl font-bold max-sm:text-2xl'>Top Rated Devices</p>
        <p className=' text-2xl my-4 max-sm:text-lg'>The Most Popular Devices On This Site</p>
        <p className=' w-96 my-4 max-sm:w-80'>Explore the latest popular devices revolutionizing tech trends. From smartphones to smartwatches, these innovative gadgets offer cutting-edge features and redefine connectivity for today's digital lifestyle</p>
        <a href="#feature">  <button className="py-2  text-white  hover:text-yellow-400 duration-500 px-4 bg-black">Shop Now</button></a>

        </div>
        <div className="about-images w-96 max-sm:w-60">
          <div className="img-11 flex items-center">
          <img src="https://img.mvideo.ru/Pdb/30012982b6.jpg" className=' w-3/5 border-4 m-2 border-black h-full' alt="" />
          <img src="https://i.pinimg.com/736x/7d/1c/09/7d1c09a5774509a05d9861478efe4129.jpg" className=' w-2/5 border-4 m-2 border-black h-full' alt="" />
          </div>
          <div className="img-22 flex items-center">
          <img src="https://specs-tech.com/wp-content/uploads/2022/08/iPhone-15-Pro-Max.jpg" className=' w-2/5 border-4 m-2 border-black h-full' alt="" />
          <img src="https://object.pscloud.io/cms/cms/Photo/img_0_95_631_1.jpg" className=' w-3/5 border-4 m-2 border-black h-full' alt="" />
          </div>
        </div>
      </div>

      <div className="feature-wrapper" id='feature'>
        <p className="text-center font-bold text-5xl py-20">Featured Products</p>
        <div className="cards-feat">
          {featureapi && featureapi.map((f)=>{
            return(
              <Link to={`/${f.id}`}>
              <div className="feat-card " key={f.id}>
                <img src={f.image} className=' h-52 my-6 m-auto hover:scale-105 duration-300' alt="" />
                <div className="content-feat">
                  <p className=' font-bold text-lg '>{f.title.slice(0,36)}...</p>
                  <div className="feat-icons my-2">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  </div>
                  <div className="through flex justify-start gap-2 my-2">
                    <p className=' line-through'>RS. {f.price}</p>
                    <p>RS. {Math.round(f.price*(1-f.discountpercent/100))}</p>
                  </div>
                 
                  <Link to={`/${f.id}`} className=' py-2 px-4 bg-blue-600 text-white hover:bg-blue-400 duration-500'>See More</Link>
                </div>
              </div>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="banner-wrapper">
        <div className="content-bann">
          <p className=' text-4xl font-bold max-md:text-xl'>The Best Quality Laptops</p>
          <p className=' pp text-lg  my-4'>Discover the best quality laptops that excel in performance, reliability, and innovation. From powerful processors to stunning displays, these laptops redefine productivity and ensure a seamless computing experience.</p>
          <p className=' text-lg  my-4'>Buy Laptops At some Discount</p>
          <Link to='/laptop'><button className="py-2 my-2 text-black hover:bg-black hover:text-white duration-500 px-4 bg-white">Shop Now</button></Link>

        </div>
      </div>


      

      <div className="devilery">
        <div className="devs">
        <div className="dev">
        <i className="fa-solid fa-percent text-6xl text-gray-400"></i>
        <p className=' text-2xl my-4 '>Big Discount</p>
        <p>Unlock massive savings with unbeatable discounts! Limited time offers on top products. Shop now</p>
        </div>
        <div className="dev">
        <i className="fa-solid fa-truck text-6xl text-gray-400"></i>
        <p className=' text-2xl my-4 '>Free Shipping</p>
        <p>Unlock massive savings with unbeatable discounts! Limited time offers on top products. Shop now</p>
        </div>
        <div className="dev">
        <i className="fa-regular fa-credit-card text-6xl text-gray-400"></i>
        <p className=' text-2xl my-4 '>Secure Payment</p>
        <p>Unlock massive savings with unbeatable discounts! Limited time offers on top products. Shop now</p>
        </div>
        <div className="dev">
        <i className="fa-solid fa-map-location-dot text-6xl text-gray-400"></i>
        <p className=' text-2xl my-4 '>Order Tracking</p>
        <p>Unlock massive savings with unbeatable discounts! Limited time offers on top products. Shop now</p>
        </div>
        </div>
      </div>

     <Footer/>

     


    </div>
  );
}
