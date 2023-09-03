import { FC, ReactNode } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

type PageLayoutProps = {
  children: ReactNode;
};

type PageLayoutSubComponent = {
  Header: FC;
  Content: FC<PageLayoutProps>;
  Footer: FC;
};

export const PageLayout: FC<PageLayoutProps> & PageLayoutSubComponent = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  )
}

const Content: FC<PageLayoutProps> = ({ children }) => {
  return (
    <main className="flex-auto px-2">
      {children}
    </main>
  )
}


PageLayout.Header = Header;
PageLayout.Content = Content;
PageLayout.Footer = Footer;
