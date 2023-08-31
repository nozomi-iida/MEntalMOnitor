import { Header } from "@/components/header";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const HomePage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/sign_in");
  }

  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;
