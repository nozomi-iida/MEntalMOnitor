import { Header } from "@/components/header";
import { AuthLayout } from "@/components/layout/authLayout";
import { SignOutButton } from "./signOutButton";
import { PageLayout } from "@/components/pageLayout";

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
