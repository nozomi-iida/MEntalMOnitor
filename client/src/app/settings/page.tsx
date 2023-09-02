import { Header } from "@/components/header";
import { AuthLayout } from "@/components/layout/authLayout";
import { SignOutButton } from "./signOutButton";

const SettingsPage = async () => {
  return (
    <AuthLayout>
      <Header />
      <SignOutButton />
    </AuthLayout>
  );
};

export default SettingsPage;
