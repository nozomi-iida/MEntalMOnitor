import { FC, ReactNode } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { pagesPath } from "@/lib/pathpida/$path";

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout: FC<AuthLayoutProps> = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect(pagesPath.sign_in.$url().pathname);
  }

  return <>{children}</>;
};
