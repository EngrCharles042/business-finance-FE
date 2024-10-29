const CreditRequest = () => {
  return (
    <div className="flex flex-col font-semibold max-w-[899px]">
      <div className="flex flex-wrap gap-6 items-start w-full text-4xl leading-none max-md:max-w-full">
        <div className="text-neutral-900 w-[743px] max-md:max-w-full">
          Credit Request
        </div>
        <div className="flex flex-1 shrink gap-2 justify-center items-center text-center whitespace-nowrap basis-0 text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/76f631a419da021f782652cc7b0c7e8de5a3a0333c65ed52c09d86cb32098650?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto">Back</div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full font-medium max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full text-3xl text-zinc-800 max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            Complete the form below to initiate your credit application
          </div>
        </div>
        <div className="flex flex-col pt-8 pb-32 mt-7 w-full bg-white rounded-[32px] max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col w-full text-gray-600 max-md:max-w-full">
            <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
              Full Name
            </div>
            <div className="flex-1 shrink gap-2 self-stretch px-6 py-7 mt-2 w-full text-2xl tracking-tight bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
              e.g John Doe
            </div>
          </div>
          <div className="flex flex-col mt-12 w-full text-gray-600 max-md:mt-10 max-md:max-w-full">
            <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
              Phone number
            </div>
            <div className="flex-1 shrink gap-2 self-stretch px-6 py-7 mt-2 w-full text-2xl tracking-tight bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
              +234 XXXX
            </div>
          </div>
          <div className="flex flex-col mt-12 w-full text-3xl tracking-tight leading-none text-gray-600 max-md:mt-10 max-md:max-w-full">
            <div className="flex-1 shrink gap-5 w-full max-md:max-w-full">
              Physical address
            </div>
            <div className="flex gap-2 mt-2 w-full bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:max-w-full" />
          </div>
          <div className="flex flex-col mt-12 w-full text-3xl max-md:mt-10 max-md:max-w-full">
            <div className="flex-1 shrink gap-5 w-full tracking-tight leading-8 text-gray-600 max-md:max-w-full">
              Purpose of the solar equipment (e.g., residential installation,
              commercial project)
            </div>
            <div className="gap-2 self-stretch px-6 py-6 mt-2 w-full text-center text-gray-600 bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
              Residential Installation
            </div>
          </div>
          <div className="flex flex-col mt-12 w-full text-3xl tracking-tight text-gray-600 max-md:mt-10 max-md:max-w-full">
            <div className="flex-1 shrink gap-5 w-full leading-none max-md:max-w-full">
              Select Product
            </div>
            <div className="flex flex-wrap gap-2 items-center px-6 py-6 mt-2 w-full bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/4972aa503fa122e42537fd749ba31886b56bbf5d87964d75bcafd49ba389fa70?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                Search for a product
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-12 w-full text-gray-600 max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl tracking-tight leading-none max-md:max-w-full">
              Repayment Duration
            </div>
            <div className="flex flex-col mt-4 w-full text-2xl tracking-tight leading-none max-md:max-w-full">
              <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
                <div className="flex flex-1 shrink gap-3 items-start self-stretch p-3 my-auto rounded-lg border-2 border-solid basis-0 border-slate-300 min-w-[240px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/c3acded723924bae3c5195102517c96128c3b135d3370c798dcb29ec75d8b017?apiKey=8139d9e03568455ba6696601aab74a9e&"
                    className="object-contain shrink-0 aspect-square w-[30px]"
                  />
                  <div className="flex-1 shrink basis-0">1 month</div>
                </div>
                <div className="flex flex-1 shrink gap-3 items-start self-stretch p-3 my-auto rounded-lg border-2 border-solid basis-0 border-slate-300 min-w-[240px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/858901c600ff88f6f2db8174b3457360e8891885cae9e7db95d14239ac27d75f?apiKey=8139d9e03568455ba6696601aab74a9e&"
                    className="object-contain shrink-0 aspect-square w-[30px]"
                  />
                  <div className="flex-1 shrink basis-0">2 months</div>
                </div>
                <div className="flex flex-1 shrink gap-3 items-start self-stretch p-3 my-auto rounded-lg border-2 border-solid basis-0 border-slate-300 min-w-[240px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/bd61418e1896a5a8e93ef28dd902f1018f472500683c33d7834a99e6e58895f8?apiKey=8139d9e03568455ba6696601aab74a9e&"
                    className="object-contain shrink-0 aspect-square w-[30px]"
                  />
                  <div className="flex-1 shrink basis-0">3 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full text-lg leading-6 text-white whitespace-nowrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="self-stretch px-4 py-6 w-full rounded-2xl bg-zinc-800 min-h-[88px] max-md:max-w-full">
              Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditRequest;
