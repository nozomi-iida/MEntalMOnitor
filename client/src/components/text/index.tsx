import { FC, ReactNode } from "react";
type Text = JSX.IntrinsicElements["p"] & {
  children: ReactNode;
  bold?: boolean;
  color?: "default" | "danger" | "subInfo";
};

export const DefaultText: FC<Text> = ({
  children,
  bold,
  color = "default",
  className,
  ...props
}) => {
  const colorMap = {
    subInfo: "subInfo",
    danger: "danger",
    default: "black",
  };

  return (
    <p
      className={`${bold ? "font-semibold" : "font-normal"} text-${
        colorMap[color]
      } ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export const SectionTitle: FC<Text> = ({ children, className, ...props }) => {
  return (
    <DefaultText bold className={`text-2xl ${className}`} {...props}>
      {children}
    </DefaultText>
  );
};

export const SubInfo: FC<Text> = ({
  children,
  className,
  color = "subInfo",
  ...props
}) => {
  return (
    <DefaultText
      bold
      className={`text-xs ${className}`}
      color={color}
      {...props}
    >
      {children}
    </DefaultText>
  );
};
