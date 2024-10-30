interface AuthHocProps {
  component: React.ComponentType<any>;
}

const AuthHoc = ({ component: Component, ...rest }: AuthHocProps) => {
  return <Component {...rest} />;
};

export default AuthHoc;
