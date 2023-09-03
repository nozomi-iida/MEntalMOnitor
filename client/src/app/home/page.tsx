import { AuthLayout } from "@/components/layout/authLayout";
import { PageLayout } from "@/components/pageLayout";

const HomePage = async () => {
  return (
    <AuthLayout>
      <PageLayout>
        <PageLayout.Header />
        <PageLayout.Content></PageLayout.Content>
        <PageLayout.Footer />
      </PageLayout>
    </AuthLayout>
  );
};

export default HomePage;
