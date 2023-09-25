"use client";
import { ActionButton } from "@/components/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export const SignInForm = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const onGoogleSignIn = async () => {
    // await supabase.auth.signInWithOAuth({
    //   provider: "google",
    //   options: {
    //     redirectTo: `${location.origin}/api/auth/callback/`,
    //     queryParams: {
    //       prompt: "consent",
    //     },
    //   },
    // });
    // router.refresh();
    try {
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = await response.json();
      if (!data?.url) throw new Error("No url returned");
      router.push(data.url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ActionButton onClick={onGoogleSignIn}>Sign In With Google</ActionButton>
  );
};
