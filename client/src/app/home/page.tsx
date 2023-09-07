import { AuthLayout } from "@/components/layout/authLayout";
import { PageLayout } from "@/components/pageLayout";
import { AddConditionForm } from "./addConditionForm";
import { ConditionChrt } from "./conditionChart";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/schema.gen";
import { cookies } from "next/headers";

const HomePage = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from("conditions").select();
  return (
    <AuthLayout>
      <PageLayout>
        <PageLayout.Header />
        <PageLayout.Content>
          <ConditionChrt conditions={data ?? []} />
        </PageLayout.Content>
        <AddConditionForm />
        <PageLayout.Footer />
      </PageLayout>
    </AuthLayout>
  );
};

export default HomePage;
