//Create API routes to interact with supabase

import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

export interface ProcessEnv {
  [key: string]: string | undefined;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase.from("banks").select("*");
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }
  res.status(200).json(data);
}
