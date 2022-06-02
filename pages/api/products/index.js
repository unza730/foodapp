import Product from "../../../models/Product";
import dbConnect from "../../../util/mongo";

import NextCors from "nextjs-cors";
import Cors from "cors";

// Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  
   const cors = Cors({
     methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
   });

export default async function handler(req, res) {
    //  await NextCors(req, res, {
    //    // Options
    //    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    //    origin: "*",
    //    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    //  });

    //  // Rest of the API logic
    //  res.json({ message: "Hello NextJs Cors!" });
  
    const { method, cookies } = req;
    const token = cookies.token;
  await dbConnect();
    
    if (method === "GET") {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "POST") {
        if (!token || token !== process.env.token)
        {
            return res.status(401).json("Not Authenticated")
            }
        try {
            const product = await Product.create(req.body);
             res.status(200).json(product);
            
        } catch (err) {
            res.status(405).json(err);
            
        }
    }
}
