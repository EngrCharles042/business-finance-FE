const Support = () => {
  return (
    <div className="flex flex-col pt-6 mt-16 w-full min-h-[1590px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full text-center max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-4xl font-semibold leading-none text-neutral-900 max-md:max-w-full">
            Hi Oluchukwu,{" "}
          </div>
          <div className="mt-4 text-3xl font-medium text-gray-600 max-md:max-w-full">
            How can we help you today?
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full font-medium text-gray-600 max-md:mt-10 max-md:max-w-full">
        <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
          Full Name
        </div>
        <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl tracking-tight bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
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
      <div className="flex flex-col mt-16 w-full text-gray-600 min-h-[176px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full min-h-[176px] max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
            <div className="flex-1 shrink text-3xl font-medium tracking-tight leading-none basis-0 max-md:max-w-full">
              Issue Title
            </div>
            <div className="flex-1 shrink text-2xl text-right basis-0 max-md:max-w-full">
              20/50
            </div>
          </div>
          <div className="flex-1 shrink gap-2 px-6 py-6 mt-2 text-3xl font-medium bg-white rounded-xl border-2 border-solid border-slate-300 size-full max-md:px-5 max-md:max-w-full">
            Problems repaying my loan
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full text-3xl font-medium text-gray-600 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full min-h-[304px] max-md:max-w-full">
          <div className="flex-1 shrink gap-5 w-full tracking-tight leading-none max-md:max-w-full">
            Issue Description
          </div>
          <div className="flex-1 shrink gap-2 px-6 py-6 mt-2 leading-10 bg-white rounded-xl border-2 border-solid border-slate-300 size-full max-md:px-5 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. In massa sodales urna amet
            egestas mauris auctor orci. In lacus lorem aliquet porta erat
            viverra.
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-end w-full max-md:max-w-full">
            <div className="flex flex-col grow shrink text-gray-600 min-w-[240px] w-[623px] max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
                <div className="flex-1 shrink text-3xl font-medium tracking-tight leading-none basis-0">
                  Additional Info
                </div>
                <div className="flex-1 shrink text-2xl text-right basis-0">
                  Optional
                </div>
              </div>
              <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl font-medium tracking-tight bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                jpeg, png, pdf format
              </div>
            </div>
            <div className="grow shrink self-stretch px-4 py-5 text-base font-medium leading-6 text-white whitespace-nowrap bg-green-500 rounded-2xl min-h-[88px] w-[152px]">
              Upload
            </div>
          </div>
          <div className="flex flex-wrap gap-8 items-center mt-4 max-w-full w-[504px]">
            <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] rounded-[48px] w-[408px]">
              <div className="flex flex-col items-start bg-gray-400 rounded-[48px] max-md:pr-5">
                <div className="flex shrink-0 h-4 bg-green-500 rounded-[48px] w-[202px]" />
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/ee21f40f2570d71f6085ef3e721a3cc42302eab9aa11748264297659f2165800?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
          </div>
        </div>
        <div className="self-center px-4 py-6 mt-16 max-w-full text-lg font-semibold leading-6 text-white whitespace-nowrap rounded-2xl bg-zinc-800 min-h-[88px] w-[504px] max-md:mt-10">
          Submit
        </div>
      </div>
    </div>
  );
};

export default Support;
