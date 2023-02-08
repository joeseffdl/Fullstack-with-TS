// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/client"
import { PostProps } from "../../utils/types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: PostProps = JSON.parse(req.body)
    if (req.method === "POST") {
      if (!post.title.length)
        return res.status(400).json({ message: "Title is required" })
      try {
        // Get prisma to create the post
        const data = await prisma.post.create({
          data: {
            title: post.title,
            content: post.content,
          },
        })
        return res.status(200).json(data)
      } catch (err) {
        return res.status(500).json({ message: "Error creating a new post" })
      }
    }
  } catch (err) {
    console.log(err)
  }
}
