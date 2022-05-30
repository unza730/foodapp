import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from 'next/router';
import { reset } from '../redux/cartSlice';
import axios from 'axios';
import OrderDetaild from '../components/OrderDetaild';

// This values are the props in the UI

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  
  const [open, setOpen] = useState(false)
  
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(cart);
  
  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
       console.log(res.status);
       
      if (res.status === 200) {
       dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    
    }
    catch (err) {
      console.log(err);
    }
  };
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={async (data, actions) => {
            const orderId = await actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            });
            return orderId;
          }}
          onApprove={async function (data, actions) {
            const details = await actions.order.capture();
            const shipping = details.purchase_units[0].shipping;
            createOrder({
              customer: shipping.name.full_name,
              address: shipping.address.address_line_1,
              total: cart.total,
              method: 1,
            });
          }}
          // onApprove={function (data, actions) {
          //   return actions.order.capture().then(function (details) {
          //     const shipping = details.purchase_units[0].shipping;
          //     createOrder({
          //       customer: shipping.name.full_name,
          //       address: shipping.address.address_line_1,
          //     });
          //   });
          // }}
          // const details = await actions.order.capture();
          // console.log(details);
          // const shipping = details.purchase_units[0].shipping;
          // createOrder({
          //   customer: shipping.name.full_name, address: shipping.address.address_line_1,
          //   total: cart.total, method: 1,
          // });
        />
      </>
    );
  };
 // const dispatch = useDispatch();
  return (
    <div>
      <section class="text-white body-font ">
        <div class="container px-5 py-24 mx-auto  flex flex-wrap space-y-24 lg:space-y-0 ">
          <div class="lg:w-2/3 w-full mx-auto overflow-auto ">
            <table class="table-auto relative z-2 w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Product
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Name
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Extras
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>

                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Quantity
                  </th>

                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Total
                  </th>
                  <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {cart.products.map((product) => (
                  <tr key={product._id}>
                    <td class="px-4 py-3">
                      <img src={product.img} className="w-12" alt="" />
                    </td>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      {product.title}
                    </td>

                    <td class="px-4 py-3">
                      {product.extras.map((extra) => (
                        <span key={extra._id}>{extra.text}</span>
                      ))}
                    </td>
                    <td class="px-4 py-3 text-lg text-white">
                      {product.price}
                    </td>
                    <td class="px-4 py-3 text-lg text-white">
                      {product.quantity}
                    </td>
                    <td class="px-4 py-3 text-lg text-white">
                      ${product.price * product.quantity}
                    </td>

                    {/* <td class="w-10 text-center">
                      <input name="plan" type="radio" />
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div class="p-4 lg:w-1/4 md:w-1/2 h-2/6 bg-white text-black">
            <div class="h-full flex flex-col items-center text-center">
              <div class="w-full relative">
                <h2 class="title-font font-medium text-3xl text-black">
                  Cart Total
                </h2>
                <div className="flex flex-col justify-center items-center space-y-2  my-3 text-lg">
                  <div className="flex gap-3 ">
                    <span>Subtotal:</span>
                    <span>${cart.total}</span>
                  </div>
                  <div className="flex gap-3">
                    <span>Discount:</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex gap-3">
                    <span>Total:</span>
                    <span>${cart.total}</span>
                  </div>
                  {open ? (
                    <div>
                      <button
                        className="text-white bg-[#333D79FF] border-0 py-2 px-8 focus:outline-none hover:bg-[#333D79FF] rounded mb-2"
                        onClick={() => setCash(true)}
                      >
                        Cash on Delivery
                      </button>
                      <PayPalScriptProvider
                        options={{
                          "client-id":
                            "AYiNfxZKB4Si2p4y9ho7ogR89obd7AcNRkOcnWN1-sKdMJuala9mZDeMw_qKwwLXc76wMwNx7eqAJuaY",
                          components: "buttons",
                          currency: "USD",
                        }}
                      >
                        <ButtonWrapper
                          currency={currency}
                          showSpinner={false}
                        />
                      </PayPalScriptProvider>
                    </div>
                  ) : (
                    <div className="mt-15">
                      <button
                        class=" text-white bg-[#333D79FF] border-0 py-2 px-6 focus:outline-none hover:bg-[#333D79FF] rounded"
                        onClick={() => setOpen(!open)}
                      >
                        Checkout Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {cash && (
                <OrderDetaild total={cart.total} createOrder={createOrder} />
              )}
            </div>
          </div>
      
        </div>
      </section>
    </div>
  );
}

export default Cart
