"use server";
import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { Database } from "@/lib/schema.gen";
import { pagesPath } from "@/lib/pathpida/$path";

type AddCondition = {
  point: number;
  comment: string;
};
export const addCondition = async ({ point, comment }: AddCondition) => {
  const supabase = createServerActionClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User not found");
  }
  await supabase.from("conditions").insert({
    point,
    comment,
    user_id: user.id,
  });

  revalidatePath(pagesPath.home.$url().pathname);
};
