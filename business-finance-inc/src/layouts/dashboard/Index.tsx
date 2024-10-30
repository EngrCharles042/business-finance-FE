import { useEffect } from "react";
// import { MainLogo } from "Assets/Index";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/blocks/dashboardHeader/Index";
import Sidebar from "../../components/blocks/sidebar/Index";

const DashboardLayout = () => {
// const DashboardLayout = (props: any) => {
    // const initialState = {
    //     openMobileSideBar: false
    // };
    // const [_, ] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), initialState);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-latoRegular bg-[#F7F7F7] overflow-x-hidden w-screen h-screen relative">
            <div>
                <header className="bg-white p-5 fixed w-full z-10 top-0 md:pl-[21%]">
                    <DashboardHeader />
                </header>
            </div>
            <div className="flex p-2 md:p-5">
                <nav className="bg-assetize-dark py-5 z-20 md:flex-[.2] lg:flex-[.15] h-[90vh] rounded-lg fixed top-5 w-[19%] hidden md:block">
                    <div className="flex flex-col items-center justify-center w-full mt-6">
                        {/* <img src={MainLogo} alt="logo" className="w-[60%]" /> */}
                        <div className="w-full mt-8">
                            <Sidebar />
                        </div>
                    </div>
                </nav>
                <div className="w-[95vw] sm:w-[97vw]  lg:w-[95vw] h-screen mt-[70px] md:pl-48 md:w-[96vw] lg:pl-[21vw]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
