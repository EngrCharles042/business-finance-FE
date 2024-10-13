import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordFieldProps {
  label: string;
  value: string;
  type: string;
  placeholder?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ label, value, placeholder, name, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col mt-9 w-full max-md:max-w-full">
      <label htmlFor={name} className="flex-1 shrink gap-4 w-full text-xl tracking-tight leading-none max-md:max-w-full">
        {label}
      </label>
      <div className="flex flex-wrap gap-1.5 items-center px-5 py-4 mt-1.5 w-full text-2xl tracking-tight bg-white rounded-lg border-2 border-solid border-slate-300 min-h-[66px] max-md:max-w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="flex-1 shrink self-stretch my-auto outline-none basis-0 max-md:max-w-full"
        />
        <button
          type="button"
          onClick={handleTogglePasswordVisibility}
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        >
          {showPassword ? (
            <FaEyeSlash className='text-black' size={24} />
          ) : (
            <FaEye className='text-black' size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
