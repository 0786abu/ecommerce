import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { airpordapi } from '../api/airpord'
import { Link } from 'react-router-dom'
import { trendapi } from '../api/trend'

const Airpord = () => {
    const [airp, setAirp] = useState(airpordapi)
    const [trend3, setTrend3] = useState([])
   useEffect(()=>{
    const trendd = trendapi.filter((tttt)=>{
        return tttt.category === "airpords"
    })
    setTrend3(trendd)
   },[])
    const aircategory = (cate)=>{
        const airpord = airpordapi.filter((item)=>{
            return item.brand === cate
        })
        setAirp(airpord)
    }
    const airpp = (e)=>{
        setAirp(airpordapi.filter(a=>a.title.toLowerCase().includes(e.target.value)))
    }
  return (
    <div className='laptop-wrapper'>
    <div className="inpt">
    <div className="inputt">
        <input type="text" placeholder='Search_Item' onChange={airpp}/>
            <button className='fa-brand2'><i class="fa-brands fa-searchengin flex justify-center items-center"></i></button>        
    </div>
    </div>
     <div className="laptop-content-wrapper">
     <div className="thirty-percent-sec mx-8">
        <div className="thirty-content mt-8">
            <div className="input">
            <input type="text" placeholder='Search Product' onChange={airpp}/>
            <button className='fa-brand'><i class="fa-brands fa-searchengin flex justify-center items-center"></i></button>
            </div>
            <div className="category my-16">
                <h2 className=' text-3xl '>Category</h2>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>setAirp(airpordapi)}><p className=' text-lg cursor-pointer'>All</p></Link>
                <p>(32)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>aircategory('apple')}><p className=' text-lg cursor-pointer'>Apple</p></Link>
                <p>(10)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>aircategory('sony')}><p className=' text-lg cursor-pointer'>Sony</p></Link>
                <p>(7)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>aircategory('song')}><p className=' text-lg cursor-pointer'>Song</p></Link>
                <p>(1)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>aircategory('urbanista')}><p className=' text-lg cursor-pointer'>Urbanista</p></Link>
                <p>(1)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>aircategory('xiaomi')}><p className=' text-lg cursor-pointer'>Xiaomi</p></Link>
                <p>(1)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>aircategory('boat')}><p className=' text-lg cursor-pointer'>Boat</p></Link>
                <p>(2)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>aircategory('Sennheiser')}><p className=' text-lg cursor-pointer'>Sennheiser</p></Link>
                <p>(1)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>aircategory('panasonic')}> <p className=' text-lg cursor-pointer'>Panasonic</p></Link>
                <p>(1)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>aircategory('Mivi')}><p className=' text-lg cursor-pointer'>Mivi</p></Link>
                <p>(1)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>aircategory('JBL')}> <p className=' text-lg cursor-pointer'>JBL</p></Link>
                <p>(5)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <Link onClick={()=>aircategory('soundcore')}><p className=' text-lg cursor-pointer'>Soundcore</p></Link>
                <p>(1)</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>aircategory('Tilted Nation')}> <p className=' text-lg cursor-pointer'>Tilted Nation</p></Link>
                <p>(1)</p>
                </div>
            </div>
            <div className="trends">
                {trend3.map((t)=>{
                    return(
                        <Link to={`/airpord/${t.id}`}>
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
            <h2 className="text-center text-4xl">Top Level Airpords</h2>
        </div>
        <div className="sortt lg:hidden  flex justify-center my-10 max-sm:flex-col max-sm:justify-center gap-2">
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>setAirp(airpordapi)}>All</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>aircategory('apple')}>Apple</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>aircategory('sony')}>Sony</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>aircategory('song')}>Song</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>aircategory('urbanista')}>Urbanista</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>aircategory('xiaomi')}>xiaomi</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>aircategory('boat')}>Boat</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>aircategory('Sennheiser')}>Sennheiser</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>aircategory('panasonic')}>Panasonic</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>aircategory('Mivi')}>Mivi</p>
        </div>
        <div className="products flex flex-wrap gap-4">
            {airp.map((a)=>{
                return(
                    <div className="product w-[300px] p-2 m-auto overflow-hidden" key={a}>
                   <Link to={`/airpord/${a.id}`}>
                   <img src={a.image} className=' m-auto hover:scale-110 duration-300' style={{height:"200px"}} alt="" />
                    <div className="cont-prod w-80 m-auto my-4">
                        <p className=' font-bold w-80'>{a.title.slice(0,30)}</p>
                        <p className=' my-2'>{a.description.slice(0,70)}...</p>
                        <p className=' my-2 text-gray-600'>{a.brand}</p>
                        <div className="price my-2">
                            <p>RS. {a.price}</p>
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

export default Airpord
