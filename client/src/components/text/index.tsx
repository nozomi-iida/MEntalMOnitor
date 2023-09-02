import { FC, ReactNode } from "react";
type Text = JSX.IntrinsicElements["p"] & {
  children: ReactNode;
  bold?: boolean;
  color?: "default" | "danger";
};

export const DefaultText: FC<Text> = ({
  children,
  bold,
  color = "default",
  className,
  ...props
}) => {
  const textColor = (() => {
    switch (color) {
      case "danger":
        return "danger";
      default:
        return "black";
    }
  })();

  return (
    <p
      className={`${
        bold ? "font-semibold" : "font-normal"
      } text-${textColor} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};
