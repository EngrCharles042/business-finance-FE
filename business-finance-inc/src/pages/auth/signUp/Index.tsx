import { useEffect, useState } from "react";
import PersonalInformation from "./Step1";
import BusinessInformation from "./Step2";
import BankInformation from "./Step3";

const Signup = () => {
    const [signupStage, setSignupStage] = useState("1");

    const setStage = (stage: string) => {
        setSignupStage(stage);
        localStorage.setItem("signupStage", stage);
    };

    useEffect(() => {
        const stage = localStorage.getItem("signupStage");
        console.log("Retrieved stage from local storage:", stage); // Log the retrieved stage
        if (!stage) {
            setStage("1");
        } else {
            setStage(stage as string);
        }
    }, []);

    // Helper function to render the correct component based on signupStage
    const renderComponent = () => {
        switch (signupStage) {
            case "1":
                return <PersonalInformation step={1} totalSteps={3} setStage={setStage} />;
            case "2":
                return (
                    <BusinessInformation
                        step={2}
                        totalSteps={3}
                        setStage={setStage}
                        onNext={() => setStage("3")} // Navigate to stage 3
                        onBack={() => setStage("1")}
                    />
                );
            case "3":
                return (
                    <BankInformation
                        step={3}
                        totalSteps={3}
                        onBack={() => setStage("2")}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-[564px] mx-auto">
            {renderComponent()}
        </div>
    );
};

export default Signup;
