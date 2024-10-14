import { useEffect, useState } from "react";
import PersonalInformation from "./Step1";
import BusinessInformation from "./Step2";

const Signup = () => {
    const [signupStage, setSignupStage] = useState("1");
    // const [error, setError] = useState("");

    const setStage = (stage: string) => {
        setSignupStage(stage);
        localStorage.setItem("signupStage", stage);
        return {};
    };

    useEffect(() => {
        const stage = localStorage.getItem("signupStage");
        console.log("Retrieved stage from local storage:", stage); // Log the retrieved stage
        // if (!stage) {
            if (!stage || (stage !== "1" && stage !== "2")) {
            setStage("1");
        } else {
            setStage(stage as string);
        }
    }, []);
    

    // Helper function to render the correct component based on signupStage
    const renderComponent = () => {
        switch (signupStage) {
            case "1":
                return <PersonalInformation step={1} totalSteps={2} setStage={setStage} />;
            case "2":
                return <BusinessInformation step={2} totalSteps={2} onNext={() => setStage("3")} onBack={() => setStage("1")} />;
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
