import * as React from "react";
import { ReactNode } from "react";

interface ButtonProps {
  children: any,
  onClick?: () => any,
  type?: "default" | "secondary" | "danger" | "dark",
  size?: "sm" | "md" | "lg" | "xl",
  rounded?: boolean,
  circular?: boolean,
  icon?: ReactNode
}

const colors = {
  default: "bg-white border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-yellow-100",
  secondary: "bg-yellow-300 border-transparent text-gray-700 hover:bg-yellow-400 focus:ring-yellow-100",
  danger: "bg-red-600 border-transparent text-white hover:bg-red-700 focus:ring-red-100",
  dark: "bg-gray-800 border-transparent text-white hover:bg-gray-700 focus:ring-gray-200"
};

const sizes = {
  sm: "",
  md: "",
  lg: "",
  xl: ""
};

const Button = (props: ButtonProps) => {
  const { type, size, rounded, icon, onClick } = props;

  const _type = type && colors[type] || colors.default;
  const _size = size && sizes[size] || sizes.md;

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        `${_type} w-full inline-flex justify-center rounded-lg border px-4 py-2 text-base 
         focus:outline-none focus:ring-4 focus:ring-offset-0 ring-opacity-50 sm:w-auto sm:text-sm
         transition duration-200`
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
