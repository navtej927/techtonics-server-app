import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  function getErrorMessage() {
    throw new Error(`Error: server`);
  }
  
  res.status(200).json({ text: `Hello ${process.env.DB_USER} ${getErrorMessage()}` });
}