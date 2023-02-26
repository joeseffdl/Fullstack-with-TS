import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "@/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const session = await getServerSession(req, res, authOptions)
        

        const prismaUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email
            },
        })
        try {
            const { comment, postId } = req.body.data
            const result = await prisma.comment.create({
                data: {
                    content: comment,
                    userId: prismaUser?.id,
                    postId,
                }
            })
            res.status(200).json(result)
        } catch (err) {
            res.status(403).json({ err: "Error while posting comment"})
        }
    }
}