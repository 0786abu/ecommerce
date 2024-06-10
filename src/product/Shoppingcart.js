import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, remove, removeall, selectcart } from './productSlice';
import { Link } from 'react-router-dom';
import Checkout from "../components/Checkout"

const Shoopingcart = () => {
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const cart = useSelector(selectcart);
  console.log(cart);
  const dispatch = useDispatch();

  const increment = (x) => {
    dispatch(addtocart(x));
  };
  const decrement = (x) => {
    dispatch(remove(x));
  };
  const dele = (x) => {
    dispatch(removeall(x));
  };

  const totalp = ()=>{
    let tprice = 0;
    // eslint-disable-next-line array-callback-return
    cart.map((a) => {
      tprice +=a.price*a.qty
    })
    setPrice(tprice)
  }
  const totalq = ()=>{
    let tquantity = 0;
    // eslint-disable-next-line array-callback-return
    cart.map((a) => {
      tquantity +=a.qty
    })
    setQuantity(tquantity)
  }
  useEffect(()=>{
    totalp()
    totalq()
  })



  return (
    <div className=' -z-10'>
                                           <section className="py-24 relative -z-20">
  <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
    <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
    </h2>
    <div className="hidden lg:grid grid-cols-2 py-6">
      <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
      <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
        <span className="w-full max-w-[200px] text-center">Category</span>
        <span className="w-full max-w-[260px] text-center">Quantity</span>
        <span className="w-full max-w-[200px] text-center">Total</span>
      </p>
    </div>
  
    
    {cart.map((x)=>{
      return(
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6" key={x}>
      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
        <div className="img-box"><img src={x.image} alt="perfume bottle image" className="xl:w-[140px]" /></div>
        <div className="pro-data w-full max-w-sm ">
          <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{x.title}
          </h5>
          <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
            {x.brand}</p>
          <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">RS. {x.price}</h6>
        </div>
      </div>
      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
        <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
          {x.category}</h6>
        <div className="flex items-center w-full mx-auto justify-center">
          <button onClick={()=>decrement(x)} className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
              <path d="M16.5 11H5.5" stroke strokeWidth="1.6" strokeLinecap="round" />
              <path d="M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <p className=' m-4'>{x.qty}</p>
          <button onClick={()=>increment(x)} className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
              <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeWidth="1.6" strokeLinecap="round" />
              <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
         RS. {x.price*x.qty}</h6>
         <div className="del" onClick={()=>dele(x)}>Delete</div>
      </div>
    </div>
      )
    })}
    <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
      <div className="flex items-center justify-between w-full mb-6">
        <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
        <h6 className="font-semibold text-xl leading-8 text-gray-900">RS. {price}</h6>
      </div>
      <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
        <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
        <h6 className="font-semibold text-xl leading-8 text-gray-900">Free</h6>
      </div>
      <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
        <p className="font-normal text-xl leading-8 text-gray-400">Toal Quantity</p>
        <h6 className="font-semibold text-xl leading-8 text-gray-900">{quantity}</h6>
      </div>
      <div className="flex items-center justify-between w-full py-6">
        <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
        <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">RS. {price}</h6>
      </div>
    </div>
    <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
      <button className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
        <Link to='/laptop'><span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Continue Shopping</span></Link>
        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
          <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700"><Checkout price={price}/>       
      </button>
    </div>
  </div>
</section>

     
    </div>
  );
};

export default Shoopingcart;
