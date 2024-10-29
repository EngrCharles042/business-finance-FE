const DeleteAccount = () => {
  return (
    <div className="flex flex-col max-w-[899px]">
      <div className="flex flex-wrap gap-6 items-start w-full text-4xl font-semibold leading-none max-md:max-w-full">
        <div className="text-neutral-900 w-[743px] max-md:max-w-full">
          Delete Account
        </div>
        <div className="flex flex-1 shrink gap-2 justify-center items-center text-center whitespace-nowrap basis-0 text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/fb5f126b2982032506298a1b9d480a18686358ce72adb3f686e20ff08065e4da?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto">Back</div>
        </div>
      </div>
      <div className="flex flex-col pt-4 mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full text-gray-600 max-md:max-w-full">
          <div className="flex flex-col p-2 max-w-full text-2xl rounded-2xl w-[454px]">
            <div className="flex-1 shrink gap-5 w-full text-3xl font-medium max-md:max-w-full">
              Please tell us why
            </div>
            <div className="flex gap-2 items-center mt-4 w-full leading-none max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/622478552e239704588b7573ea76bf1e2649904a2695cf5fa94e1fcec18562ed?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="flex-1 shrink self-stretch my-auto basis-0">
                Dissatisfied with the platform
              </div>
            </div>
            <div className="flex gap-2 items-center mt-4 w-full leading-none max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/622478552e239704588b7573ea76bf1e2649904a2695cf5fa94e1fcec18562ed?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="flex-1 shrink self-stretch my-auto basis-0">
                Closing/switching business
              </div>
            </div>
            <div className="flex gap-2 items-center mt-4 w-full leading-none max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/c62809df2f513890a254ee49186b6d8486f2e9ccbdf903621a88c13fb2a6dea5?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="flex-1 shrink self-stretch my-auto basis-0">
                Switching to another provider
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-8 w-full text-3xl font-medium min-h-[304px] max-md:max-w-full">
            <div className="flex-1 shrink gap-5 w-full tracking-tight leading-none whitespace-nowrap max-md:max-w-full">
              Other
            </div>
            <div className="flex-1 shrink gap-2 px-6 py-6 mt-2 leading-10 bg-white rounded-xl border-2 border-solid border-slate-300 size-full max-md:px-5 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. In massa sodales urna amet
              egestas mauris auctor orci. In lacus lorem aliquet porta erat
              viverra.
            </div>
          </div>
        </div>
        <div className="self-center px-4 py-6 mt-16 max-w-full text-lg font-semibold leading-6 text-white whitespace-nowrap rounded-2xl bg-zinc-800 min-h-[88px] w-[316px] max-md:mt-10">
          Delete
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
