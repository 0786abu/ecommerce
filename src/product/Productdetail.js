import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { featureapi } from '../api/feature'
import { addtocart } from './productSlice'
import { useDispatch } from 'react-redux'
import Footer from '../components/Footer'

const Productdetail = () => {
    const {id} = useParams()
    const [related, setRelated] = useState([])
    useEffect(()=>{
     const rela = featureapi.filter((re)=>{
       return re.brand === feadet.brand
     })
     setRelated(rela)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[featureapi])
    const dispatch = useDispatch()
  const feadet = featureapi.find((item)=>item.id == id)
  const [mainimage, setMainimage] = useState(feadet.thumbnail[0])
  // const mobile = useSelector(selectcart)
  const addcartt = (feadet)=>{
    dispatch(addtocart(feadet))
  }
  return (
    <div>
       <div className="laptop_detail_wrapper flex justify-around items-center gap-6 py-28 max-lg:flex-col">
      <div className="image-detail flex justify-center items-center gap-4 p-4">
      <div className="2img">
        {feadet.thumbnail.map((x)=>{
          return <img src={x} onClick={()=>setMainimage(x)} className=' w-[100px] border-2 border-gray-200 p-2 h-[100px]' alt='' />
        })}
      </div>
      <div className="1img">
        <img src={mainimage} className=' w-[400px] border-2 border-gray-200 p-2 h-[400px] max-sm:w-[200px] max-sm:h-[200px]' alt="" />
      </div>
      </div>
      <div className="laptop-content-detail w-1/3 max-xl:w-1/2 max-lg:w-3/4">
      <p className=' my-4 text-6xl'>{feadet.category}</p>
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
        <span className=' text-green-600'>The Best Today Deal : </span>
        <p>RS. {feadet.price}</p>
      </div>
      <p className=' text-xl font-bold'>{feadet.title}</p>
      <p className=' my-4'>{feadet.description}</p>
     
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
      
      <p className=' my-4 text-xl'><span  className=' font-bold'>Brand :</span>{feadet.brand}</p>
      <p className=' my-4 text-xl'><span className=' font-bold'>Client_Says :</span> {feadet.happy}</p>
      <p className=' my-4 text-xl'><span className=' font-bold'>Warranty :</span>{feadet.warranty}</p>
      <p className=' my-4 text-xl'><span className=' font-bold'>QTY :</span>{feadet.qty}</p>
      <button className=' py-2 px-4 bg-blue-600 text-white hover:bg-blue-800 duration-200' onClick={()=>addcartt(feadet)}>Add To Cart</button>
      </div>
     </div>
    
        <Footer/>
    </div>
  )
}

export default Productdetail
