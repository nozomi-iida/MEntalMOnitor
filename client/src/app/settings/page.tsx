import { AuthLayout } from "@/components/layout/authLayout";
import { SignOutButton } from "./signOutButton";
import { PageLayout } from "@/components/pageLayout";

export const dynamic = "force-dynamic";

const SettingsPage = async () => {
  return (
    <AuthLayout>
      <PageLayout>
        <PageLayout.Header />
        <PageLayout.Content>
          <SignOutButton />
        </PageLayout.Content>
        <PageLayout.Footer />
      </PageLayout>
    </AuthLayout>
  );
};

export default SettingsPage;
