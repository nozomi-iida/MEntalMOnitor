import { FC, ReactNode } from "react";
type Text = {
  children: ReactNode;
  bold?: boolean;
};

export const DefaultText: FC<Text> = ({ children, bold }) => {
  return (
    <p className={`${bold ? "font-semibold" : "font-normal"}`}>{children}</p>
  );
};
