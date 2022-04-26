import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const prisma = new PrismaClient();

    try {
      const transactions = await prisma.transaction.findMany();

      res.status(200).json(transactions);
    } catch (e) {
      res.status(400).json({
        message: "could not fetch transactions",
      });
    } finally {
      prisma.$disconnect();
    }
  } else {
    res.status(405).json({
      error: "Method not allowed",
    });
  }
}
