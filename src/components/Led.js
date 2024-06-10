import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { tvapi } from '../api/tv'
import { Link } from 'react-router-dom'
import { trendapi } from '../api/trend'
import VanillaTilt from 'vanilla-tilt'

const Led = () => {
    const [search, setSearch] = useState(tvapi)
    const [redmii, setRedmii] = useState([])
    const [sams, setSams] = useState([])
    const [mi, setMi] = useState([])
    const [acer, setAcer] = useState([])
    const [lg, setLg] = useState([])
    const [tcl, setTcl] = useState([])
    const [toshiba, setToshiba] = useState([])
    const [oneplus, setOneplus] = useState([])
    const [sansui, setSansui] = useState([])
    const [amaze, setAmaze] = useState([])
    
    const [trend4, setTrend4] = useState([])
    const catefilter = (cc)=>{
        const fit = tvapi.filter((t)=>{
            return t.brand === cc
        })
        setSearch(fit)
    }
    useEffect(()=>{
        const trennd = trendapi.filter((aa)=>{
            return aa.category === "tv"
        })
        setTrend4(trennd)
        const redmi = tvapi.filter((a)=>{
            return a.brand === "redmi"
        })
        setRedmii(redmi)
        const sam = tvapi.filter((a)=>{
            return a.brand === "samsung"
        })
        setSams(sam)
        setRedmii(redmi)
        const mm = tvapi.filter((a)=>{
            return a.brand === "mi"
        })
        setMi(mm)
        const ace = tvapi.filter((a)=>{
            return a.brand === "acer"
        })
        setAcer(ace)
        const ll = tvapi.filter((a)=>{
            return a.brand === "LG"
        })
        setLg(ll)
        const tc = tvapi.filter((a)=>{
            return a.brand === "TCL"
        })
        setTcl(tc)
        const tosh = tvapi.filter((a)=>{
            return a.brand === "toshiba"
        })
        setToshiba(tosh)
        const one = tvapi.filter((a)=>{
            return a.brand === "onePlus"
        })
        setOneplus(one)
        const san = tvapi.filter((a)=>{
            return a.brand === "SANSUI"
        })
        setSansui(san)
        const amz = tvapi.filter((a)=>{
            return a.brand === "Amaze"
        })
        setAmaze(amz)
},[1])

const ttvv = (e)=>{
    setSearch(tvapi.filter(a=>a.title.toLowerCase().includes(e.target.value)))
}
  return (
    <div className='laptop-wrapper'>
     <div className="laptop-content-wrapper">
     <div className="thirty-percent-sec mx-8">
        <div className="thirty-content mt-8">
            <div className="input">
            <input type="text" placeholder='Search Product' onChange={ttvv}/>
            <button className='fa-brand'><i class="fa-brands fa-searchengin flex justify-center items-center"></i></button>
            </div>
            <div className="category my-16">
                <h2 className=' text-3xl '>Category</h2>
                <div className="access my-6 flex justify-between items-center">
                <p className=' text-lg cursor-pointer' onClick={()=>setSearch(tvapi)}>All</p>
                <p>({search.length})</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <p className=' text-lg cursor-pointer' onClick={()=>catefilter('redmi')}>Redmi</p>
                <p>({redmii.length})</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <p className=' text-lg cursor-pointer' onClick={()=>catefilter('samsung')}>Samsung</p>
                <p>({sams.length})</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <p className=' text-lg cursor-pointer' onClick={()=>catefilter('mi')}>MI</p>
                <p>({mi.length})</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <p className=' text-lg cursor-pointer' onClick={()=>catefilter('acer')}>Acer</p>
                <p>({acer.length})</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <p className=' text-lg cursor-pointer' onClick={()=>catefilter('LG')}>LG</p>
                <p>({lg.length})</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <p className=' text-lg cursor-pointer' onClick={()=>catefilter('TCL')}>TCL</p>
                <p>({tcl.length})</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <p className=' text-lg cursor-pointer' onClick={()=>catefilter('toshiba')}>Toshiba</p>
                <p>({toshiba.length})</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <p className=' text-lg cursor-pointer' onClick={()=>catefilter('oneplus')}>OnePlus</p>
                <p>({oneplus.length})</p>
                </div>
                <div className="access my-6 flex justify-between items-center">
                <p className=' text-lg cursor-pointer' onClick={()=>catefilter('SANSUI')}>SANSUI</p>
                <p>({sansui.length})</p>
                </div>
                
            </div>
            <div className="trends">
                {trend4.map((t)=>{
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
            <h2 className="text-center text-4xl">Top Level Led's</h2>
        </div>
        <div className="sortt lg:hidden  flex justify-center my-10 max-sm:flex-col max-sm:justify-center gap-2">
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>setSearch(tvapi)}>All</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>catefilter('redmi')}>Redmi</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>catefilter('samsung')}>Samsung</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>catefilter('mi')}>MI</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>catefilter('acer')}>Acer</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>catefilter('LG')}>LG</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>catefilter('TCL')}>TCL</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>catefilter('toshiba')}>Toshiba</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>catefilter('SANSUI')}>SANSUI</p>
        </div>
        <div className="products flex flex-wrap gap-4">
            {search.map((l)=>{
                return(
                    <div className="product w-[300px] p-2 m-auto overflow-hidden" key={l}>
                   <Link to={`/tv/${l.id}`}>
                   <img src={l.image} className=' m-auto hover:scale-110 duration-300' style={{height:"200px"}} alt="" />
                    <div className="cont-prod w-80 m-auto my-4">
                        <p className=' font-bold w-80'>{l.title}</p>
                        <p className=' my-2'>{l.description.slice(0,120)}...</p>
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

export default Led
