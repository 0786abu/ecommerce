import React, { useEffect, useState } from 'react'
import "../style/laptop.css"
import Footer from './Footer'
import { laptopapi } from '../api/laptop'
import { trendapi } from '../api/trend'
import { Link } from 'react-router-dom'

const Laptop = () => {
    const [filtered, setFiltered] = useState(laptopapi)
    const [trend, setTrend] = useState([])
    console.log(trend)
    useEffect(()=>{
        const tren = trendapi.filter((tt)=>{
            return tt.category === "laptop"
        })
        setTrend(tren)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[trendapi])
    const categoryfilter = (cate)=>{
        const filt = laptopapi.filter((item)=>{
            return item.brand === cate
        })
        setFiltered(filt)
    }
    const search = (e)=>{
        setFiltered(laptopapi.filter(a=>a.title.toLowerCase().includes(e.target.value)))
    }
  return (
    <div className='laptop-wrapper pt-16 -z-20'>
    <div className="inpt">
    <div className="inputt ">
        <input type="text" placeholder='Search_Item' onChange={search}/>
            <button className='fa-brand2'><i class="fa-brands fa-searchengin flex justify-center items-center"></i></button>        
    </div>
    </div>
     <div className="laptop-content-wrapper">
     <div className="thirty-percent-sec mx-8">
        <div className="thirty-content mt-8">
            <div className="input">
            <input type="text" placeholder='Search Product' onChange={search}/>
            <button className='fa-brand'><i class="fa-brands fa-searchengin flex justify-center items-center"></i></button>
            </div>
            <div className="category my-16">
                <h2 className=' text-3xl '>Category</h2>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>setFiltered(laptopapi)}><p className=' text-lg cursor-pointer'>All</p></Link>
                <p>{filtered.length}</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>categoryfilter('apple')}><p className=' text-lg cursor-pointer'>Apple</p></Link>
                <p>(8)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>categoryfilter('hp')}><p className=' text-lg cursor-pointer'>HP</p></Link>
                <p>(8)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>categoryfilter('dell')}><p className=' text-lg cursor-pointer'>Dell</p></Link>
                <p>(8)</p>
                </div>
            </div>
            <div className="trends">
                {trend.map((t)=>{
                    return(
                       <Link to={`/laptop/${t.id}`}>
                       <div className="trend border-b-2 my-2 gap-4 flex" key={t}>
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
            <h2 className="text-center text-4xl">Top Level Laptops</h2>
        </div>
        <div className="sortt lg:hidden  flex justify-center my-10 gap-2">
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>setFiltered(laptopapi)}>All</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>categoryfilter('apple')}>Apple</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>categoryfilter('hp')}>HP</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>categoryfilter('dell')}>Dell</p>
        </div>
        <div className="products flex flex-wrap gap-4">
            {filtered.map((l)=>{
                return(
                    <div className="product w-[300px] overflow-hidden p-2 m-auto overflow-hidden" key={l}>
                    <Link to={`/laptop/${l.id}`}>
                    <img src={l.image} className=' m-auto hover:scale-110 duration-300' style={{height:"200px"}} alt="" />
                    <div className="cont-prod w-80 max-sm:w-60 m-auto my-4">
                        <p className=' font-bold'>{l.title}</p>
                        <p className=' my-2   cursor-pointer '>{l.description.slice(0,120)}...</p>
                        <p className=' my-2 text-gray-600'>{l.brand}</p>
                        <div className="price my-2">
                            <p>RS. {l.price}</p>
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
  )
}

export default Laptop
