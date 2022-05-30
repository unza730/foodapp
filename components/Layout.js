import React from 'react'
import Footer from './Footer'
import Navbarr from './Navbar'
import PizzaList from './PizzaCard'
import Featured from "./Featured";
export default function Layout({ children }) {
  return (
    <>
    
      <Navbarr />
      <main>{children}</main>
     <Footer />
    </>
  );
}
