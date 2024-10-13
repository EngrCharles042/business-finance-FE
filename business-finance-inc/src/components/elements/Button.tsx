import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="self-stretch px-3 py-4 my-20 w-full text-lg font-semibold leading-6 text-white whitespace-nowrap rounded-xl bg-zinc-800 min-h-[66px] max-md:mt-10 max-md:max-w-full">
      {text}
    </button>
  );
};

export default Button;