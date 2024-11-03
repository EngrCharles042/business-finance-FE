import { useState } from "react";
import { MainButton } from "../../components/elements/button/Index";
import InputField from "../../components/elements/forms/InputField";
import PasswordField from "../../components/elements/forms/PasswordField";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Handle input changes to update formData state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission to collect FormData
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Start loading when form is submitted
    setIsLoading(true);

    // Simulate API request or some async action
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 3 second delay

    // Stop loading after action is completed
    setIsLoading(false);

    // Here you can send the `formData` to your API
    console.log("Form submitted:", formData);

    // Navigate to Business Information page (Step 2)
    // setStage("2");
  };

  return (
    <div className="flex flex-col my-20 w-full max-w-[564px] mx-auto">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="text-4xl font-extrabold leading-none text-center text-neutral-900">
          Welcome Back
        </div>
        <div className="mt-3 text-xl font-medium text-gray-600">
          Login to access your SFI Dashboard
        </div>
      </div>
      <form
        className="flex flex-col mt-9 w-full font-medium max-md:mt-10 max-md:max-w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full max-md:max-w-full">
          <InputField
            label="Email"
            value={formData.email}
            placeholder="example@gmail.com"
            type="email"
            name="email"
            onChange={handleInputChange}
          />
          <PasswordField
            label="Password"
            value={formData.password}
            placeholder=".........."
            name="password"
            onChange={handleInputChange}
          />
          <div className="flex items-center justify-between mt-6 max-w-full text-xl max-md:flex-wrap">
            <label className="flex gap-2.5 items-center text-gray-600">
              <input type="checkbox" className="shrink-0 w-4 h-4" />
              <span className="self-stretch my-auto">Remember me</span>
            </label>
            <Link to="/auth/forgot-password" className="text-red-500 underline">
              Forgot Password
            </Link>
          </div>
        </div>
        <MainButton isLoading={isLoading} type="submit">
          Login
        </MainButton>
      </form>
      <div className="flex flex-wrap text-xl gap-2.5 items-center self-center mt-12 text-center max-md:mt-10">
        <span className="text-zinc-800">New user?</span>
        <Link to="/auth/signup" className="text-zinc-800 underline">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
