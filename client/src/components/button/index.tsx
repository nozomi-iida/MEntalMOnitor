import { FC } from "react";

type Button = JSX.IntrinsicElements["button"] & {
  color?: "primary" | "white";
};

export const ActionButton: FC<Button> = ({ children, color = "white", ...props }) => {
  const borderColor = (() => {
    switch (color) {
      case "primary":
        return "primary";
      case "white":
        return "border";
    }
  })();

  return (
    <button className={`px-4 py-2 font-semibold rounded-md bg-${color} border border-${borderColor}`} {...props}>
      {children}
    </button>
  );
};
