import Order from "../../../models/Order";
import dbConnect from "../../../util/mongo";
import Cors from 'cors';
// import NextCors from "nextjs-cors";
// const cors = Cors({
//   methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
// });
export default async function handler(req, res) {
   
  const {
    method,
    query: { id },
  } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
        res.status(200).json(order);
        console.log(order);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new:true
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(405).json(err);
    }
  }
  if (method === "DELETE") {
    // try {
    //   const order = await Order.create(req.body);
    //   res.status(200).json(order);
    // } catch (err) {
    //   res.status(405).json(err);
    // }
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
