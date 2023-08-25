import { Database } from "@/lib/schema.gen";
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const reqUrl = new URL(req.url);
  const code = reqUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(reqUrl.origin);
};
