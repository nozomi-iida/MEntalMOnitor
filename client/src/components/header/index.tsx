import { Logo } from "../logo";

export const Header = () => {
  return (
    <header className="p-2 border-b border-border sticky top-0 bg-white z-10">
      <Logo />
    </header>
  );
};
