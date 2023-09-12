"use client";
import { ActionButton } from "@/components/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export const SignInForm = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  console.log(location);
  const onGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
        queryParams: {
          prompt: "consent",
        },
      },
    });
    router.refresh();
  };
  return (
    <ActionButton onClick={onGoogleSignIn}>Sign In With Google</ActionButton>
  );
};
