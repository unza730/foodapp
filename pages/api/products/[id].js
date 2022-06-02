import Product from "../../../models/Product";
import dbConnect from "../../../util/mongo";
import Cors from 'cors';
// import NextCors from "nextjs-cors";

// Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });

  // // Rest of the API logic
  // res.json({ message: "Hello NextJs Cors!" });
  const cors = Cors({
    methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
  });

export default async function handler(req, res) {
  
    const { method,
        query: { id },
    cookies } = req;
    const token = cookies.token;
  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
     if (!token || token !== process.env.token) {
       return res.status(401).json("Not Authenticated");
     }
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new:true
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(405).json(err);
    }
    }
  if (method === "DELETE") {
       if (!token || token !== process.env.token) {
         return res.status(401).json("Not Authenticated");
       }
      try {
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json("The Product has been deleted");
      } catch (err) {
        res.status(405).json(err);
      }
    }
}
// "title": "pizza1",
// img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=700",
// "desc" : "desc1",
//     "prices": [
//         {
//             "text": "Garlic sauce",
//             "price": 2
//     }
// ]
