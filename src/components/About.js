import React from 'react'
import { Link } from 'react-router-dom'
import { teamapi } from '../api/Team'
import { Clientapi } from '../api/Client'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <div className="hero-hero relative -z-20">
        <div className="content-hero text-white absolute top-44 left-1/4 text-center w-1/2">
            <h2 className=' text-4xl font-bold'>Meet Our Awesome Team</h2>
            <p className=' text-xl font-bold my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit enim vitae officia voluptate id tenetur fugit provident accusantium nesciunt.</p>
            <a href='#team'>
            <button className=' text-lg py-1 px-4 my-6 bg-blue-600 border border-white text-white'>Meet Team</button>
            </a>
        </div>
      </div>
      <div className="aboyy">
        <h2 className=' text-center my-20 font-bold text-4xl'>About Team Work</h2>
      </div>
      <div className="about flex justify-center gap-20 my-24 items-center mx-10 max-md:flex-col" id="about">
        <div className="img-section gap-02">
        <div className="img1 flex ">
            <img className=' w-2/5 m-1 h-60 max-sm:h-44'  src="https://www.legalplace.fr/wp-content/uploads/2024/01/acheter-franchise-2.jpg" alt="" />
            <img className=' w-3/5 m-1 h-60 max-sm:h-44'  src="https://avatars.mds.yandex.net/i?id=288ac0df5ec56a2d4a345ed763e6512429d1f829-8484366-images-thumbs&n=13" alt="" />
        </div>
        <div className="img2 flex ">
            <img className='w-3/5 m-1 h-60 max-sm:h-44'  src="https://revestida.s3.us-west-2.amazonaws.com/wp-content/uploads/2013/08/mujer-y-trabajo1.jpg" alt="" />
            <img className='w-2/5 m-1 h-60 max-sm:h-44'  src="https://lingua-academ.ru/Pc/pages_lang/france/fr_tab_3_2.jpg" alt="" />
        </div>
        </div>
        <div className="content-section w-96 max-sm:w-72 max-sm:px-2 max-sm:m-auto" data-aos="fade-left" data-aos-duration="1500">
        <h1 className=' text-lg font-bold my-4 max-sm:text-base'>We are JF Digital Solutions Agency</h1>
        <h2 className=' text-5xl font-bold my-4 max-sm:text-2xl'>Choose The Best Digital Company in the City</h2>
        <p className=' my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eligendi quis possimus aliquam iusto delectus assumenda, odit dolorem necessitatibus.</p>
        <Link className=' text-blue-600 my-4' to=''>View More About Us!</Link>
        </div>
      </div>
      <div className="team-wrapper my-16" id='team'>
      <div className="head text-center font-bold -z-10">
        <h2 className=' text-5xl max-md:text-2xl '>Meet Our Awesome Team</h2>
      </div>
        <div className="cards -z-10 flex flex-wrap mx-28 max-sm:mx-10 my-10">
            {teamapi.map((t)=>{
                return(
                    <div className="card m-auto my-4 relative">
                    <img src={t.image} className='  max-lg:w-60' alt="" />
                    <div className="content text-center absolute bottom-0 right-0 left-0 bg-gray-800 text-white py-4">
                        <div className="h2 text-lg font-bold">{t.name}</div>
                        <h2>{t.position}</h2>
                    </div>
                    </div>
                )
            })}
        </div>
      </div>
      <div className="Main-testimonial my-10">
     <div className="head text-center  m-auto  w-4/5">
     <h2 className=' text-xl font-bold'>Testimonials</h2>
     <h2 className=' text-5xl font-bold max-md:text-2xl '>We HAve Many Good Client's Review's</h2>
     </div>
     <div className=" flex flex-wrap max-lg:flex-col max-lg:mx-4 mx-14 max-sm:mx-2 max-sm:m-auto  gap-4    my-8" >
        {Clientapi.map((c)=>{
          return(
            
            <div className="testimonial hover:bg-blue-700 hover:text-white duration-500 hover:-translate-y-4 my-2 m-auto w-9/12  border p-4" key={c} >
        <div className="section-1 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex justify-between px-8 max-sm:px-2">
          <div className="img-sec   flex justify-center items-center gap-4">
            <div className="img-s">
              <img src={c.image} className=' w-20 rounded-full' alt="" />
            </div>
            <div className="cont">
              <h2>{c.name}</h2>
              <p>{c.position}</p>
              <div className="icons fleex gap-2 text-yellow-400">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="testi max-sm:hidden">
          <i className="fa-solid fa-quote-right"></i>
          </div>
        </div>
        <div className="section-2 my-6">
        <h4>{c.discription}</h4>
        </div>
      </div>
            
          )
        })}
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default About
