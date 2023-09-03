import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AuthLayout } from "@/components/layout/authLayout";

const HomePage = async () => {
  return (
    <AuthLayout>
      <Header />
      <Footer />
    </AuthLayout>
  );
};

export default HomePage;
