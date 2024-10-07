import { Outlet } from "react-router-dom";
import { AuthBg } from "../../assets/Index";

const AuthLayout = () => {
  return (
    <div className="fixed grid w-screen h-screen p-3 rounded-lg md:grid-cols-2 lg:p-7">
      <div
        className="relative hidden w-1/2 rounded-tl-lg rounded-bl-lg md:flex md:items-center md:justify-center"
        style={{
          // backgroundImage: `linear-gradient(to bottom, rgba(202, 22, 17, 0.74), rgba(202, 22, 17, 0.74)), url(${AuthBg}) `,
          backgroundImage: `url(${AuthBg}) `,
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
      <div className="flex flex-col justify-between px-4 overflow-scroll overflow-x-hidden md:items-around ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
