// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).json({ error: "Unauthorized" });

    const { title, content } = req.body;

    const prismaUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    try {
      const result = await prisma.post.create({
        data: {
          title,
          content,
          userId: prismaUser?.id,
        },
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: "Server errored while creating a post" });
    }
  }
}
