import { ClipLoader } from "react-spinners";

type MainBttonProps = {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  props?: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

export const MainButton = ({
  isLoading,
  onClick,
  type = "button",
  children,
  className,
  disabled = false,
  ...props
}: MainBttonProps) => (
  <button
    type={type}
    className={`self-stretch px-3 py-4 mt-20 w-full text-lg font-semibold leading-6 text-black hover:text-white whitespace-nowrap border-2 border-black rounded-xl hover:bg-zinc-800 max-md:mt-10 max-md:max-w-full ${className} `}
    {...props}
    onClick={onClick}
    disabled={disabled}
  >
    {isLoading ? <ClipLoader color="#fff" size="20px" /> : children}
  </button>
);
