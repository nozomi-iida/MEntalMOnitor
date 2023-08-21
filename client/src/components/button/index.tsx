import { FC, ReactNode } from "react";

type Button = {
  children: ReactNode;
  color?: "primary" | "white";
};

export const ActionButton: FC<Button> = ({ children, color = "white" }) => {
  const borderColor = (() => {
    switch (color) {
      case "primary":
        return "primary";
      case "white":
        return "border";
    }
  })();

  return (
    <button className={`px-4 py-2 rounded-md bg-${color} border border-${borderColor}`}>
      {children}
    </button>
  );
};
