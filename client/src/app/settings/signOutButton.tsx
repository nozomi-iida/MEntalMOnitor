"use client";
import { DefaultText } from "@/components/text";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const onClickSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    // TODO: change to button
    <DefaultText bold color="danger" onClick={onClickSignOut}>
      ログアウト
    </DefaultText>
  );
};
