import AuthHoc from "../components/AuthWrapper";
import Dashboard from "../components/blocks/dashboard/Index";
import AuthLayout from "../layouts/auth/Index";
import DashboardLayout from "../layouts/dashboard/Index";
import Signup from "../pages/auth/signUp/Index";

export const DashboardRoutes = {
    path: "/",
    element: <AuthHoc component={DashboardLayout} />,
    children: [
        // {
        //     path: "admin",
        //     children: [
        //         { index: true, element: <AdminDashboard /> },
        //         {
        //             path: "properties",
        //             children: [
        //                 { index: true, element: <Properties /> },
        //                 { path: ":id", element: <AdminPropertyDetails /> }
        //             ]
        //         },
        //         {
        //             path: "authentication",
        //             children: [
        //                 { index: true, element: <Authentication /> },
        //                 { path: ":id", element: <DeveloperDetails /> }
        //             ]
        //         },
        //         {
        //             path: "users",
        //             children: [
        //                 { index: true, element: <Users /> },
        //                 { path: ":id", element: <UserDetail /> }
        //             ]
        //         },
        //         {
        //             path: "learn",
        //             children: [
        //                 { index: true, element: <AdminLearn /> },
        //                 { path: ":id", element: <AdminLearnDetails /> },
        //                 { path: "create", element: <CreatePost /> },
        //                 { path: "edit/:id", element: <EditPost /> }
        //             ]
        //         },
        //         { path: "support", element: <Support /> }
        //     ]
        // },
        // {
        //     path: "developer",
        //     children: [
        //         { index: true, element: <DeveloperDashboard /> },
        //         { path: "create-property", element: <CreateProperty /> },
        //         {
        //             path: "edit-property",
        //             children: [
        //                 {
        //                     path: ":id",
        //                     element: <EditProperty />
        //                 }
        //             ]
        //         },
        //         { path: ":id", element: <DeveloperPropertyDetail /> },
        //         {
        //             path: "learn",
        //             children: [
        //                 { index: true, element: <Learn /> },
        //                 {
        //                     path: ":id",
        //                     element: <LearnDetails />
        //                 }
        //             ]
        //         },
        //         { path: "reports", element: <DeveloperAnalytics /> },
        //         { path: "orders", element: <DeveloperOrder /> },
        //         { path: "wallets", element: <DeveloperWallets /> },
        //         { path: "transactions", element: <Transactions /> }
        //     ]
        // },
        {
            path: "installer",
            children: [
                { index: true, element: <Dashboard /> },
                // { path: ":id", element: <InvestPropertyDetails /> },
                // {
                //     path: "portfolio",
                //     children: [
                //         {
                //             index: true,
                //             element: <Portfolio />
                //         },
                //         {
                //             path: ":id",
                //             element: <InvestmentPortfolioDetails />
                //         }
                //     ]
                // },
                // {
                //     path: "buy-shares/:id",
                //     element: <Buyshares />
                // },
                // {
                //     path: "investment",
                //     element: <Invest />
                // },
                // {
                //     path: "investment/:id",
                //     element: <InvestPropertyDetails />
                // },
                // {
                //     path: "wallets",
                //     element: <Wallets />
                // },
                // {
                //     path: "wallets/safelock",
                //     element: <SafeLockPocket />
                // },
                // {
                //     path: "learn",
                //     children: [
                //         { element: <Learn />, index: true },

                //         {
                //             path: ":id",
                //             element: <LearnDetails />
                //         }
                //     ]
                // }
            ]
        },
        // {
        //     path: "account-settings",
        //     element: <AccountSettings />
        // },
        // {
        //     path: "notifications",
        //     element: <NotificationList />
        // }
    ]
};

export const AutheticationRoutes = {
    path: "/auth",
    element: <AuthLayout />,
    children: [
        // {
        //     path: "/auth/welcome",
        //     element: <Welcome />
        // },
        // {
        //     path: "/auth/login",
        //     element: <Login />
        // },
        {
            path: "/auth/signup",
            element: <Signup />
        },
        // {
        //     path: "/auth/reset-password",
        //     element: <ResetPassword />
        // },
        // {
        //     path: "/auth/forgot-password",
        //     element: <ForgotPassword />
        // },
        // {
        //     path: "/auth/verification",
        //     element: <Verification />
        // },
        // {
        //     path: "*",
        //     element: <Navigate to="/auth/login" replace />
        // }
    ]
};