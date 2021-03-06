import Order from "../../../models/Order";
import dbConnect from "../../../util/mongo";
// import Cors from 'cors';

// const cors = Cors({
//   methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
// });
export default async function handler(req, res) {
 
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
      console.log(orders)
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  }
  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(200).json(order);
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
