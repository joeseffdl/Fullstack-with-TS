// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../prisma/index"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const session = await getServerSession(req, res, authOptions )
    try {
      const { postId } = req.body
        const result = await prisma.post.delete({
            where: {
                id: postId
            }
        })
        res.status(200).json(result)
    } catch (e) {
      res.status(401).json({ e: "Error while deleting a post" })
    }
  }
}
