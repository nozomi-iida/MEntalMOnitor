import { ActionButton } from "@/components/button";
import { Logo } from "@/components/logo";
import { DefaultText } from "@/components/text";

const SignInPage = () => {
  return (
    <div className="flex flex-col gap-8 p-12 items-center">
      <div className="flex flex-col gap-4 items-center">
        <Logo />
        <DefaultText bold>Sign In</DefaultText>
      </div>
      <ActionButton>Sign In With Google</ActionButton>
    </div>
  );
}
export default SignInPage;
