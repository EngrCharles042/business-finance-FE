const Login = () => {
  return (
    <div className="flex flex-col max-w-[564px]">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="text-4xl font-extrabold leading-none text-center text-neutral-900">
          Welcome Back
        </div>
        <div className="mt-3 text-xl font-medium text-gray-600">
          Login to access your SFI Dashboard
        </div>
      </div>
      <div className="flex flex-col mt-12 w-full min-h-[501px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full min-h-[501px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col w-full font-medium text-gray-600 whitespace-nowrap max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex-1 shrink gap-4 w-full text-xl tracking-tight leading-none max-md:max-w-full">
                    Email
                  </div>
                  <div className="flex-1 shrink gap-1.5 self-stretch px-5 py-4 mt-1.5 w-full text-2xl tracking-tight bg-white rounded-lg border-2 border-solid border-slate-300 min-h-[66px] max-md:max-w-full">
                    example@gmail.com
                  </div>
                </div>
                <div className="flex flex-col mt-9 w-full max-md:max-w-full">
                  <div className="flex-1 shrink gap-4 w-full text-xl tracking-tight leading-none max-md:max-w-full">
                    Password
                  </div>
                  <div className="flex flex-wrap gap-1.5 items-center px-5 py-4 mt-1.5 w-full text-2xl tracking-tight bg-white rounded-lg border-2 border-solid border-slate-300 min-h-[66px] max-md:max-w-full">
                    <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                      ..........
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1b5625a01d5b23f599b6af28ffdf87a5db2be20a78b7bc07bd2161e38b5de93?placeholderIfAbsent=true&apiKey=8139d9e03568455ba6696601aab74a9e"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 items-start mt-6 max-w-full text-xl w-[510px]">
              <div className="flex gap-2.5 items-center text-gray-600">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/efd34c3f6b04ff155c0c5ee6556c452b414722b47f3e2ba80e42d00ec942c359?placeholderIfAbsent=true&apiKey=8139d9e03568455ba6696601aab74a9e"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[27px]"
                />
                <div className="self-stretch my-auto">Remember me</div>
              </div>
              <div className="grow shrink text-red-500 underline w-[137px]">
                Forgot Password
              </div>
            </div>
          </div>
          <div className="self-stretch px-3 py-4 mt-20 w-full text-lg font-semibold leading-6 text-white whitespace-nowrap rounded-xl bg-zinc-800 min-h-[66px] max-md:mt-10 max-md:max-w-full">
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
