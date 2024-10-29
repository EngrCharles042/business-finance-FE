const Settings = () => {
  return (
    <div className="flex flex-col max-w-[899px]">
      <div className="text-4xl font-semibold leading-none text-neutral-900">
        Settings
      </div>
      <div className="flex flex-col mt-16 w-full text-3xl font-medium text-gray-600 max-md:mt-10 max-md:max-w-full">
        <div className="self-start text-4xl font-semibold leading-none text-neutral-900">
          Notifications
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-3 w-full max-md:max-w-full">
          <div className="my-auto max-md:max-w-full">
            Enable app notification
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/426978a020f393542635d064830483d66cad56eb4b88dee8cc2173e1718fbe68?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 aspect-[1.02] w-[65px]"
          />
        </div>
        <div className="flex flex-wrap gap-10 items-center mt-4 w-full h-[50px] max-md:max-w-full">
          <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
            Enable e-mail notification
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/84bc31838c4929ea4f660544ae014928d158109078d49b1210bf8c33137ff88c?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
          />
        </div>
        <div className="mt-12 w-full border-2 border-black border-solid min-h-[2px] max-md:mt-10 max-md:max-w-full" />
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10">
        <div className="text-4xl font-semibold leading-none text-neutral-900">
          Account
        </div>
        <div className="flex relative flex-col mt-3 w-full text-3xl font-medium text-gray-600">
          <div className="flex relative z-0 flex-col items-start w-full max-md:max-w-full">
            <div className="gap-8 self-stretch max-w-full w-[448px] max-md:max-w-full">
              Change Password
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/9b9d1c001b3ebfb8882fb5b388163bf57aadeb5104bd6bc8edd9d6d77d72bad7?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain absolute bottom-0 right-0.5 z-0 w-12 h-12 aspect-square"
            />
          </div>
          <div className="flex relative z-0 flex-col items-start mt-4 w-full max-md:max-w-full">
            <div className="gap-8 self-stretch max-w-full w-[462px] max-md:max-w-full">
              User feedback
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/9b9d1c001b3ebfb8882fb5b388163bf57aadeb5104bd6bc8edd9d6d77d72bad7?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain absolute right-0 bottom-0 z-0 w-12 h-12 aspect-square"
            />
          </div>
          <div className="flex z-0 flex-col items-start mt-4 w-full max-md:max-w-full">
            <div className="gap-8 self-stretch max-w-full w-[462px] max-md:max-w-full">
              Deactivate account
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/9b9d1c001b3ebfb8882fb5b388163bf57aadeb5104bd6bc8edd9d6d77d72bad7?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain absolute right-0 z-0 w-12 h-12 aspect-square bottom-[62px]"
          />
          <div className="flex relative z-0 flex-col items-start mt-4 w-full max-md:max-w-full">
            <div className="gap-8 self-stretch max-w-full w-[462px] max-md:max-w-full">
              Delete account
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/9b9d1c001b3ebfb8882fb5b388163bf57aadeb5104bd6bc8edd9d6d77d72bad7?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain absolute bottom-0 -right-0.5 z-0 w-12 h-12 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
