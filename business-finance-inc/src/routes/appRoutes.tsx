import AuthLayout from "../layouts/auth/Index";

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
        // {
        //     path: "/auth/signup",
        //     element: <Signup />
        // },
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