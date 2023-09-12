import { Logo } from "@/components/logo";
import { DefaultText } from "@/components/text";
import { SignInForm } from "./form";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { pagesPath } from "@/lib/pathpida/$path";

export const dynamic = "force-dynamic";

const SignInPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    redirect(pagesPath.home.$url().pathname);
  }

  return (
    <main className="flex flex-col gap-8 p-12 items-center">
      <div className="flex flex-col gap-4 items-center">
        <Logo />
        <DefaultText bold>Sign In</DefaultText>
      </div>
      <SignInForm />
    </main>
  );
};

export default SignInPage;
