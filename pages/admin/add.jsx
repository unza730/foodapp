import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Add = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState([]);
  const [extra, setExtra] = useState("");
  const [extraOptions, setExtraOptions] = useState([]);
  const router = useRouter();
  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };
  const handleExtra = () => {
    setExtraOptions((prev) => [...prev, extra]);
  };
  const changePrice = (e, index) => {
    console.log(price);
    const currentPrice = price;
    currentPrice[index] = e.target.value;
    setPrice(currentPrice);
  };
  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dnhjzqof9/image/upload",
        data
      );
      console.log(uploadRes.data);
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        description,
        img: url,
        price,
        extra,
        extraOptions,
      };
      await axios.post("http://localhost:3000/api/products", newProduct);
      router.push("http://localhost:3000");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <section className="text-gray-600 body-font my-10">
        <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 mx-auto">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Add Product
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-blue-900"
            >
              Choose Image
            </label>
            <input
              type="file"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-blue-900"
            >
              Title
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-blue-900">
              Description
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-blue-900">
              Price
            </label>
            <div className="flex space-x-3">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Small"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => changePrice(e, 0)}
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Medium"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => changePrice(e, 1)}
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Large"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => changePrice(e, 2)}
              />
            </div>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-blue-900">
              Extra
            </label>
            <input
              type="text"
              id="email"
              name="text"
              placeholder="Item"
              className="w-full bg-white mb-2 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleExtraInput}
            />
            <input
              type="text"
              id="email"
              name="price"
              placeholder="Price"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleExtraInput}
            />
            <button
              className="text-white my-3 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleExtra}
            >
              Add
            </button>
          </div>
          <div className="flex space-x-2 mb-2 ">
            {extraOptions.map((extra) => (
              <span
                className="px-2 py-1 rounded-md border-1 border-yellow-700  text-yellow-700"
                key={extra._id}
              >
                {extra.text}
              </span>
            ))}
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleCreate}
          >
            Button
          </button>
          {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Add;
