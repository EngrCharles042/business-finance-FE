const OfferSummary = () => {
  return (
    <div className="flex flex-col max-w-[899px]">
      <div className="flex flex-wrap gap-6 items-start w-full text-4xl font-semibold leading-none max-md:max-w-full">
        <div className="text-neutral-900 w-[743px] max-md:max-w-full">
          Credit Request
        </div>
        <div className="flex flex-1 shrink gap-2 justify-center items-center text-center whitespace-nowrap basis-0 text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/28f9028b4dc297a2d7ac683fb95660950f55bfae1b4108fe3dfb9a86c6467fa5?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto">Back</div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full text-3xl font-medium leading-10 min-h-[100px] text-zinc-800 w-[706px]">
          <div className="w-full min-h-[100px] max-md:max-w-full">
            <span className="font-bold">Offer summary:</span>
            <br />
            <span className="text-3xl leading-10">
              Total cost of solar product
            </span>
            <br />
          </div>
        </div>
        <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col w-full text-3xl font-medium text-gray-600 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-10 items-start w-full tracking-tight leading-none max-md:max-w-full">
                  <div className="flex-1 shrink basis-0">Interest Amount</div>
                  <div className="flex-1 shrink basis-0">15% of Credit</div>
                </div>
                <div className="flex flex-wrap gap-10 items-start mt-8 w-full tracking-tight leading-none max-md:max-w-full">
                  <div className="flex-1 shrink basis-0">
                    Monthly Loan Interest
                  </div>
                  <div className="flex-1 shrink basis-0">5% </div>
                </div>
                <div className="flex flex-wrap gap-10 items-start mt-8 w-full max-md:max-w-full">
                  <div className="flex-1 shrink basis-0">Management fee</div>
                  <div className="flex-1 shrink basis-0">1% of total cost</div>
                </div>
                <div className="flex flex-wrap gap-10 items-start mt-8 w-full max-md:max-w-full">
                  <div className="flex-1 shrink basis-0">Contributing cost</div>
                  <div className="flex-1 shrink tracking-tight leading-none basis-0">
                    30% of total cost
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-2 mt-14 max-w-full text-2xl rounded-2xl w-[698px] max-md:mt-10">
              <div className="flex-1 shrink w-full text-3xl font-medium text-zinc-800 max-md:max-w-full">
                Choose delivery or pickup
              </div>
              <div className="flex flex-wrap gap-2 items-center mt-4 w-full leading-none whitespace-nowrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/3691e38872e15a3f168c2a3a210661ca0edabc562360939f0e5ff4102dcd6db7?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                />
                <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                  Pickup
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center mt-4 w-full leading-none whitespace-nowrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/830c41c321b199831e1c1a74eaa111885dc5927278b32a7dd42e7b90aaadb028?apiKey=8139d9e03568455ba6696601aab74a9e&"
                  className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                />
                <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                  Delivery
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
                <div className="flex-1 shrink basis-0">Delivery Cost</div>
                <div className="flex-1 shrink tracking-tight leading-none basis-0">
                  x
                </div>
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-8 w-full max-md:max-w-full">
                <div className="flex-1 shrink basis-0">Total Cost</div>
                <div className="flex-1 shrink tracking-tight leading-none basis-0">
                  x
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-28 w-full text-lg font-semibold leading-6 whitespace-nowrap h-[206px] max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full text-neutral-100 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="self-stretch px-4 py-6 w-full rounded-2xl bg-zinc-800 min-h-[88px] max-md:max-w-full">
                  Accept
                </div>
              </div>
            </div>
            <div className="self-stretch px-4 py-6 mt-8 w-full rounded-2xl border-4 border-solid border-zinc-800 min-h-[88px] text-zinc-800 max-md:max-w-full">
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSummary;
