import React, { useState } from "react";
import InputField from "../../../components/elements/forms/InputField";
import { MainButton } from "../../../components/elements/button/Index";

interface BusinessInformationProps {
  step: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
}

const BusinessInformation: React.FC<BusinessInformationProps> = ({
  step,
  totalSteps,
  onNext,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    businessName: "",
    cacNumber: "",
    storeAddress: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Handle input changes to update formData state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Start loading when form is submitted
    setIsLoading(true);

    // Simulate API request or async action
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 3-second delay

    // Stop loading
    setIsLoading(false);

    // Handle form data submission (e.g., send to API)
    console.log("Form submitted:", formData);

    // Proceed to the next step
    onNext();
  };

  return (
    <main className="flex flex-col">
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
                Business Information
              </h2>
              <p className="self-stretch my-auto text-xl w-[110px] text-center">
                Step {step} of {totalSteps}
              </p>
            </div>
          </div>
          <form
            className="flex flex-col mt-9 w-full font-medium max-md:max-w-full"
            onSubmit={handleSubmit}
          >
            <InputField
              label="Registered Business Name"
              value={formData.businessName}
              placeholder="Solar Financing Inc"
              name="businessName"
              onChange={handleInputChange}
              type="text"
            />
            <InputField
              label="CAC Number"
              value={formData.cacNumber}
              placeholder="RC12345678"
              name="cacNumber"
              onChange={handleInputChange}
              type="text"
            />
            <InputField
              label="Physical Store Address"
              value={formData.storeAddress}
              placeholder="219, Herbert Macaulay Yaba"
              name="storeAddress"
              onChange={handleInputChange}
              type="text"
            />
            <div className="flex justify-between">
              <MainButton className="mr-10" type="button" onClick={onBack}>
                Back
              </MainButton>
              <MainButton isLoading={isLoading} type="submit" disabled>
                Next
              </MainButton>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default BusinessInformation;
