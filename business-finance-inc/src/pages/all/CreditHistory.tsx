const CreditHistory = () => {
  return (
    // <div className="flex flex-col justify-center max-w-[899px]">
    //   <div className="flex flex-wrap gap-6 items-start w-full text-4xl font-semibold leading-none max-md:max-w-full">
    //     <div className="text-neutral-900 w-[743px] max-md:max-w-full">
    //       Credit History{" "}
    //     </div>
    //     <div className="flex flex-1 shrink gap-2 justify-center items-center text-center whitespace-nowrap basis-0 text-zinc-800">
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/608a227068dabfc4716e67405fce788f1b1fb5f4b9a9038cdb257904f07473da?apiKey=8139d9e03568455ba6696601aab74a9e&"
    //         className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
    //       />
    //       <div className="self-stretch my-auto">Back</div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col justify-center items-center mt-64 w-full text-3xl font-medium text-gray-600 max-md:mt-10 max-md:max-w-full">
    //     <div className="flex flex-col pt-12 max-w-full rounded-none w-[325px]">
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/b90edf364c7adae2ac74e9f27f4e718137f5e13d2b31cfa39991ca738a4c7a74?apiKey=8139d9e03568455ba6696601aab74a9e&"
    //         className="object-contain self-center max-w-full aspect-[1.02] fill-gray-400 w-[242px]"
    //       />
    //       <div className="flex shrink-0 mt-3 w-full rounded-full bg-gray-400 bg-opacity-10 h-[19px] max-md:mr-1.5" />
    //       <div className="mt-8 ml-7 max-md:ml-2.5">No transactions yet</div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col max-w-[899px]">
      <div className="flex flex-wrap gap-6 items-start w-full text-4xl font-semibold leading-none max-md:max-w-full">
        <div className="text-neutral-900 w-[743px] max-md:max-w-full">
          Credit History{" "}
        </div>
        <div className="flex flex-1 shrink gap-2 justify-center items-center text-center whitespace-nowrap basis-0 text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/be69a09e3fc7269e918ac3358145d42a02114bbe3f0349f25486023198b17aae?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto">Back</div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col items-start w-full text-3xl font-medium text-zinc-800 max-md:max-w-full">
            <div className="flex gap-2 justify-center items-center px-4 py-2 border-4 border-solid border-zinc-800 rounded-[64px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/1ec2468c423a7d5604f62caabe914fa2d69a275c52354caf7aaa72c7928eff3b?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="self-stretch my-auto">Add Filter</div>
            </div>
          </div>
          <div className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-8 items-center px-8 py-4 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/bdc073f7f0aded5bf83970d99c9bf083822c808c4d435bb3b4fad65005c74321?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
                />
                <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="text-3xl font-medium text-zinc-800">
                      Monthly Credit Instalment
                    </div>
                    <div className="mt-2 text-2xl text-gray-600">
                      5 Jan, 2024
                    </div>
                  </div>
                  <div className="self-stretch my-auto text-3xl font-medium text-neutral-900 w-[130px]">
                    50,000
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 items-center px-8 py-4 mt-4 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/bdc073f7f0aded5bf83970d99c9bf083822c808c4d435bb3b4fad65005c74321?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
                />
                <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="text-3xl font-medium text-zinc-800">
                      Monthly Credit Instalment
                    </div>
                    <div className="mt-2 text-2xl text-gray-600">
                      5 Jan, 2024
                    </div>
                  </div>
                  <div className="self-stretch my-auto text-3xl font-medium text-neutral-900 w-[130px]">
                    50,000
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 items-center px-8 py-4 mt-4 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/bdc073f7f0aded5bf83970d99c9bf083822c808c4d435bb3b4fad65005c74321?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
                />
                <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="text-3xl font-medium text-zinc-800">
                      Monthly Credit Instalment
                    </div>
                    <div className="mt-2 text-2xl text-gray-600">
                      5 Jan, 2024
                    </div>
                  </div>
                  <div className="self-stretch my-auto text-3xl font-medium text-neutral-900 w-[130px]">
                    50,000
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 items-center px-8 py-4 mt-4 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/7f0892ab9d3e5e26dc7c416520d48b9d147b48b01e04882c2a2ac09571ebb3b7?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
                />
                <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="text-3xl font-medium text-zinc-800">
                      Credit Approved
                    </div>
                    <div className="mt-2 text-2xl text-gray-600">
                      5 Jan, 2024
                    </div>
                  </div>
                  <div className="self-stretch my-auto text-3xl font-medium text-neutral-900 w-[130px]">
                    750,000
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 items-center px-8 py-4 mt-4 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/bdc073f7f0aded5bf83970d99c9bf083822c808c4d435bb3b4fad65005c74321?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
                />
                <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="text-3xl font-medium text-zinc-800">
                      Monthly Credit Instalment
                    </div>
                    <div className="mt-2 text-2xl text-gray-600">
                      5 Jan, 2024
                    </div>
                  </div>
                  <div className="self-stretch my-auto text-3xl font-medium text-neutral-900 w-[130px]">
                    50,000
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 items-center px-8 py-4 mt-4 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/7f0892ab9d3e5e26dc7c416520d48b9d147b48b01e04882c2a2ac09571ebb3b7?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
                />
                <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="text-3xl font-medium text-zinc-800">
                      Credit Approved
                    </div>
                    <div className="mt-2 text-2xl text-gray-600">
                      5 Jan, 2024
                    </div>
                  </div>
                  <div className="self-stretch my-auto text-3xl font-medium text-neutral-900 w-[130px]">
                    750,000
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 items-center px-8 py-4 mt-4 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/7f0892ab9d3e5e26dc7c416520d48b9d147b48b01e04882c2a2ac09571ebb3b7?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
                />
                <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="text-3xl font-medium text-zinc-800">
                      Credit Approved
                    </div>
                    <div className="mt-2 text-2xl text-gray-600">
                      5 Jan, 2024
                    </div>
                  </div>
                  <div className="self-stretch my-auto text-3xl font-medium text-neutral-900 w-[130px]">
                    750,000
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 items-center px-8 py-4 mt-4 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/bdc073f7f0aded5bf83970d99c9bf083822c808c4d435bb3b4fad65005c74321?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
                />
                <div className="flex flex-wrap flex-1 shrink gap-10 justify-center items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="text-3xl font-medium text-zinc-800">
                      Monthly Credit Instalment
                    </div>
                    <div className="mt-2 text-2xl text-gray-600">
                      5 Jan, 2024
                    </div>
                  </div>
                  <div className="self-stretch my-auto text-3xl font-medium text-neutral-900 w-[130px]">
                    50,000
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center mt-14 text-4xl font-semibold leading-none text-red-500 max-md:mt-10">
              Clear all
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditHistory;
