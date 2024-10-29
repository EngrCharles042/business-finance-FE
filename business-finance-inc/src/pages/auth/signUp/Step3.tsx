import React, { useState } from "react";
import InputField from "../../../components/elements/forms/InputField"; // Adjust path if necessary
import { MainButton } from "../../../components/elements/button/Index";

interface BankInformationProps {
  step: number;
  totalSteps: number;
  onBack: () => void;
}

const BankInformation: React.FC<BankInformationProps> = ({
  step,
  totalSteps,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    bvn: "",
    bankStatement: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isAgreed, setIsAgreed] = useState(false); // State for checkbox

  // Handle input changes to update formData state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsAgreed((prev) => !prev); // Toggle checkbox state
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
  };

  return (
    <div className="flex flex-col my-20">
      <header className="flex flex-col items-center w-full">
        <h1 className="text-4xl font-extrabold leading-none text-center text-neutral-900">
          Create Account
        </h1>
        <p className="mt-3 text-xl font-medium text-gray-600">
          Enter details below to create your SFI account
        </p>
      </header>
      <section className="flex flex-col mt-12 w-full min-h-[863px]">
        <div className="flex flex-col w-full font-semibold leading-none text-gray-600">
          <div className="flex flex-wrap gap-10 items-center w-full">
            <h2 className="flex-1 text-3xl">Bank Information</h2>
            <p className="text-xl">
              Step {step} of {totalSteps}
            </p>
          </div>

          <form
            className="flex flex-col mt-9 w-full font-medium text-gray-600"
            onSubmit={handleSubmit}
          >
            <InputField
              label="Bank Name"
              value={formData.bankName}
              placeholder="Access Bank"
              type="text"
              name="bankName"
              onChange={handleInputChange}
            />

            <InputField
              label="Account Number"
              value={formData.accountNumber}
              placeholder="0698457432"
              type="text"
              name="accountNumber"
              onChange={handleInputChange}
            />

            <InputField
              label="Bank Verification Number"
              value={formData.bvn}
              placeholder="22212345678"
              type="text"
              name="bvn"
              onChange={handleInputChange}
            />

            <div className="flex flex-col mt-9 w-full">
              <label className="text-xl tracking-tight leading-none">
                Bank Statement
              </label>
              <div className="flex-1 self-stretch px-5 py-4 mt-1.5 w-full text-2xl tracking-tight whitespace-nowrap bg-white rounded-lg border-2 border-solid border-slate-300 min-h-[66px]">
                jpeg, png, pdf format
              </div>
            </div>

            <div className="flex gap-6 items-center mt-3">
              <div className="flex flex-col self-stretch my-auto min-w-[240px] rounded-[36px] w-[312px]">
                <div className="flex flex-col items-start bg-gray-400 rounded-[36px]">
                  <div className="flex shrink-0 h-3 bg-green-500 rounded-[36px] w-[152px]" />
                </div>
              </div>
              <button
                type="button"
                className="self-stretch px-3 py-4 text-base leading-6 text-white whitespace-nowrap bg-green-500 rounded-xl min-h-[66px] w-[143px]"
                // Handle your upload logic here
              >
                Upload
              </button>
            </div>

            <div className="flex flex-wrap gap-3 items-center mt-9 w-full text-xs leading-4 text-green-500">
              <input
                type="checkbox"
                id="agreeCheckbox"
                checked={isAgreed}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="agreeCheckbox" className="flex items-center">
                <span className="text-zinc-800">
                  By clicking Done, I agree to the BFI's
                </span>
                <span className="text-green-500">Terms of Service</span>
                <span className="text-zinc-800">and</span>
                <span className="text-green-500">Privacy Policy</span>
              </label>
            </div>

            <div className="flex justify-between">
              <MainButton className="mr-10" type="button" onClick={onBack}>
                Back
              </MainButton>
              <MainButton
                isLoading={isLoading}
                type="submit"
                disabled={isLoading}
              >
                Done
              </MainButton>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BankInformation;
