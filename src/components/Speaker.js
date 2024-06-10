import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { speakerapi } from '../api/speaker'
import { Link } from 'react-router-dom'
import { trendapi } from '../api/trend'

const Speaker = () => {
    const [speaker, setSpeaker] = useState(speakerapi)
    const [trend4, setTrend4] = useState([])
    useEffect(()=>{
        const trennd = trendapi.filter((aa)=>{
            return aa.category === "speakers"
        })
        setTrend4(trennd)
},[])

    const Search = (event)=>{
        setSpeaker(speakerapi.filter(a=>a.title.toLowerCase().includes(event.target.value)))
    }

    const speakfilter = (spea)=>{
        const speak = speakerapi.filter((item)=>{
            return item.brand === spea;
        })
        setSpeaker(speak)
    }
  return (
    <div className='laptop-wrapper'>
    <div className="inpt">
    <div className="inputt">
        <input type="text" placeholder='Search_Item' onChange={Search}/>
            <button className='fa-brand2'><i class="fa-brands fa-searchengin flex justify-center items-center"></i></button>        
    </div>
    </div>
    <div className="laptop-content-wrapper">
    <div className="thirty-percent-sec mx-8">
       <div className="thirty-content mt-8">
           <div className="input">
           <input type="text" placeholder='Search Product' onChange={Search}/>
           <button className='fa-brand'><i class="fa-brands fa-searchengin flex justify-center items-center"></i></button>
           </div>
           <div className="category my-16">
               <h2 className=' text-3xl '>Category</h2>
               <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>setSpeaker(speakerapi)}><p className=' text-lg cursor-pointer'>All</p></Link>
               <p>(18)</p>
               </div>
               <div className="access my-6 flex justify-between items-center">
              <Link onClick={()=>speakfilter('audionic')}> <p className=' text-lg cursor-pointer'>Audionic</p></Link>
               <p>(8)</p>
               </div>
               <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>speakfilter('sony')}><p className=' text-lg cursor-pointer'>Sony</p></Link>
               <p>(3)</p>
               </div>
               <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>speakfilter('boat')}><p className=' text-lg cursor-pointer'>Boat</p></Link>
               <p>(1)</p>
               </div>
               <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>speakfilter('mivi')}><p className=' text-lg cursor-pointer'>Mivi</p></Link>
               <p>(1)</p>
               </div>
               <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>speakfilter('JBL')}><p className=' text-lg cursor-pointer'>JBL</p></Link>
               <p>(2)</p>
               </div>
               <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>speakfilter('Marshall')}><p className=' text-lg cursor-pointer'>Marshall</p></Link>
               <p>(1)</p>
               </div>
               <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>speakfilter('Bang & Olufsen')}><p className=' text-lg cursor-pointer'>Bang & Olufsen</p></Link>
               <p>(1)</p>
               </div>
               <div className="access my-6 flex justify-between items-center">
               <Link onClick={()=>speakfilter('Denon')}><p className=' text-lg cursor-pointer'>Denon</p></Link>
               <p>(1)</p>
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
           <h2 className="text-center text-4xl">Top Level Speakers</h2>
       </div>
       <div className="sortt lg:hidden  flex justify-center my-10 max-sm:flex-col max-sm:justify-center gap-2">
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>setSpeaker(speakerapi)}>All</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>speakfilter('audionic')}>Audionic</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>speakfilter('sony')}>Sony</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>speakfilter('boat')}>Boat</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>speakfilter('mivi')}>Mivi</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>speakfilter('JBL')}>JBL</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>speakfilter('Marshall')}>Marshall</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>speakfilter('Bang & Olufsen')}>Bang & Olufsen</p>
            <p className=' underline underline-offset-2 cursor-pointer text-blue-500' onClick={()=>speakfilter('Denon')}>Denon</p>
        </div>
       <div className="products flex flex-wrap gap-4">
           {speaker.map((a)=>{
               return(
                   <div className="product w-[300px] p-2 m-auto overflow-hidden" key={a}>
                  <Link to={`/speaker/${a.id}`}>
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

export default Speaker
