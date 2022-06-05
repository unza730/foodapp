import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react'
const baseUrl = process.env.BASE_URL;

const Index = ({ order, product }) => {
  const [pizzaList, setPizzaList] = useState(product)
  const [orderList, setOrderList] = useState(order)
  const status = ["preparing", "on the way", "Delivered"];
  console.log(status);
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/products/${id}`)
      setPizzaList(pizzaList.filter((pizza => pizza._id !== id)));
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="">
      <Link href="/admin/add">
        <button className="bg-white text-yellow-600 p-3 ml-8">
          Add Product
        </button>
      </Link>
      <section className="text-white body-font py-8">
        <div className="mx-3 flex gap-3 bg-gray-200 py-24 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white ">
          <div className="lg:w-2/3 w-full  overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <h1 className="text-blue-900 mx-6 font-bold text-3xl">
                  Product
                </h1>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-blue-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Image
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-blue-900 text-sm bg-gray-100">
                    Id
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-blue-900 text-sm bg-gray-100">
                    Title
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-blue-900 text-sm bg-gray-100">
                    Price
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-blue-900 text-sm bg-gray-100">
                    Action
                  </th>
                </tr>
              </thead>
              {pizzaList.map((product) => (
                <tbody key={product._id}>
                  <tr key={product._id}>
                    <td className="px-4 py-3 text-blue-900">
                      <img src={product.img} alt="" />
                    </td>
                    <td className="px-4 py-3 text-blue-900">
                      {product._id.slice(1, 5)}...
                    </td>
                    <td className="px-4 py-3 text-blue-900">{product.title}</td>
                    <td className="px-4 py-3 text-lg text-blue-900">
                      {product.price[0]}
                    </td>
                    <td className="w-full text-center cursor-pointer py-4">
                      {/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Edit
                        </span>
                      </button> */}
                      <button
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                        onClick={() => handleDelete(product._id)}
                      >
                        <span className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
                          Delete
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <h1 className="text-blue-900 mx-6 font-bold text-3xl">
                  Orders
                </h1>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-blue-900 text-sm bg-gray-100">
                    Id
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-blue-900 text-sm bg-gray-100">
                    Customer
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-blue-900 text-sm bg-gray-100">
                    Total
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-blue-900 text-sm bg-gray-100">
                    payment
                  </th>
                </tr>
              </thead>
              {orderList.map((order) => (
                <tbody key={order._id}>
                  <tr key={order._id}>
                    <td className="px-4 py-3 text-blue-900">
                      {order._id.slice(0, 5)}
                    </td>
                    <td className="px-4 py-3 text-blue-900">
                      {order.customer}
                    </td>
                    <td className="px-4 py-3 text-blue-900">${order.total} </td>
                    <td className="px-4 py-3 text-lg text-blue-900">
                      {order.method === 0 ? (
                        <span>cash</span>
                      ) : (
                        <span>paid</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  const productRes = await axios.get(`${baseUrl}/api/products`);
  const orderRes = await axios.get(`${baseUrl}/api/orders`);
  return {
    props:{
      product: productRes.data,
      order:orderRes.data
    }
  }
  
}
export default Index
