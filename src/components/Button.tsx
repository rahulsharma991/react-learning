import React, { useEffect } from "react";

interface ButtonBlueprint {
  title: string;
  children?: string;
  colorVariant?: "primary" | "secondary" | "success" | "warning" | "danger";
  typeVariant?: "outline" | "rounded";
  onClick?: () => void;
  onMouseEnter?: () => void;
}

/**
 *
 * @param (title: string, colorVariant: string, typeVariant: string, ...rest)
 * @returns
 * rest accepts by default parameters of the native button. You have to write correct native button parameter to make it work
 *
 * colorVariant?: "primary" | "secondary" | "success" | "warning" | "danger";
 *
 * typeVariant?: "outline" | "rounded";
 */
const Button = ({
  title,
  colorVariant = "primary",
  typeVariant,
  ...rest
}: ButtonBlueprint) => {
  const classes = {
    danger: "bg-red-500 border-red-500 ",
    secondary: "bg-amber-500 border-amber-500",
    success: "bg-green-500 border-green-500",
    warning: "bg-yellow-500 border-yellow-500",
    primary: "bg-sky-500 border-sky-500",
    rounded: "rounded-full",
    outline: "bg-white text-black",
  };
  console.log(rest);
  return (
    <button
      {...rest}
      className={`px-3 py-1.5 border text-white ${
        colorVariant && classes[colorVariant]
      } ${typeVariant && classes[typeVariant]}`}
    >
      {title}
    </button>
  );
};

export default Button;
