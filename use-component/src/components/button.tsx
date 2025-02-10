import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
    <button
      className={`px-4 py-2 text-white font-bold rounded-lg transition-all
        ${
          variant === "primary"
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-500 hover:bg-gray-600"
        }
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
