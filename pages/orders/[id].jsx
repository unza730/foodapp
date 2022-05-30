import axios from 'axios';
import React from 'react'
import styles from "../../styles/Order.module.css";

const Order = ({ orderData }) => {
  // const status = order.status
  const status = orderData.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  console.log(orderData);
  return (
    <div>
      <section className="text-white body-font ">
        <div className="container md:flex flex-wrap  justify-between  px-5 py-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2  mt-4 md:mt-0 md:w-full px-8 py-1 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                Order ID
              </h2>
              <p className="leading-relaxed text-base mb-4 text-white">
                {orderData._id}
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8  mt-4 md:mt-0 py-1 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                Customer
              </h2>
              <p className="leading-relaxed text-base mb-4">
                {orderData.customer}
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 mt-4 mt:mt-0 py-1 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                Address
              </h2>
              <p className="leading-relaxed text-base mb-4">
                {orderData.address}
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 mt-4 md:mt-0 py-1 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                Total
              </h2>
              <p className="leading-relaxed text-base mb-4">
                ${orderData.total}
              </p>
            </div>
          </div>
          <div  className="p-4 my-5 md:my-0 w:full lg:w-1/4 md:w-1/2 h-2/6 bg-white text-black">
            <div  className="h-full flex flex-col items-center text-center">
              <div  className="w-full relative">
                <h2  className="title-font font-medium text-3xl text-black">
                  Cart Total
                </h2>
                <div className="flex flex-col justify-center items-center space-y-2  my-3 text-lg">
                  <div className="flex gap-3 ">
                    <span>Subtotal:</span>
                    <span>${orderData.total}</span>
                  </div>
                  {/* <div className="flex gap-3">
                    <span>Discount:</span>
                    <span>$0.00</span>
                  </div> */}
                  <div className="flex gap-3">
                    <span>Total:</span>
                    <span>${orderData.total}</span>
                  </div>

                  <div>
                    <button className="text-white bg-[#333D79FF] border-0 py-2 px-8 focus:outline-none hover:bg-[#333D79FF] rounded mb-2">
                      Paid
                    </button>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>

      <section  className="text-white text-2xl body-font flex ">
        <div  className="container px-5 py-24  mx-auto">
          <div  className="-m-4"></div>
        </div>
      </section>
    </div>
  );
}

 {/* export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: {
      order: res.data,
    },
  };
}; */}
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/orders/${params.id}`
  );
  return {
    props: {
      orderData: res.data,
    },
  };
};


export default Order
