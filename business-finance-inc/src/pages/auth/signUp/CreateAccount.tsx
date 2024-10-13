import React, { useState } from "react";
import InputField from "../../../components/elements/forms/InputField";
import Button from "../../../components/elements/Button";
import PasswordField from "../../../components/elements/forms/PasswordField";

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

  // Handle input changes to update formData state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission to collect FormData
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new FormData object
    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("email", formData.email);
    data.append("password", formData.password);

    // Here you can send `data` to your API or process it further
    console.log(
      "FormData:",
      data.get("fullName"),
      data.get("phoneNumber"),
      data.get("email"),
      data.get("password")
    );
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
              type="password"
              name="password"
              onChange={handleInputChange}
            />
            <Button text="Next" />
          </form>
        </div>
      </section>
    </main>
  );
};

export default AccountCreation;
