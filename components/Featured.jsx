import { useState } from "react";


import Image from "next/image";
import { Carousel } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { AiOutlineRight } from "react-icons/ai";
export default function Featured() {
  const [index, setIndex] = useState(0);
    const images = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsBQby8HKCpiZwpNlRCwc117pEbzv880VMQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oZz3o91ziq0yDiK9svbKWVw6t3dGf9LLSA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJyS303L0pQreSzriceXI_7A6qnr3-EP32A&usqp=CAU",
  ];
  // const handleArrow = (direction) => {
  //   if (direction === "l") {
  //     setIndex(index !== 0 ? index - 1 : 2);
  //   }
  //   if (direction === "r") {
  //     setIndex(index !== 2 ? index + 1 : 0);
  //   }
  // };
  
  
  return (
    <div className="w-full">
      <Carousel>
        <Carousel.Item>
          <img
            className="w-full h-[90vh]  bg-center object-contain bg-no-repeat"
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=700"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-full h-[90vh]  bg-center object-contain bg-no-repeat"
            src="https://images.unsplash.com/photo-1581873372796-635b67ca2008?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500
   "
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-full h-[90vh]  bg-center object-contain bg-no-repeat"
            src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
