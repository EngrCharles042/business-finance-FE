import React, { useState } from "react";
import InputField from "../../../components/elements/forms/InputField";
// import Button from "../../../components/elements/button/Button";
import PasswordField from "../../../components/elements/forms/PasswordField";
import { MainButton } from "../../../components/elements/button/Index";

interface AccountCreationProps {
  step: number;
  totalSteps: number;
}

const AccountCreation: React.FC<AccountCreationProps> = ({
  step,
  totalSteps,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false); // State for loading

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
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 3 second delay

    // Stop loading after action is completed
    setIsLoading(false);

    // Here you can send the `formData` to your API
    console.log("Form submitted:", formData);
  };

  return (
    <main className="flex flex-col max-w-[564px]">
      <header className="flex flex-col items-center w-full max-md:max-w-full">
        <h1 className="text-4xl font-extrabold leading-none text-center text-neutral-900">
          Create Account
        </h1>
        <p className="mt-3 text-xl font-medium text-gray-600 max-md:max-w-full">
          Enter details below to create your SFI account
        </p>
      </header>
      <section className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full text-gray-600 max-md:max-w-full">
          <div className="flex flex-col w-full font-semibold leading-none max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
              <h2 className="flex-1 shrink self-stretch my-auto text-3xl basis-0">
                Personal Information
              </h2>
              <p className="self-stretch my-auto text-xl w-[110px]">
                Step {step} of {totalSteps}
              </p>
            </div>
          </div>
          <form
            className="flex flex-col mt-9 w-full font-medium max-md:max-w-full"
            onSubmit={handleSubmit}
          >
            <InputField
              label="Full Name"
              value={formData.fullName}
              placeholder="Enter your full name"
              type="text"
              name="fullName"
              onChange={handleInputChange}
            />
            <InputField
              label="Phone Number"
              value={formData.phoneNumber}
              placeholder="Enter your phone number"
              type="tel"
              name="phoneNumber"
              onChange={handleInputChange}
            />
            <InputField
              label="Email"
              value={formData.email}
              placeholder="Enter your email address"
              type="email"
              name="email"
              onChange={handleInputChange}
            />
            <PasswordField
              label="Password"
              value={formData.password}
              placeholder="Enter your password"
              name="password"
              onChange={handleInputChange}
            />
            <MainButton isLoading={isLoading} type="submit">
              Next
            </MainButton>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AccountCreation;
