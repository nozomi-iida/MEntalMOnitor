"use client";
import { Button } from "@/components/ui/button";
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
    // TODO: make it red
    <Button variant="ghost" onClick={onClickSignOut}>
      Sign Out
    </Button>
  );
};
