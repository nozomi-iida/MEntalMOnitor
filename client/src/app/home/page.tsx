import { AuthLayout } from "@/components/layout/authLayout";
import { PageLayout } from "@/components/pageLayout";
import { AddConditionForm } from "./addConditionForm";
import { ConditionChrt } from "./conditionChart";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/schema.gen";
import { cookies } from "next/headers";
import { SectionTitle, SubInfo } from "@/components/text";
import { point2emoji } from "@/utils/helpers";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const HomePage = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from("conditions").select();
  const { data: timelineData } = await supabase.from("conditions").select();
  return (
    <AuthLayout>
      <PageLayout>
        <PageLayout.Header />
        <PageLayout.Content>
          <div className="flex flex-col gap-6">
            <ConditionChrt conditions={data ?? []} />
            <div className="flex flex-col gap-4">
              {/* TODO: scrollable timeline */}
              <SectionTitle>Timeline</SectionTitle>
              <div className="flex flex-col gap-2">
                {timelineData?.map((condition) => (
                  <div key={condition.id} className="inline-flex gap-2 items-end">
                    <div className="px-4 py-1 rounded-lg bg-white shadow-md shadow-primary inline-block">
                      <p>{point2emoji(condition.point)}</p>
                      <p>{condition.comment}</p>
                    </div>
                    <SubInfo color="subInfo" className="flex-none">{dayjs(condition.created_at).format("LT")}</SubInfo>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageLayout.Content>
        <AddConditionForm />
        <PageLayout.Footer />
      </PageLayout>
    </AuthLayout>
  );
};

export default HomePage;
