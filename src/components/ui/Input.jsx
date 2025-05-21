import React from "react";

const Input = ({
  type = "text",
  name,
  placeholder,
  register,
  required = true,
  className = "",
  error,
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        {...(register && register(name, { required }))}
        placeholder={placeholder}
        className={`p-2 w-full border-2 border-gray-300 rounded text-base ${
          error ? "border-red-500" : ""
        } ${className}`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;
