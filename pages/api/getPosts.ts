// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      // Get prisma to fetch the posts
      const posts = await prisma.post.findMany()
      return res.status(200).json(posts)
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
