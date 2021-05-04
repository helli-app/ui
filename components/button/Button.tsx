import * as React from "react";
import { ReactNode } from "react";

interface ButtonProps {
  children: any;
  type?: "primary" | "secondary" | "success" | "danger" | "light" | "dark",
  size?: "sm" | "md" | "lg" | "xl",
  rounded?: boolean,
  circular?: boolean,
  icon?: ReactNode
}

const colors = {
  primary: "yellow",
  secondary: "blue",
  success: "green",
  danger: "red",
  light: "white",
  dark: "black"
};

const sizes = {
  sm: "",
  md: "",
  lg: "",
  xl: ""
};

const Button = (props: ButtonProps) => {

  const { type, size, rounded, icon } = props;

  const _type = type && colors[type] || colors.primary;
  const _size = size && sizes[size] || sizes.md;

  return (
    <button
      type="button"
      className={
        `mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base
         font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
         focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
