// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/index'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      // Get prisma to fetch the posts
      const posts = await prisma.post.findMany()
      return res.status(200).json(posts)
    } catch (err) {
      return res.status(500).json(err)
    }
}
