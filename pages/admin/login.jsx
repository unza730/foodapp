import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react'
//  const baseUrl = process.env.BASE_URL;
const baseUrl = process.env.BASE_URL;

const Login = () => {

    const [username, setUsername] = useState(null)
     const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
 
    const router = useRouter();
     const handleClick = async () => {
       try {
         await axios.post('/api/login', {
           username,
           password,
         });
         router.push("/admin");
       } catch (err) {
           setError(true);
         console.log(err);
       }
     };
  return (
    <div className="flex justify-center items-center my-24">
      <section className="text-yellow-600 body-font">
        <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white">
          <h2 className="text-yellow-600 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-yellow-500"
            >
              Full Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-yellow-500">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="text-white bg-yellow-700 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            onClick={handleClick}
          >
            Login
          </button>
          {error && (
            <p className="text-xs text-gray-500 mt-3">Wrong Credentails</p>
          )}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Login
