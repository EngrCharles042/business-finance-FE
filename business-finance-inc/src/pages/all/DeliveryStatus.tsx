const DeliveryStatus = () => {
  return (
    <div className="flex flex-col max-w-[899px]">
      <div className="flex flex-wrap gap-6 items-start w-full text-4xl font-semibold leading-none max-md:max-w-full">
        <div className="text-neutral-900 w-[743px] max-md:max-w-full">
          Delivery Status
        </div>
        <div className="flex flex-1 shrink gap-2 justify-center items-center text-center whitespace-nowrap basis-0 text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/8deb60fde285296f996a9cf26d72b8e71729a54004c84fdde05ca40bc237e81f?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto">Back</div>
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-start w-full text-zinc-800 max-md:max-w-full">
          <div className="flex flex-col items-start pr-11 max-w-full rounded-none w-[410px] max-md:pr-5">
            <div className="text-3xl font-medium">Estimated Delivery Time</div>
            <div className="z-10 -mt-1 text-3xl">3-5 working days</div>
          </div>
        </div>
        <div className="flex relative flex-col items-start mt-12 w-full font-medium border-2 border-gray-400 border-solid min-h-[720px] rounded-[32px] max-md:mt-10 max-md:max-w-full">
          <div className="flex absolute z-0 gap-4 justify-center items-center text-3xl left-[41px] text-neutral-900 top-[47px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a473879141513bbbb04fb8eaaa62544ca2cd10c92052d15e95c6409b1d309e97?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
            <div className="self-stretch my-auto">Credit Approved</div>
          </div>
          <div className="flex absolute z-0 gap-4 justify-center items-center text-3xl left-[41px] text-neutral-900 top-[47px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a473879141513bbbb04fb8eaaa62544ca2cd10c92052d15e95c6409b1d309e97?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
            <div className="self-stretch my-auto">Credit Approved</div>
          </div>
          <div className="flex absolute z-0 gap-4 justify-center items-center text-3xl text-gray-600 left-[41px] top-[223px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/ba31977c1e96ec6e331e79c7fc41b89128fc3b2a25b809763ea3c9f9931b7dff?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
            <div className="self-stretch my-auto">Product Processed</div>
          </div>
          <div className="flex absolute z-0 gap-4 justify-center items-center text-3xl text-gray-600 left-[41px] top-[223px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/ba31977c1e96ec6e331e79c7fc41b89128fc3b2a25b809763ea3c9f9931b7dff?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
            <div className="self-stretch my-auto">Product Processed</div>
          </div>
          <div className="flex absolute z-0 gap-4 justify-center items-center text-3xl text-gray-600 bottom-[273px] left-[41px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/ba31977c1e96ec6e331e79c7fc41b89128fc3b2a25b809763ea3c9f9931b7dff?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
            <div className="self-stretch my-auto">Ready for Delivery</div>
          </div>
          <div className="absolute top-24 z-0 h-9 text-2xl text-gray-400 left-[98px] w-[574px] max-md:max-w-full">
            Your credit application has been approved
          </div>
          <div className="absolute top-24 z-0 h-9 text-2xl text-gray-400 left-[98px] w-[574px] max-md:max-w-full">
            Your credit application has been approved
          </div>
          <div className="absolute z-0 h-9 text-2xl text-gray-400 left-[98px] top-[272px] w-[574px] max-md:max-w-full">
            We are arranging your product
          </div>
          <div className="absolute z-0 h-9 text-2xl text-gray-400 left-[98px] top-[272px] w-[574px] max-md:max-w-full">
            We are arranging your product
          </div>
          <div className="absolute z-0 h-9 text-2xl text-gray-400 bottom-[236px] left-[98px] w-[574px] max-md:max-w-full">
            Your product is on its way to you
          </div>
          <div className="absolute z-0 w-0 bg-gray-400 border-2 border-gray-400 border-dashed h-[140px] left-[60px] min-h-[140px] top-[88px]" />
          <div className="absolute z-0 w-0 bg-gray-400 border-2 border-gray-400 border-dashed h-[140px] left-[60px] min-h-[140px] top-[88px]" />
          <div className="absolute z-0 w-0 bg-gray-400 border-2 border-gray-400 border-dashed h-[140px] left-[60px] min-h-[140px] top-[266px]" />
          <div className="absolute z-0 w-0 bg-gray-400 border-2 border-gray-400 border-dashed h-[140px] left-[60px] min-h-[140px] top-[266px]" />
          <div className="flex absolute z-0 flex-col pr-20 max-w-full bottom-[60px] h-[220px] left-[42px] w-[592px] max-md:pr-5">
            <div className="z-10 shrink-0 ml-5 w-0.5 bg-gray-400 border-2 border-gray-400 border-dashed h-[140px] max-md:ml-2.5" />
            <div className="flex gap-4 justify-center items-center text-3xl text-gray-600 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/dba354271c0456c20ec4c5a76a0b8a7fbda81585b791fe2c458ccf290941866d?apiKey=8139d9e03568455ba6696601aab74a9e&"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="self-stretch my-auto">Delivered</div>
            </div>
            <div className="ml-14 text-2xl text-gray-400 max-md:ml-2.5">
              Your product has been delivered
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
