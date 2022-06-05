import axios from 'axios';
import React from 'react'
import styles from "../../styles/Order.module.css";
const baseUrl = process.env.BASE_URL;

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
      <section className="text-yellow-600 body-font ">
        <div className="container md:flex flex-wrap justify-between  px-5 py-4 mx-auto">
          <div className="flex flex-wrap gap-x-2">
            <div className="xl:w-1/4 lg:w-[45%]  mt-4 md:mt-0 md:w-full px-6 py-1 border-l-2 border-gray-800    shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-yellow-900">
              <h2 className="text-lg sm:text-xl text-yellow-600 font-medium title-font mb-2">
                Order ID
              </h2>
              <p className="leading-relaxed text-base mb-4 text-white">
                {orderData._id}
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-[45%] md:w-full px-6  mt-4 md:mt-0 py-1 border-l-2 border-gray-800  shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white">
              <h2 className="text-lg sm:text-xl text-yellow-600 font-medium title-font mb-2">
                Customer
              </h2>
              <p className="leading-relaxed text-base mb-4">
                {orderData.customer}
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-[45%] md:w-full px-8 mt-4 mt:mt-0 py-1 border-l-2 border-gray-800    shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white">
              <h2 className="text-lg sm:text-xl text-yellow-600 font-medium title-font mb-2">
                Address
              </h2>
              <p className="leading-relaxed text-base mb-4">
                {orderData.address}
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-[45%] md:w-full px-8 mt-4 md:mt-0 py-1 border-l-2 border-gray-800  shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white">
              <h2 className="text-lg sm:text-xl text-yellow-600 font-medium title-font mb-2">
                Total
              </h2>
              <p className="leading-relaxed text-base mb-4">
                ${orderData.total}
              </p>
            </div>
          </div>
          <div className="p-4 my-5 md:my-0 w:full lg:w-1/4 md:w-1/2 h-2/6  border-gray-800    shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-yellow-600">
            <div className="h-full flex flex-col items-center text-center">
              <div className="w-full relative">
                <h2 className="title-font font-medium text-3xl text-yellow-600">
                  Cart Total
                </h2>
                <div className="flex flex-col justify-center items-center space-y-2  my-3 text-lg text-yellow-600">
                  <div className="flex gap-3 ">
                    <span>Subtotal:</span>
                    <span className="text-white">${orderData.total}</span>
                  </div>
                  {/* <div className="flex gap-3">
                    <span>Discount:</span>
                    <span>$0.00</span>
                  </div> */}
                  <div className="flex gap-3">
                    <span>Total:</span>
                    <span className="text-white">${orderData.total}</span>
                  </div>

                  <div>
                    <button className="text-white bg-yellow-700 border-0 py-2 px-8 focus:outline-none hover:bg-[#333D79FF] rounded mb-2">
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

      <section className="text-white text-2xl body-font flex ">
        <div className="container px-5 py-24  mx-auto">
          <div className="-m-4"></div>
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
  const res = await axios.get(`${baseUrl}/api/orders/${params.id}`);
  return {
    props: {
      orderData: res.data,
    },
  };
};


export default Order
