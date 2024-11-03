import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ label, value, placeholder, name, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // Track if the field is focused

  // State for each validation rule
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Validate password function
  const validatePassword = (password: string) => {
    setIsLengthValid(password.length >= 8);  // Check length >= 8
    setHasUppercase(/[A-Z]/.test(password));  // Check for at least 1 uppercase letter
    setHasNumber(/\d/.test(password));        // Check for at least 1 number
    setHasSpecialChar(/[\W_]/.test(password)); // Check for at least 1 special character
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(e); // Update the value in parent component
    validatePassword(value); // Validate password as the user types
  };

  const handleFocus = () => {
    setIsFocused(true); // Set focus state to true when input is focused
  };

  const handleBlur = () => {
    setIsFocused(false); // Set focus state to false when input loses focus
  };

  return (
    <div className="flex flex-col mt-9 w-full max-md:max-w-full">
      <label htmlFor={name} className="flex-1 shrink gap-4 w-full text-xl tracking-tight leading-none max-md:max-w-full">
        {label}
      </label>
      <div className="flex gap-1.5 items-center px-5 py-4 mt-1.5 w-full text-2xl tracking-tight bg-white rounded-lg border-2 border-solid border-slate-300 min-h-[66px] max-md:max-w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus} // Trigger when input is focused
          onBlur={handleBlur} // Trigger when input loses focus
          className="flex-1 shrink self-stretch my-auto outline-none basis-0 max-md:max-w-full"
        />
        <button
          type="button"
          onClick={handleTogglePasswordVisibility}
          className="relative right-5 object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        >
          {showPassword ? (
            <FaEyeSlash className='text-black' size={24} /> // Eye-slash icon
          ) : (
            <FaEye className='text-black' size={24} /> // Eye icon
          )}
        </button>
      </div>

      {/* Show validation checkboxes only when the field is focused */}
      {isFocused && (
        <div className="mt-2">
          <p className="text-lg font-semibold">Your password must contain</p>
          <div className="flex flex-col space-y-1 mt-2">
            <label className="flex items-center">
              <input type="checkbox" checked={isLengthValid} readOnly className="mr-2 text-green-500 bg-green-500" />
              atleast 8 characters
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={hasSpecialChar} readOnly className="mr-2" />
              one special character #_+@
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={hasUppercase} readOnly className="mr-2" />
              one uppercase letter-ABC
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={hasNumber} readOnly className="mr-2" />
              one number-1234
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordField;
