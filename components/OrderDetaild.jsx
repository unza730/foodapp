import React, { useState } from 'react'

const OrderDetaild = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("")
    
    const [address, setAddress] = useState("");
    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 });
      console.log(createOrder);
    }
  return (
    <div className=" w-3/4 mx-auto   top-36 left-0 absolute z-[999] flex justify-center items-center">
      <section className="text-blue-900 bg-gray-300  body-font relative ">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900-900">
              You will pay after delivery
          </h1>
          </div>
          <div>
            <div className=" -m-2">
              <div className="p-1 ">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-blue-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setCustomer(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 ">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-blue-900">
                    Phone no
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-blue-900">
                    Address
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleClick}>
                  Order
                </button>
              </div>
             
            </div>
          </div>
        </div>
      </section>

   </div>
  );
}

export default OrderDetaild;
