// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../prisma/index"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        const postId = parseInt(req.query.id,10)
        if (req.method === "DELETE") {
            const data = await prisma.post.delete({
                where: { id: postId },
            })
            res.json(data)
            return res.status(200).json({ message: "Post deleted", data })
        } else {
            return res.status(500).json({ message: "Couldn't delete post" })
        }
    } catch (err) {
        console.log(err)
    }
}
