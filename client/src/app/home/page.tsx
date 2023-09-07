import { AuthLayout } from "@/components/layout/authLayout";
import { PageLayout } from "@/components/pageLayout";
import { AddConditionForm } from "./addConditionForm";
import { ConditionChrt } from "./conditionChart";

const HomePage = async () => {
  return (
    <AuthLayout>
      <PageLayout>
        <PageLayout.Header />
        <PageLayout.Content>
          <ConditionChrt />
        </PageLayout.Content>
        <AddConditionForm />
        <PageLayout.Footer />
      </PageLayout>
    </AuthLayout>
  );
};

export default HomePage;
