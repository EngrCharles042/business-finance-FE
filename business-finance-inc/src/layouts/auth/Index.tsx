import { Outlet } from "react-router-dom";
import { AuthBg } from "../../assets/Index";

const AuthLayout = () => {
  return (
    <div className="fixed grid w-screen h-screen md:grid-cols-2">
      <div
        className="relative hidden md:flex md:items-center md:justify-center"
        style={{
          backgroundImage: `url(${AuthBg})`,
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          // backgroundColor: "#f0f0f0", // Add a background color as a fallback
          // height: "100%",
        }}
      ></div>
      <div className="flex flex-col justify-between px-4 overflow-scroll overflow-x-hidden md:items-around">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
