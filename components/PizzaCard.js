import Link from 'next/link';

const PizzaCard = ({pizza}) => {
  return (
    <div>
      <section className="text-white body-font">
        <div className="container md:px-5 md:py-9 mx-auto ">
          <div className="flex flex-col flex-wrap -m-4 ">
            <div className="p-3 w-full cursor-pointer lg:w-80 md:w-full bg-white    opacity-1 rounded-md border border-1 border-r-yellow-800 h-full w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
              <div className="h-full flex flex-col items-center text-center ">
                <Link href={`/product/${pizza._id}`}>
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={pizza.img}
                  />
                </Link>
                <div className="w-full">
                  <h2 className="title-font font-bold text-lg  text-yellow-600 ">
                    {pizza.title}
                  </h2>
                  <h3 className="text-yellow-600 font-bold mb-3">
                    ${pizza.price[0]}
                  </h3>
                  <p className="mb-4 text-yellow-600 w-full h-50 truncate">
                    {pizza.description}
                  </p>
                  {/* <span className="inline-flex">
                    <a className="text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}

export default PizzaCard
