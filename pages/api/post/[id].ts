// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        const postId = req.query.id
        if (req.method === "DELETE") {
            const data = await prisma.delete({
                where: { id: postId },
            })
            res.json(data)
            res.status(200).json({ message: "Post deleted" })
        } else {
            res.status(500).json({ message: "Couldn't delete post'" })
        }
    } catch (err) {
        console.log(err)
    }
}
