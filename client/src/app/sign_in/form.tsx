"use client";
import { ActionButton } from "@/components/button";

export const SignInForm = () => {
  const onGoogleSignIn = () => {
    console.log("sign in with google");
  };
  return (
    <ActionButton onClick={onGoogleSignIn}>Sign In With Google</ActionButton>
  );
};
