import AuthLayout from "../layouts/auth/Index";
import AccountCreation from "../pages/auth/signUp/CreateAccount";

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
            element: <AccountCreation />
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