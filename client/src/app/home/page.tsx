import { Header } from "@/components/header";
import { AuthLayout } from "@/components/layout/authLayout";

const HomePage = async () => {
  return (
    <AuthLayout>
      <Header />
    </AuthLayout>
  );
};

export default HomePage;
