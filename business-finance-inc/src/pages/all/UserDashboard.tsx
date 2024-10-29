const UserDashboard = () => {
  return (
    <div className="flex flex-col max-w-[899px]">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-8 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/84f1329720507551260c68924dd1cda03de8cc4ff35562e09a450ac350575618?apiKey=8139d9e03568455ba6696601aab74a9e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/84f1329720507551260c68924dd1cda03de8cc4ff35562e09a450ac350575618?apiKey=8139d9e03568455ba6696601aab74a9e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/84f1329720507551260c68924dd1cda03de8cc4ff35562e09a450ac350575618?apiKey=8139d9e03568455ba6696601aab74a9e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/84f1329720507551260c68924dd1cda03de8cc4ff35562e09a450ac350575618?apiKey=8139d9e03568455ba6696601aab74a9e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/84f1329720507551260c68924dd1cda03de8cc4ff35562e09a450ac350575618?apiKey=8139d9e03568455ba6696601aab74a9e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/84f1329720507551260c68924dd1cda03de8cc4ff35562e09a450ac350575618?apiKey=8139d9e03568455ba6696601aab74a9e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/84f1329720507551260c68924dd1cda03de8cc4ff35562e09a450ac350575618?apiKey=8139d9e03568455ba6696601aab74a9e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/84f1329720507551260c68924dd1cda03de8cc4ff35562e09a450ac350575618?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-28 aspect-square rounded-[200px]"
          />
          <div className="flex flex-col self-stretch my-auto min-w-[240px]">
            <div className="text-4xl font-semibold leading-none text-neutral-900">
              Hello Oluchukwu
            </div>
            <div className="self-start mt-2 text-3xl font-medium text-center text-gray-600">
              Welcome back
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/c56211a1a32e213af1d946a7eda3f308515f24a8c77ba7c5c30824e120cdf1f4?apiKey=8139d9e03568455ba6696601aab74a9e&"
          className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
        />
      </div>
      <div className="flex overflow-hidden relative flex-col items-start p-8 mt-16 w-full rounded-[48px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex z-0 gap-8 items-center text-4xl font-semibold leading-none text-stone-50">
          <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/8717311c0034831dd19cd4787c32235cbdfbc965a8d538a7f159b67c0f16a1a6?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[72px]"
            />
            <div className="self-stretch my-auto w-[232px]">Credit Limit</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/3bc6128aa1d445acaf7b7fa89332d73ce3d9f1b47e5b95fff290d283ce13c0d7?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
          />
        </div>
        <div className="z-0 self-stretch mt-4 text-3xl text-stone-50 max-md:max-w-full">
          (This is the amount available for you to access)
        </div>
        <div className="z-0 mt-4 text-5xl font-semibold leading-none text-center text-stone-50 max-md:text-4xl">
          ₦3,000,000
        </div>
        <div className="flex relative z-0 flex-col mt-4 max-w-full w-[416px]">
          <div className="z-0 text-3xl font-medium text-stone-50">20% Used</div>
          <div className="flex z-0 flex-col mt-2 w-full rounded-[48px]">
            <div className="flex flex-col items-start bg-gray-400 rounded-[48px] max-md:pr-5">
              <div className="flex shrink-0 max-w-full h-4 bg-yellow-400 rounded-[48px] w-[322px]" />
            </div>
          </div>
          <div className="flex absolute -right-2.5 -bottom-8 z-0 max-w-full rounded-2xl bg-stone-50 bg-opacity-0 h-[244px] min-h-[120px] w-[282px]" />
        </div>
        <div className="flex absolute top-0 z-0 max-w-full rounded-2xl bg-stone-50 bg-opacity-0 h-[244px] min-h-[208px] right-[151px] w-[282px]" />
        <div className="flex absolute bottom-0 z-0 max-w-full rounded-full bg-stone-50 bg-opacity-0 h-[336px] min-h-[258px] right-[195px] w-[336px]" />
      </div>
      <div className="mt-16 text-4xl font-semibold leading-none text-neutral-900 max-md:mt-10">
        Quick Action
      </div>
      <div className="flex gap-8 items-start mt-16 max-w-full rounded-[32px] w-[670px] max-md:mt-10">
        <div className="flex overflow-hidden flex-col flex-1 shrink justify-end px-11 pt-7 pb-12 w-full bg-white border-2 border-gray-400 border-solid basis-0 min-w-[240px] rounded-[32px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center items-center px-2 w-12 h-12 rounded-xl bg-neutral-900">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/0bfadb8fbf404fe6414d3a8556382c3557af45b388824dc01448a1e6100d5a98?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain w-full aspect-square stroke-[4px] stroke-white"
              />
            </div>
            <div className="flex flex-col mt-8 w-full max-md:max-w-full">
              <div className="flex flex-col w-full text-neutral-900 max-md:max-w-full">
                <div className="text-3xl font-semibold leading-none">
                  Credit Financing
                </div>
                <div className="mt-2 text-2xl font-medium max-md:max-w-full">
                  Quickly access finance for your solar business
                </div>
              </div>
              <div className="self-stretch px-4 py-1.5 mt-6 max-w-full text-xs font-medium leading-5 text-white rounded-lg bg-neutral-900 min-h-[48px] w-[244px]">
                Request Credit
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full text-neutral-900 max-md:mt-10 max-md:max-w-full">
        <div className="text-4xl font-semibold leading-none max-md:max-w-full">
          Finance Management
        </div>
        <div className="flex flex-col mt-8 w-full text-3xl font-medium max-md:max-w-full">
          <div className="flex flex-col justify-center px-4 py-8 w-full bg-white rounded-2xl border-2 border-white border-solid max-md:max-w-full">
            <div className="flex relative flex-col w-full max-md:max-w-full">
              <div className="flex z-0 flex-wrap gap-8 items-center max-w-full w-[867px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/9013cfc7e7927b2f1493d7b7bc5c2d5677663afab9ce7de142deb270e8043ccd?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] w-[43px]"
                />
                <div className="self-stretch my-auto">
                  Credit Request Status
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/8800f547a01e8d2a32ae2f87878d0bfe5cc3d60e28d560cb5695f33d7dec12e3?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain absolute bottom-0 right-1.5 z-0 w-12 h-12 aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center px-4 py-8 mt-8 w-full bg-white rounded-2xl max-md:max-w-full">
            <div className="flex relative flex-col items-start w-full max-md:max-w-full">
              <div className="flex z-0 flex-wrap gap-8 items-center max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/e3f17f0d08bd2db5b3de16b760064f579cb1c0b80239c8aa1e68fdd688d4c963?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] w-[43px]"
                />
                <div className="self-stretch my-auto w-[430px] max-md:max-w-full">
                  Repayment Plan
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/8800f547a01e8d2a32ae2f87878d0bfe5cc3d60e28d560cb5695f33d7dec12e3?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain absolute bottom-0 right-0.5 z-0 w-12 h-12 aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center px-4 py-8 mt-8 w-full bg-white rounded-2xl max-md:max-w-full">
            <div className="flex relative flex-col items-start w-full max-md:max-w-full">
              <div className="flex z-0 flex-wrap gap-8 items-center max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/c033e124a635a3ea4094706e61fc4647777ad3148ba25fc9f72edf94ad53edae?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.02] fill-yellow-400 w-[47px]"
                />
                <div className="self-stretch my-auto w-[430px] max-md:max-w-full">
                  Credit History
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/8800f547a01e8d2a32ae2f87878d0bfe5cc3d60e28d560cb5695f33d7dec12e3?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain absolute -right-0.5 -bottom-0.5 z-0 w-12 h-12 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
