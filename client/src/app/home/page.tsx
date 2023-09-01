import { Header } from "@/components/header";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AuthLayout } from "@/components/layout/authLayout";

const HomePage = async () => {
  return (
    <AuthLayout>
      <Header />
    </AuthLayout>
  );
};

export default HomePage;
