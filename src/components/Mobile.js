import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { mobileapi } from '../api/landing'
import { Link } from 'react-router-dom'
import { trendapi } from '../api/trend'

const Mobile = () => {
    const [mobile, setMobile] = useState(mobileapi)
    const [trend2, setTrend2] = useState([])
   useEffect(()=>{
    const trend = trendapi.filter((ttt)=>{
        return ttt.category === "mobile"
    },[])
    setTrend2(trend)
   })
    const brandfilter = (mobi)=>{
        const mo = mobileapi.filter((item)=>item.brand === mobi)
        setMobile(mo)
    }
    const mobil = (e)=>{
        setMobile(mobileapi.filter(a=>a.title.toLowerCase().includes(e.target.value)))
    }
  return (
    <div>
      <div className='laptop-wrapper'>
      <div className="inpt">
    <div className="inputt">
        <input type="text" placeholder='Search_Item' onChange={mobil}/>
            <button className='fa-brand2'><i class="fa-brands fa-searchengin flex justify-center items-center"></i></button>        
    </div>
    </div>
     <div className="laptop-content-wrapper">
     <div className="thirty-percent-sec mx-8">
        <div className="thirty-content mt-8">
            <div className="input">
            <input type="text" placeholder='Search Product' onChange={mobil}/>
            <button className='fa-brand'><i class="fa-brands fa-searchengin flex justify-center items-center"></i></button>
            </div>
            <div className="category my-16">
                <h2 className=' text-3xl '>BRAND</h2>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>setMobile(mobileapi)}><p className=' text-lg cursor-pointer'>All</p></Link>
                <p>(28)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>brandfilter('apple')}><p className=' text-lg cursor-pointer'>APPLE</p></Link>
                <p>(12)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>brandfilter('samsung')}><p className=' text-lg cursor-pointer'>SAMSUNG</p></Link>
                <p>(6)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>brandfilter('xiaomi')}><p className=' text-lg cursor-pointer'>XIAOMI</p></Link>
                <p>(4)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>brandfilter('realme')}><p className=' text-lg cursor-pointer'>REAL ME</p></Link>
                <p>(2)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>brandfilter('poco')}><p className=' text-lg cursor-pointer'>POCO</p></Link>
                <p>(1)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>brandfilter('vivo')}><p className=' text-lg cursor-pointer'>VIVO</p></Link>
                <p>(1)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>brandfilter('iQOO')}><p className=' text-lg cursor-pointer'>IQOO</p></Link>
                <p>(2)</p>
                </div>
                
            </div>
            <div className="trends">
                {trend2.map((t)=>{
                    return(
                        <Link to={`/mobile/${t.id}`}>
                        <div className="trend border-b-2 gap-4 my-2 flex" key={t}>
                        <div className="img"><img src={t.image} style={{width:"100px", height:"100px", mixBlendMode:"multiply"}} alt="" /></div>
                        <div className="trend-cont">
                            <p>{t.title.slice(0,20)}...</p>
                            <div className="feat-icons my-2">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  </div>
                  <p>RS. {t.price}</p>
                        </div>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </div>
     </div>
      <div className="seventy-percent-sec">
        <div className="seventy-content-wrapper">
        <div className="heading my-8">
            <h2 className="text-center text-4xl">Top Level Mobiles</h2>
        </div>
        <div className="sortt lg:hidden  flex justify-center my-10 max-sm:flex-col max-sm:justify-center gap-2">
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>setMobile(mobileapi)}>All</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>brandfilter('apple')}>Apple</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>brandfilter('samsung')}>Sanmsung</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>brandfilter('xiaomi')}>XIAOMI</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>brandfilter('realme')}>REAL ME</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>brandfilter('vivo')}>VIVO</p>
        </div>
        <div className="products flex flex-wrap gap-2">
            {mobile.map((z)=>{
                return(
                    <div className="product w-[250px] p-2 m-auto overflow-hidden" key={z}>
                    <Link to={`/mobile/${z.id}`}>
                    <img src={z.image} className=' m-auto hover:scale-110 duration-300' style={{height:"200px"}} alt="" />
                    <div className="cont-prod w-36 m-auto my-4">
                        <p className=' font-bold'>{z.title.slice(0,25)}...</p>
                        <p className=' my-2 text-gray-600'>{z.brand}</p>
                        <div className="price my-2">
                            <p>RS. {z.price}</p>
                        </div>
                        <div className="feat-icons my-2">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  </div>
                    </div>
                    </Link>
                    </div>
                )
            })}
        </div>
        </div>
      </div>
     </div>
     <Footer/>
    </div>
    </div>
  )
}

export default Mobile
