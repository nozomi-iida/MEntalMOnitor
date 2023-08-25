"use client";
import { ActionButton } from "@/components/button";
import { supabaseCli } from "@/lib/supabase";

export const SignInForm = () => {
  const onGoogleSignIn = async() => {
    await supabaseCli.auth.signInWithOAuth({
      provider: "google"
    })
  };
  return (
    <ActionButton onClick={onGoogleSignIn}>Sign In With Google</ActionButton>
  );
};
