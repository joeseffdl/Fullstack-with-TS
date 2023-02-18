// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../prisma/index"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        const postId = (req.query.id)
        if (req.method === "DELETE") {
            const data = await prisma.post.delete({
                where: { id: postId },
            })
            res.json(data)
            return res.status(200).json({ message: "Post deleted", data })
        }
        else if (req.method === "PUT") { 
            const post = JSON.parse(req.body)
            const data = await prisma.post.update({
                where: { id: postId },
                data: {
                    title: post.title,
                    content: post.content,
                },
            })
            res.json(data)
            return res.status(200).json({ message: "Post updated", data })
        }
        else {
            return res.status(500).json({ message: `Couldn't ${req.method} post` })
        }
    } catch (err) {
        console.log(err)
    }
}
