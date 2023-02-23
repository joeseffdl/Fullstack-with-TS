// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions} from "../auth/[...nextauth]"
import prisma from "../../../prisma/index"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "GET") {
        const session = await getServerSession(req, res, authOptions)
    
        try { 
            const data = await prisma.user.findUnique({
                where: {
                    email: session.user?.email,
                },
                include: {
                    Post: {
                        orderBy: {
                            createdAt: "desc",
                        },
                        include: {
                            Comment: true,
                        },
                    },
                }
            })
            res.status(200).json(data)
        } catch (e) { 
            console.error(e)
            res.status(403).json({ "Error occured while getting user data"})
        }
    }
}
