import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
const Product = ({ pizza }) => {
   const [price, setPrice] = useState(pizza.price[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
 const dispatch = useDispatch()
  const [size, setSize] = useState(0);
  const changePrice = (number) => {
    setPrice(price + number);
   };
  const handleSize = (sizeIndex) => {
    const difference = pizza.price[sizeIndex] - pizza.price[size];
    setSize(sizeIndex);
    changePrice(difference);
    }
  const handleChange = (e, option) => {
    
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev)=>[...prev, option]);
    }
    else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
    console.log(checked);
  }
  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));

  }
  console.log(extras)
  return (
    <div>
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-3/6 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={pizza.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">Title</h2> */}
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                Title
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                 
                  <h1 className="text-white text-2xl">${price}</h1>
                </span>
              </div>
              <p className="leading-relaxed">{pizza.description}</p>
              <h3 className="text-xl">Choose the size</h3>
              <div className="flex gap-5 mt-4 ">
                <div
                  className=" relative rounded-full"
                  onClick={() => handleSize(0)}
                >
                  <img
                    src="/img/size.png"
                    alt=""
                    className="bg-white w-10 rounded-full"
                  />
                  <span className="absolute -top-4 -right-4 text-black bg-white px-1 rounded-sm text-md font-semibold">
                    Small
                  </span>
                </div>
                <div
                  className=" relative rounded-full"
                  onClick={() => handleSize(1)}
                >
                  <img
                    src="/img/size.png"
                    alt=""
                    className="bg-white w-12 rounded-full"
                  />
                  <span className="absolute -top-4 -right-8 text-black bg-white px-1 rounded-sm text-md font-semibold">
                    Medium
                  </span>
                </div>
                <div
                  className=" relative rounded-full"
                  onClick={() => handleSize(2)}
                >
                  <img
                    src="/img/size.png"
                    alt=""
                    className="bg-white w-14 rounded-full"
                  />
                  <span className="absolute -top-4 -right-4 text-black bg-white px-1 rounded-sm text-md font-semibold">
                    Large
                  </span>
                </div>
             
              </div>
            
              <div className="">
                <h2 className="text-2xl">Choose Additional ingredients</h2>
                <div className="flex ">
                  {pizza.extraOptions.map((option) => (
                    <div
                      className=" items-center space-x-2 mt-7 w-full "
                      key={option._id}
                    >
                      <input
                        type="checkbox"
                        name={option.text}
                        id={option.text}
                        className=""
                        onChange={(e) => handleChange(e, option)}
                      />
                      <span>{option.text}</span>
                    </div>
                  ))}
                </div>
                
              </div>
              <div className="flex justify-between w-3/6 mt-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                  <input type="number" name="" id="" className="w-12" onChange={(e)=>setQuantity(e.target.value) } />
                </span>
                <button className=" text-white bg-indigo-500 border-0 p-1 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleClick}>
                  Add to Cart
                </button>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export const getServerSideProps = async ({params}) => {
  const res = await axios.get(
    `https://food-9vy10as57-hirashahzad913-gmailcom.vercel.app/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product
// http://localhost:3000