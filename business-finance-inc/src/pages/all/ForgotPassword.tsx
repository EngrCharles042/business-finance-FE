const ForgotPassword = () => {
  return (
    <div className="flex flex-col max-w-[564px]">
      <div className="flex flex-col w-full text-center max-md:max-w-full">
        <div className="self-center text-4xl font-extrabold leading-none text-neutral-900">
          Forgot Password?
        </div>
        <div className="mt-3 text-xl font-medium leading-8 text-gray-600 max-md:max-w-full">
          Enter your SFI email address to reset password.
          <br />
          You will receive an OTP to reset your password.
        </div>
      </div>
      <div className="flex flex-col mt-12 w-full whitespace-nowrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full min-h-[265px] max-md:max-w-full">
          <div className="flex flex-col w-full min-h-[265px] max-md:max-w-full">
            <div className="flex flex-col w-full font-medium text-gray-600 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex-1 shrink gap-4 w-full text-xl tracking-tight leading-none max-md:max-w-full">
                      Email
                    </div>
                    <div className="flex-1 shrink gap-1.5 self-stretch px-5 py-4 mt-1.5 w-full text-2xl tracking-tight bg-white rounded-lg border-2 border-solid border-slate-300 min-h-[66px] max-md:max-w-full">
                      example@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch px-3 py-4 mt-20 w-full text-lg font-semibold leading-6 text-white rounded-xl bg-zinc-800 min-h-[66px] max-md:mt-10 max-md:max-w-full">
              Login
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center mt-12 text-center max-md:mt-10">
        <div className="text-xl text-red-500 underline">
          <span className="text-zinc-800">Didn't receive any email?</span>{" "}
          <span className="text-red-500 underline">Resend link</span>
        </div>
        <div className="flex gap-1 justify-center items-center mt-7 text-2xl font-semibold leading-none whitespace-nowrap text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebfe8b02b783950c3f1c858e2c9f3a17cf4b634605aa694e23d2f7db6efb71b?placeholderIfAbsent=true&apiKey=8139d9e03568455ba6696601aab74a9e"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <div className="self-stretch my-auto">Back</div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
