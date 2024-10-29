const Feedback = () => {
  return (
    <div className="flex flex-col max-w-[899px]">
      <div className="flex flex-wrap gap-6 items-start w-full text-4xl font-semibold leading-none whitespace-nowrap max-md:max-w-full">
        <div className="text-neutral-900 w-[743px] max-md:max-w-full">
          Feedback
        </div>
        <div className="flex flex-1 shrink gap-2 justify-center items-center text-center basis-0 text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/73f0ecbe334920b20dae0a3ef67dd244d41c2a7faa5f1640298b4e983f976705?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto">Back</div>
        </div>
      </div>
      <div className="flex flex-col pt-4 mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full text-3xl font-medium tracking-tight text-gray-600 max-md:max-w-full">
          <div className="flex-1 shrink gap-5 w-full leading-none max-md:max-w-full">
            Full Name
          </div>
          <div className="flex-1 shrink gap-2 self-stretch px-6 py-6 mt-2 w-full bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
            Oluchukwu Isioma
          </div>
        </div>
        <div className="flex flex-col mt-16 w-full text-3xl font-medium text-gray-600 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-1 shrink gap-5 w-full tracking-tight leading-none max-md:max-w-full">
            Email
          </div>
          <div className="flex-1 shrink gap-2 self-stretch px-6 py-6 mt-2 w-full bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
            Oluchukwu@gmail.com
          </div>
        </div>
        <div className="flex flex-col items-start mt-16 w-full text-2xl text-gray-600 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col py-2 max-w-full rounded-2xl w-[851px]">
            <div className="flex-1 shrink gap-5 w-full text-3xl font-medium max-md:max-w-full">
              Select Feedback Category
            </div>
            <div className="flex flex-wrap gap-2 items-center px-2 mt-4 w-full leading-none whitespace-nowrap max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/984911902c3b298fec8ef1d89502069db4bf9e9ef64a40a27d9f7bbdb7d152bc?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                Usability
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center px-2 mt-4 w-full leading-none whitespace-nowrap max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/984911902c3b298fec8ef1d89502069db4bf9e9ef64a40a27d9f7bbdb7d152bc?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                Bugs
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center px-2 mt-4 w-full leading-none whitespace-nowrap max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/c5fa61a3d996d4b999aa06e253abd69fbcd21256166c00b2f0caad83f09d7fc0?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                Suggestion
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col w-full text-3xl font-medium text-gray-600 max-md:max-w-full">
            <div className="flex flex-col w-full min-h-[304px] max-md:max-w-full">
              <div className="flex-1 shrink gap-5 w-full tracking-tight leading-none max-md:max-w-full">
                Feedback Details
              </div>
              <div className="flex-1 shrink gap-2 px-6 py-6 mt-2 leading-10 bg-white rounded-xl border-2 border-solid border-slate-300 size-full max-md:px-5 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. In massa sodales urna
                amet egestas mauris auctor orci. In lacus lorem aliquet porta
                erat viverra.
              </div>
            </div>
          </div>
          <div className="self-center px-4 py-6 mt-16 max-w-full text-lg font-semibold leading-6 text-white whitespace-nowrap rounded-2xl bg-zinc-800 min-h-[88px] w-[316px] max-md:mt-10">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
