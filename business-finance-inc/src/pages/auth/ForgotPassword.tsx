import { useState } from "react";
import InputField from "../../components/elements/forms/InputField";
import { MainButton } from "../../components/elements/button/Index";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

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

    // Navigate to reset password page
    navigate('/auth/reset-password');
  };

  return (
    <div className="flex flex-col my-20 w-full max-w-[564px] mx-auto">
      <div className="flex flex-col w-full text-center max-md:max-w-full">
        <div className="self-center text-4xl font-extrabold leading-none text-neutral-900">
          Forgot Password?
        </div>
        <div className="mt-3 text-xl font-medium leading-8 text-gray-600 max-md:max-w-full">
          Enter your SFI email address to reset password.
          <br />
          You will receive an OTP to reset your password.
        </div>
      </div>
      <form
        className="flex flex-col mt-12 w-full whitespace-nowrap max-md:mt-10 max-md:max-w-full"
        onSubmit={handleSubmit}
      >
        {/* <div className="flex flex-col w-full min-h-[265px] max-md:max-w-full">
          <div className="flex flex-col w-full min-h-[265px] max-md:max-w-full"> */}
        {/* <div className="flex flex-col w-full font-medium text-gray-600 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full"> */}
        <div className="flex flex-col w-full max-md:max-w-full">
          <InputField
            label="Email"
            value={formData.email}
            placeholder="example@gmail.com"
            type="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        {/* </div>
              </div>
            </div> */}
        <MainButton isLoading={isLoading} type="submit">
          Next
        </MainButton>
        {/* </div>
        </div> */}
      </form>
      <div className="flex flex-col items-center self-center mt-12 text-center max-md:mt-10">
        <div className="flex flex-wrap text-xl gap-2.5">
          <span className="text-zinc-800">Didn't receive any email?</span>
          <span className="text-red-500 underline">Resend link</span>
        </div>
        <button
          className="flex gap-1 justify-center items-center mt-7 text-2xl font-semibold leading-none whitespace-nowrap text-zinc-800 cursor-pointer"
          onClick={() => window.history.back()}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebfe8b02b783950c3f1c858e2c9f3a17cf4b634605aa694e23d2f7db6efb71b?placeholderIfAbsent=true&apiKey=8139d9e03568455ba6696601aab74a9e"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <div className="self-stretch my-auto">Back</div>
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
