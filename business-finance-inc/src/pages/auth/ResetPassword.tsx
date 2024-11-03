import { useState } from "react";
import PasswordField from "../../components/elements/forms/PasswordField";
import { MainButton } from "../../components/elements/button/Index";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // State for error message 
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

    // Check if passwords match  
    if (formData.newPassword !== formData.confirmNewPassword) {  
      setError("Passwords do not match");  
      return; // Stop the submit process  
    }  

    // Start loading when form is submitted
    setIsLoading(true);

    // Simulate API request or some async action
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 3 second delay

    // Stop loading after action is completed
    setIsLoading(false);

    // Here you can send the `formData` to your API
    console.log("Form submitted:", formData);

    // Navigate to reset password page
    navigate('/auth/login');
  };

  return (
    <div className="flex flex-col my-20 w-full max-w-[564px] mx-auto">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="text-4xl font-extrabold leading-none text-center text-neutral-900">
          Reset Password
        </div>
        <div className="mt-3 text-xl font-medium text-gray-600 max-md:max-w-full">
          Enter new password to log into your SFI Account
        </div>
      </div>
      <form className="flex flex-col mt-12 w-full min-h-[651px] max-md:mt-10 max-md:max-w-full" onSubmit={handleSubmit}>
        {/* <div className="flex flex-col w-full min-h-[651px] max-md:max-w-full"> */}
          <div className="flex flex-col w-full text-gray-600 max-md:max-w-full">
            <PasswordField
              label="New Password"
              value={formData.newPassword}
              placeholder=".........."
              name="newPassword"
              onChange={handleInputChange}
            />

            <PasswordField
              label="Confirm New Password"
              value={formData.confirmNewPassword}
              placeholder=".........."
              name="confirmNewPassword"
              onChange={handleInputChange}
            />
          </div>
          {error && <div className="mt-2 text-red-600">{error}</div>} {/* Display error message */}
          <MainButton isLoading={isLoading} type="submit">
            Save Password
          </MainButton>
        {/* </div> */}
      </form>
    </div>
  );
};

export default ResetPassword;
