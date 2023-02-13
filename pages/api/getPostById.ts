// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/index"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
      const postId = req.body
      console.log(postId)
    // const data = await prisma.post.findUnique({
    //     where: {
    //         id: postId,
    //     }
    // })
    // return res.status(200).json({ message: "Post fetched", data })  
  } catch (err) {
    return res.status(500).json(err)
  }
}
