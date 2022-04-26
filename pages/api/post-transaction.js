import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const prisma = new PrismaClient();
    const data = req.body;

    try {
      await prisma.transaction.create({
        data,
      });

      res.status(200).json({
        status: "200",
        message: "Ok",
      });
    } catch (e) {
      if (e.code === "P2002") {
        res.status(400).json({
          message: "A transaction with this ID already exists",
        });
      }
    }
  } else {
    res.status(405).json({
      error: "Method not allowed",
    });
  }
}
