const PaymentPlan = () => {
  return (
    <div className="flex flex-col max-w-[899px]">
      <div className="flex flex-wrap gap-6 items-start w-full text-4xl font-semibold leading-none max-md:max-w-full">
        <div className="text-neutral-900 w-[743px] max-md:max-w-full">
          Payment Plan
        </div>
        <div className="flex flex-1 shrink gap-2 justify-center items-center text-center whitespace-nowrap basis-0 text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/60ded9fa2c03f0e8614736a4bf1f87f70c7ce2a7c3296c56d211099d8864739e?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto">Back</div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex relative justify-center items-start self-center max-w-full text-center text-gray-600 w-[286px]">
            <div className="flex z-0 shrink-0 my-auto bg-white rounded-full border-yellow-400 border-solid aspect-square border-[24px] h-[286px] min-w-[240px] w-[286px]" />
            <div className="flex absolute z-0 flex-col items-center self-start bottom-[67px] right-[43px]">
              <div className="text-3xl font-medium">Active Credit </div>
              <div className="mt-2 text-4xl font-semibold leading-none text-zinc-800">
                ₦ 862,500{" "}
              </div>
              <div className="flex gap-1 justify-center items-center mt-2 text-2xl">
                <div className="self-stretch my-auto">View details</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/4809c080be6f79e6bc4434df5c23435ce92c00b342a9c4e802d4de44df1f8942?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-28 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full rounded-[32px] max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
                    <div className="flex-1 shrink self-stretch my-auto text-4xl font-semibold leading-none basis-16 text-zinc-800 max-md:max-w-full">
                      Payment Schedule
                    </div>
                    <div className="overflow-hidden self-stretch px-8 py-2 my-auto text-3xl font-medium leading-none text-center whitespace-nowrap bg-white rounded-xl border-2 border-solid border-black border-opacity-10 text-neutral-800 max-md:px-5">
                      Edit
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full font-medium text-gray-600 max-md:max-w-full">
                  <div className="text-3xl tracking-tight leading-none max-md:max-w-full">
                    How often do you want to repay?
                  </div>
                  <div className="flex flex-col mt-4 w-full text-2xl tracking-tight leading-none whitespace-nowrap max-md:max-w-full">
                    <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
                      <div className="flex flex-1 shrink gap-3 items-start self-stretch p-3 my-auto rounded-lg border-2 border-solid basis-0 border-slate-300 min-w-[240px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/f440ef9170aa0b3bd777b4834569e0715b2f8bddaf23898666c57864bd3e0b31?apiKey=8139d9e03568455ba6696601aab74a9e&"
                          className="object-contain shrink-0 aspect-square w-[30px]"
                        />
                        <div className="flex-1 shrink basis-0">Weekly</div>
                      </div>
                      <div className="flex flex-1 shrink gap-3 items-start self-stretch p-3 my-auto rounded-lg border-2 border-solid basis-0 border-slate-300 min-w-[240px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/f440ef9170aa0b3bd777b4834569e0715b2f8bddaf23898666c57864bd3e0b31?apiKey=8139d9e03568455ba6696601aab74a9e&"
                          className="object-contain shrink-0 aspect-square w-[30px]"
                        />
                        <div className="flex-1 shrink basis-0">Bi-weekly</div>
                      </div>
                      <div className="flex flex-1 shrink gap-3 items-start self-stretch p-3 my-auto rounded-lg border-2 border-solid basis-0 border-slate-300 min-w-[240px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/412348b26230e12f810df6ba48e67ee1a7540b36d4b8c9d8087177610d242ddd?apiKey=8139d9e03568455ba6696601aab74a9e&"
                          className="object-contain shrink-0 aspect-square w-[30px]"
                        />
                        <div className="flex-1 shrink basis-0">Monthly</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-12 w-full font-medium max-md:mt-10 max-md:max-w-full">
                <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none text-gray-600 max-md:max-w-full">
                  How much will you be repaying?
                </div>
                <div className="flex flex-wrap gap-2 items-center px-6 py-px mt-2 w-full whitespace-nowrap bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-2 items-center self-stretch my-auto text-3xl border-r-2 border-slate-400 min-h-[86px] text-neutral-900 w-[136px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/7a7cc6f06b9e09ccd2fd3be5879684750c6e7617daa0bb344daeb63fd7c850e7?apiKey=8139d9e03568455ba6696601aab74a9e&"
                      className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
                    />
                    <div className="self-stretch my-auto w-[84px]">NGN</div>
                  </div>
                  <div className="self-stretch my-auto text-3xl text-center text-gray-600 w-[194px]">
                    287,500
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-semibold leading-none text-zinc-800 max-md:max-w-full">
                Pending Instalments
              </div>
              <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex gap-8 items-center px-8 py-4 w-full rounded-2xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                      <div className="flex flex-col self-stretch my-auto text-3xl min-w-[240px] w-[593px] max-md:max-w-full">
                        <div className="font-medium text-zinc-800">
                          Govt House Installation
                        </div>
                        <div className="mt-2 font-semibold leading-none text-neutral-900">
                          287,500
                        </div>
                        <div className="flex gap-2 items-start self-start mt-2 text-2xl text-gray-600">
                          <div className="w-[292px]">
                            <span className="text-red-500">Due date</span>: 5
                            June, 2024
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/717fc3d3c2fdb1fd35dd6e9f6a34d21a004855cf49a8c4edcdd44c916a7d7bf2?apiKey=8139d9e03568455ba6696601aab74a9e&"
                            className="object-contain shrink-0 w-8 aspect-square"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 shrink self-stretch my-auto text-sm font-semibold leading-5 text-white basis-0">
                        <div className="flex flex-col w-full">
                          <div className="self-stretch p-4 max-w-full rounded-2xl bg-zinc-800 w-[196px]">
                            Pay Now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                  <div className="flex gap-8 items-center px-8 py-4 w-full rounded-2xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                      <div className="flex flex-col self-stretch my-auto text-3xl min-w-[240px] w-[593px] max-md:max-w-full">
                        <div className="font-medium text-zinc-800">
                          Govt House Installation
                        </div>
                        <div className="mt-2 font-semibold leading-none text-neutral-900">
                          287,500
                        </div>
                        <div className="flex gap-2 items-start self-start mt-2 text-2xl text-gray-600">
                          <div className="w-[292px]">
                            <span className="text-red-500">Due date</span>: 5
                            May, 2024
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a4d8cd4f6e61e677760044a1c13c1318f1a4cd2479e8a6f43988b4c8e44da02e?apiKey=8139d9e03568455ba6696601aab74a9e&"
                            className="object-contain shrink-0 w-8 aspect-square"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 shrink self-stretch my-auto text-sm font-semibold leading-5 text-white basis-0">
                        <div className="flex flex-col w-full">
                          <div className="self-stretch p-4 max-w-full bg-gray-400 rounded-2xl w-[196px]">
                            Pay Now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                  <div className="flex gap-8 items-center px-8 py-4 w-full rounded-2xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                      <div className="flex flex-col self-stretch my-auto text-3xl min-w-[240px] w-[593px] max-md:max-w-full">
                        <div className="font-medium text-zinc-800">
                          Govt House Installation
                        </div>
                        <div className="mt-2 font-semibold leading-none text-neutral-900">
                          287,500
                        </div>
                        <div className="flex gap-2 items-start self-start mt-2 text-2xl text-gray-600">
                          <div className="w-[292px]">
                            <span className="text-red-500">Due date</span>: 5
                            April, 2024
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a4d8cd4f6e61e677760044a1c13c1318f1a4cd2479e8a6f43988b4c8e44da02e?apiKey=8139d9e03568455ba6696601aab74a9e&"
                            className="object-contain shrink-0 w-8 aspect-square"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 shrink self-stretch my-auto text-sm font-semibold leading-5 text-white basis-0">
                        <div className="flex flex-col w-full">
                          <div className="self-stretch p-4 max-w-full bg-gray-400 rounded-2xl w-[196px]">
                            Pay Now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
