import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { airpordapi } from '../api/airpord'
import { useDispatch } from 'react-redux'
import { addtocart } from '../product/productSlice'
import Footer from './Footer'

const Airpordsdetail = () => {
    const {id} = useParams()
    const [related, setRelated] = useState([])
    useEffect(()=>{
     const rela = airpordapi.filter((re)=>{
       return re.brand === airdet.brand
     })
     setRelated(rela)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[airpordapi])
    const dispatch = useDispatch()
  const airdet = airpordapi.find((item)=>item.id == id)
  const [mainimage, setMainimage] = useState(airdet.thumbnail[0])
  const airpordd = (airdet)=>{
    dispatch(addtocart(airdet))
  }
  return (
    <div>
       <div className="laptop_detail_wrapper flex justify-around items-center gap-6 py-28 max-lg:flex-col">
      <div className="image-detail flex justify-center items-center gap-4 p-4">
      <div className="2img">
        {airdet.thumbnail.map((x)=>{
          return <img src={x} onClick={()=>setMainimage(x)} className=' w-[100px] border-2 border-gray-200 p-2 h-[100px]' alt='' />
        })}
      </div>
      <div className="1img">
        <img src={mainimage} className=' w-[400px] border-2 border-gray-200 p-2 h-[400px] max-sm:w-[200px] max-sm:h-[200px]' alt="" />
      </div>
      </div>
      <div className="laptop-content-detail w-1/3 max-xl:w-1/2 max-lg:w-3/4">
      <p className=' my-4 text-6xl'>{airdet.category}</p>
      <div className="rating flex justify-start my-4 items-center">
      <div className="feat-icons my-2">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  </div>
                  <p>(24 Customer reviews)</p>
      </div>
      
      <div className="price flex justify-start items-center my-4">
     <span className=' text-green-600'>Big Discount <span className=' text-red-600'>{airdet.discountpercent}%</span> : </span>
     <p className=' line-through'>RS. {airdet.price}</p>
   </div>
      <div className="price flex justify-start items-center my-4">
      
        <span className=' text-green-600'>The Best Today Deal : </span>
        <p>RS. {Math.round(airdet.price*(1-airdet.discountpercent/100))}</p>
      </div>
      <p className=' text-xl font-bold'>{airdet.title}</p>
      <p className=' my-4'>{airdet.description}</p>
     
        <div className="des flex my-8 border-b-2 border-black max-sm:hidden  gap-10">
        <div className="de w-40">
        <i className="fa-solid fa-percent text-2xl max-sm:text-lg text-gray-400"></i>
        <p className=' text-base my-2 '>Big Discounts</p>
        </div>
        <div className="de w-40">
        <i className="fa-solid fa-truck text-2xl max-sm:text-lg text-gray-400"></i>
        <p className=' text-base my-2 '>Free Shipping</p>
        </div>
        <div className="de w-40">
        <i className="fa-regular fa-credit-card text-2xl max-sm:text-lg text-gray-400"></i>
        <p className=' text-base my-2 '>Secure Payment</p>
        </div>
        <div className="de w-40">
        <i className="fa-solid fa-map-location-dot text-2xl max-sm:text-lg text-gray-400"></i>
        <p className=' text-base my-2 '>Order Tracking</p>
        </div>
        </div>
      
      <p className=' my-4 text-xl'><span  className=' font-bold'>Brand :</span>{airdet.brand}</p>
      <p className=' my-4 text-xl'><span className=' font-bold'>Client_Says :</span> {airdet.happy}</p>
      <p className=' my-4 text-xl'><span className=' font-bold'>Warranty :</span>{airdet.warranty}</p>
      <p className=' my-4 text-xl'><span className=' font-bold'>QTY :</span>{airdet.qty}</p>
      <button className=' py-2 px-4 bg-blue-600 text-white hover:bg-blue-800 duration-200' onClick={()=>airpordd(airdet)}>Add To Cart</button>
      </div>
     </div>
     <h2 className="text-center my-10 font-bold text-5xl">Suggested Products</h2>
     <div className="products flex flex-wrap gap-4 m-20 max-md:m-6">
            {related.map((l)=>{
                return(
                    <div className="product w-[300px] overflow-hidden p-2 m-auto" key={l}>
                    <Link to={`/airpord/${l.id}`}>
                    <img src={l.image} className=' m-auto' style={{height:"200px"}} alt="" />
                    <div className="cont-prod w-80 max-sm:w-60 m-auto my-4">
                        <p className=' font-bold'>{l.title}</p>
                        <p className=' my-2 hover:underline  hover:text-blue-400 cursor-pointer '>{l.description.slice(0,120)}...</p>
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
        <Footer/>
    </div>
  )
}

export default Airpordsdetail
