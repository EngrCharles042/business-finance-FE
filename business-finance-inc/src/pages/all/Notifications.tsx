const Notifications = () => {
  return (
    // <div className="flex flex-col justify-center max-w-[899px]">
    //   <div className="flex flex-wrap gap-6 items-start w-full text-4xl font-semibold leading-none whitespace-nowrap max-md:max-w-full">
    //     <div className="text-neutral-900 w-[743px] max-md:max-w-full">
    //       Notifications
    //     </div>
    //     <div className="flex flex-1 shrink gap-2 justify-center items-center text-center basis-0 text-zinc-800">
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/d91ba0f2fdd20599a0573b7dbe2aed8336676a885972e4a390633a0d9b3e16d4?apiKey=8139d9e03568455ba6696601aab74a9e&"
    //         className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
    //       />
    //       <div className="self-stretch my-auto">Back</div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col justify-center items-center mt-64 w-full text-3xl font-medium text-gray-600 max-md:mt-10 max-md:max-w-full">
    //     <div className="flex flex-col pt-16 max-w-full rounded-none w-[360px]">
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/aa1ed01672cf128ae267e66334ea82f491ab406a33c0f48e3cbc9d093d2900a8?apiKey=8139d9e03568455ba6696601aab74a9e&"
    //         className="object-contain self-center ml-5 max-w-full aspect-[1.1] fill-gray-400 w-[255px]"
    //       />
    //       <div className="flex shrink-0 mt-11 rounded-full bg-gray-400 bg-opacity-10 h-[22px] max-md:mt-10" />
    //       <div className="mt-12 mr-8 ml-7 max-md:mx-2.5 max-md:mt-10">
    //         No notifications yet
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col max-w-[899px]">
      <div className="flex flex-wrap gap-6 items-start w-full text-4xl font-semibold leading-none whitespace-nowrap max-md:max-w-full">
        <div className="text-neutral-900 w-[743px] max-md:max-w-full">
          Notifications
        </div>
        <div className="flex flex-1 shrink gap-2 justify-center items-center text-center basis-0 text-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/135158f163780ee7109cdbdf08b1959632f322c2cc9eb2d0647fd42897f6d508?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto">Back</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-start mt-16 w-full text-2xl font-semibold text-zinc-800 max-md:mt-10 max-md:max-w-full">
        <div className="flex-1 shrink basis-0 max-md:max-w-full">
          mark all as read
        </div>
        <div>You have 4 unread messages</div>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full font-medium max-md:max-w-full">
          <div className="flex flex-wrap gap-4 w-full max-md:max-w-full">
            <div className="flex shrink-0 self-start mt-5 w-4 h-4 bg-red-700 rounded-full fill-red-700" />
            <div className="flex flex-col grow shrink-0 pb-4 border-b-2 basis-0 border-gray-400 border-opacity-40 min-h-[124px] w-fit max-md:max-w-full">
              <div className="gap-5 self-start text-3xl text-zinc-800 max-md:max-w-full">
                Your loan request has been approved.{" "}
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-4 w-full text-2xl max-md:max-w-full">
                <div className="flex-1 shrink text-gray-600 basis-0 max-md:max-w-full">
                  5 Jan, 2024
                </div>
                <div className="text-gray-400 w-[82px]">View</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 w-full max-md:max-w-full">
            <div className="flex shrink-0 self-start mt-5 w-4 h-4 bg-gray-500 rounded-full" />
            <div className="flex flex-col grow shrink-0 pb-4 border-b-2 basis-0 border-gray-400 border-opacity-40 min-h-[124px] w-fit max-md:max-w-full">
              <div className="gap-5 self-start text-3xl text-zinc-800 max-md:max-w-full">
                Your password has been changed.{" "}
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-4 w-full text-2xl max-md:max-w-full">
                <div className="flex-1 shrink text-gray-600 basis-0 max-md:max-w-full">
                  5 Jan, 2024
                </div>
                <div className="text-gray-400 w-[82px]">View</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 w-full max-md:max-w-full">
            <div className="flex shrink-0 self-start mt-5 w-4 h-4 bg-gray-500 rounded-full" />
            <div className="flex flex-col grow shrink-0 pb-4 border-b-2 basis-0 border-gray-400 border-opacity-40 min-h-[124px] w-fit max-md:max-w-full">
              <div className="gap-5 self-start text-3xl text-zinc-800 max-md:max-w-full">
                Your loan payment is due today.{" "}
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-4 w-full text-2xl max-md:max-w-full">
                <div className="flex-1 shrink text-gray-600 basis-0 max-md:max-w-full">
                  5 Jan, 2024
                </div>
                <div className="text-gray-400 w-[82px]">View</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 w-full max-md:max-w-full">
            <div className="flex shrink-0 self-start mt-5 w-4 h-4 bg-red-700 rounded-full fill-red-700" />
            <div className="flex flex-col grow shrink-0 pb-4 border-b-2 basis-0 border-gray-400 border-opacity-40 w-fit max-md:max-w-full">
              <div className="flex-1 shrink gap-5 w-full text-3xl text-zinc-800 max-md:max-w-full">
                You have exhausted 80% of your credit limit.{" "}
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-4 w-full text-2xl max-md:max-w-full">
                <div className="flex-1 shrink text-gray-600 basis-0 max-md:max-w-full">
                  5 Jan, 2024
                </div>
                <div className="text-gray-400 w-[82px]">View</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 w-full max-md:max-w-full">
            <div className="flex shrink-0 self-start mt-5 w-4 h-4 bg-gray-500 rounded-full" />
            <div className="flex flex-col grow shrink-0 pb-4 border-b-2 basis-0 border-gray-400 border-opacity-40 min-h-[124px] w-fit max-md:max-w-full">
              <div className="gap-5 self-start text-3xl text-zinc-800 max-md:max-w-full">
                Your password has been changed.{" "}
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-4 w-full text-2xl max-md:max-w-full">
                <div className="flex-1 shrink text-gray-600 basis-0 max-md:max-w-full">
                  5 Jan, 2024
                </div>
                <div className="text-gray-400 w-[82px]">View</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 w-full max-md:max-w-full">
            <div className="flex shrink-0 self-start mt-5 w-4 h-4 bg-red-700 rounded-full fill-red-700" />
            <div className="flex flex-col grow shrink-0 pb-4 border-b-2 basis-0 border-gray-400 border-opacity-40 min-h-[124px] w-fit max-md:max-w-full">
              <div className="gap-5 self-start text-3xl text-zinc-800 max-md:max-w-full">
                Your password has been changed.{" "}
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-4 w-full text-2xl max-md:max-w-full">
                <div className="flex-1 shrink text-gray-600 basis-0 max-md:max-w-full">
                  5 Jan, 2024
                </div>
                <div className="text-gray-400 w-[82px]">View</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 w-full max-md:max-w-full">
            <div className="flex shrink-0 self-start mt-5 w-4 h-4 bg-red-700 rounded-full fill-red-700" />
            <div className="flex flex-col grow shrink-0 pb-4 border-b-2 basis-0 border-gray-400 border-opacity-40 min-h-[124px] w-fit max-md:max-w-full">
              <div className="gap-5 self-start text-3xl text-zinc-800 max-md:max-w-full">
                Your password has been changed.{" "}
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-4 w-full text-2xl max-md:max-w-full">
                <div className="flex-1 shrink text-gray-600 basis-0 max-md:max-w-full">
                  5 Jan, 2024
                </div>
                <div className="text-gray-400 w-[82px]">View</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-5 w-full max-md:max-w-full">
            <div className="flex shrink-0 self-start mt-5 w-4 h-4 bg-gray-500 rounded-full" />
            <div className="flex flex-col grow shrink-0 pb-4 border-b-2 basis-0 border-gray-400 border-opacity-40 min-h-[124px] w-fit max-md:max-w-full">
              <div className="gap-5 self-start text-3xl text-zinc-800 max-md:max-w-full">
                Your password has been changed.{" "}
              </div>
              <div className="flex flex-wrap gap-10 items-start mt-4 w-full text-2xl max-md:max-w-full">
                <div className="flex-1 shrink text-gray-600 basis-0 max-md:max-w-full">
                  5 Jan, 2024
                </div>
                <div className="text-gray-400 w-[82px]">View</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-16 text-4xl font-semibold leading-none text-red-500 max-md:mt-10">
          Clear all
        </div>
      </div>
    </div>
  );
};

export default Notifications;
