const ResetPassword = () => {
  return (
    <div className="flex flex-col max-w-[564px]">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="text-4xl font-extrabold leading-none text-center text-neutral-900">
          Reset Password
        </div>
        <div className="mt-3 text-xl font-medium text-gray-600 max-md:max-w-full">
          Enter new password to log into your SFI Account
        </div>
      </div>
      <div className="flex flex-col mt-12 w-full min-h-[651px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full min-h-[651px] max-md:max-w-full">
          <div className="flex flex-col w-full text-gray-600 max-md:max-w-full">
            <div className="flex flex-col w-full font-medium max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex-1 shrink gap-4 w-full text-xl tracking-tight leading-none max-md:max-w-full">
                    New Password
                  </div>
                  <div className="flex flex-wrap gap-1.5 items-center px-5 py-4 mt-1.5 w-full text-2xl tracking-tight whitespace-nowrap bg-white rounded-lg border-2 border-solid border-slate-300 min-h-[66px] max-md:max-w-full">
                    <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                      ..........
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/e5e9d096c2ef99333570b68667ac7667d1bba0f7c5f0ea843d29bdda1b7029ae?apiKey=8139d9e03568455ba6696601aab74a9e&"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6 w-full max-md:max-w-full">
              <div className="flex flex-col w-full font-medium max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex-1 shrink gap-4 w-full text-xl tracking-tight leading-none max-md:max-w-full">
                      Confirm New Password
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center px-5 py-4 mt-1.5 w-full text-2xl tracking-tight whitespace-nowrap bg-white rounded-lg border-2 border-solid border-slate-300 min-h-[66px] max-md:max-w-full">
                      <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                        ..........
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/e5e9d096c2ef99333570b68667ac7667d1bba0f7c5f0ea843d29bdda1b7029ae?apiKey=8139d9e03568455ba6696601aab74a9e&"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-1.5 mt-3 max-w-full text-lg leading-none rounded-xl w-[341px]">
                <div className="flex-1 shrink gap-4 w-full font-semibold">
                  Your password must contain
                </div>
                <div className="flex gap-1.5 items-center mt-3 w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/9c518952319da30760663d522e1ea586e0fa2a3af6c2a39f4ba964ae52a31f20?apiKey=8139d9e03568455ba6696601aab74a9e&"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                  />
                  <div className="flex-1 shrink self-stretch my-auto basis-0">
                    atleast 8 characters
                  </div>
                </div>
                <div className="flex gap-1.5 items-center mt-3 w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/9c518952319da30760663d522e1ea586e0fa2a3af6c2a39f4ba964ae52a31f20?apiKey=8139d9e03568455ba6696601aab74a9e&"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                  />
                  <div className="flex-1 shrink self-stretch my-auto basis-0">
                    one special character # _+@
                  </div>
                </div>
                <div className="flex gap-1.5 items-center mt-3 w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/9c518952319da30760663d522e1ea586e0fa2a3af6c2a39f4ba964ae52a31f20?apiKey=8139d9e03568455ba6696601aab74a9e&"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                  />
                  <div className="flex-1 shrink self-stretch my-auto basis-0">
                    one uppercase letter-ABC
                  </div>
                </div>
                <div className="flex gap-1.5 items-center mt-3 w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/9c518952319da30760663d522e1ea586e0fa2a3af6c2a39f4ba964ae52a31f20?apiKey=8139d9e03568455ba6696601aab74a9e&"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                  />
                  <div className="flex-1 shrink self-stretch my-auto basis-0">
                    one number-1234
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch px-3 py-4 mt-20 w-full text-lg font-semibold leading-6 text-white rounded-xl bg-zinc-800 min-h-[66px] max-md:mt-10 max-md:max-w-full">
            Save Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
