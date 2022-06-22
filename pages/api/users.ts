// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "@/types/index";

type Data = User[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = [
    {
      id: 1,
      name: "Juliane",
    },
    {
      id: 2,
      name: "Admin",
    },
  ];

  res.status(200).json(users);
}
