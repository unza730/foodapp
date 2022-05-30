
// import * as React from "react";
  import React,{useState} from 'react'
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MdFoodBank } from "react-icons/md";
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import  Link  from 'next/link';
export default function Navbarr() {
  const quantity = useSelector((state) => state.cart.quantity);
    return (
      <>
  
        <header className="text-[#FAEBEFFF] body-font bg-[#333D79FF] ">
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white text-decoration-none mb-2 md:mb-0">
              {/* <svg
                xmlns="data:image/png;base64,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" fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-[#333D79FF] rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg> */}
              <MdFoodBank className="text-4xl"/>
              <span className="ml-3 text-xl">Food App</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
           
            </nav>
            <Link href="/cart">
              <button className="inline-flex items-center bg-[#333D79FF] text-[#FAEBEFFF] border-0 py-1 px-3 focus:outline-none hover:bg-[#FAEBEFFF] hover:text-[#333D79FF] rounded text-base mt-1 md:mt-0">
                {/* <AiOutlineShoppingCart /> */}

                <Badge badgeContent={quantity} color="secondary">
                  <ShoppingCartIcon />
                  {quantity}
                </Badge>

                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg> */}
              </button>
            </Link>
          </div>
        </header>
      </>
    );
  }
  
