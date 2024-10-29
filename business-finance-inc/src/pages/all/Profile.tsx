const Profile = () => {
  return (
    <div className="flex flex-col max-w-[899px]">
      <div className="text-4xl font-semibold leading-none text-neutral-900">
        Profile
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex relative flex-col w-full font-semibold leading-none h-[540px] max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a3b0fd01b3114d1fa07e912849bb866c14130dd4ade2ac0a924f4c07f8286f74?apiKey=8139d9e03568455ba6696601aab74a9e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a3b0fd01b3114d1fa07e912849bb866c14130dd4ade2ac0a924f4c07f8286f74?apiKey=8139d9e03568455ba6696601aab74a9e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a3b0fd01b3114d1fa07e912849bb866c14130dd4ade2ac0a924f4c07f8286f74?apiKey=8139d9e03568455ba6696601aab74a9e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a3b0fd01b3114d1fa07e912849bb866c14130dd4ade2ac0a924f4c07f8286f74?apiKey=8139d9e03568455ba6696601aab74a9e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a3b0fd01b3114d1fa07e912849bb866c14130dd4ade2ac0a924f4c07f8286f74?apiKey=8139d9e03568455ba6696601aab74a9e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a3b0fd01b3114d1fa07e912849bb866c14130dd4ade2ac0a924f4c07f8286f74?apiKey=8139d9e03568455ba6696601aab74a9e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a3b0fd01b3114d1fa07e912849bb866c14130dd4ade2ac0a924f4c07f8286f74?apiKey=8139d9e03568455ba6696601aab74a9e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/a3b0fd01b3114d1fa07e912849bb866c14130dd4ade2ac0a924f4c07f8286f74?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain z-0 self-center max-w-full aspect-square rounded-[600px] w-[306px]"
          />
          <div className="z-0 mt-6 text-5xl text-center text-neutral-900 max-md:max-w-full max-md:text-4xl">
            Oluchukwu Isioma
          </div>
          <div className="z-0 mt-6 text-3xl font-medium leading-10 text-center text-gray-600 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Turpis posuere tincidunt in
            ut amet gravida.
          </div>
          <div className="overflow-hidden gap-2.5 self-center px-4 py-2.5 mt-6 text-2xl text-white bg-green-500 rounded-lg">
            Edit profile
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/c9abd6b298de38caf4766813dd00ce21ac8cfbd57bb0ef809bdfee16e9e221ba?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain absolute z-0 w-12 h-12 aspect-square left-[395px] top-[206px]"
          />
        </div>
        <div className="flex flex-col mt-16 w-full h-[704px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-4xl font-semibold leading-none text-gray-600 basis-16 max-md:max-w-full">
                  Personal Information
                </div>
                <div className="overflow-hidden self-stretch px-8 py-7 my-auto text-3xl font-medium leading-none text-center whitespace-nowrap bg-white rounded-xl border-2 border-solid border-black border-opacity-10 text-neutral-800 max-md:px-5">
                  Edit
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-12 w-full font-medium text-gray-600 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
                  Full Name
                </div>
                <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl tracking-tight bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                  Jon Doe
                </div>
              </div>
              <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
                  Phone Number
                </div>
                <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl tracking-tight whitespace-nowrap bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                  07030956001
                </div>
              </div>
              <div className="flex flex-col mt-12 w-full whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
                  Email
                </div>
                <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl tracking-tight bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                  example@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-12 w-full min-h-[72px] max-md:mt-10 max-md:max-w-full" />
        </div>
        <div className="flex flex-col mt-12 w-full min-h-[624px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
                <div className="flex-1 shrink self-stretch my-auto text-4xl font-semibold leading-none text-gray-600 basis-16 max-md:max-w-full">
                  Business Information
                </div>
                <div className="overflow-hidden self-stretch px-8 py-7 my-auto text-3xl font-medium leading-none text-center whitespace-nowrap bg-white rounded-xl border-2 border-solid border-black border-opacity-10 text-neutral-800 max-md:px-5">
                  Edit
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-12 w-full font-medium text-gray-600 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
                  Registered Business Name
                </div>
                <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl tracking-tight bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                  Solar Financing Inc
                </div>
              </div>
              <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
                  CAC Number
                </div>
                <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl tracking-tight whitespace-nowrap bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                  RC12345678
                </div>
              </div>
              <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
                  Physical Store Address
                </div>
                <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl tracking-tight bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                  219, Herbert Macaulay Yaba
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-16 w-full min-h-[624px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
              <div className="flex-1 shrink self-stretch my-auto text-4xl font-semibold leading-none text-gray-600 basis-16 max-md:max-w-full">
                Bank Information
              </div>
              <div className="overflow-hidden self-stretch px-8 py-7 my-auto text-3xl font-medium leading-none text-center whitespace-nowrap bg-white rounded-xl border-2 border-solid border-black border-opacity-10 text-neutral-800 max-md:px-5">
                Edit
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-12 w-full font-medium text-gray-600 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
                Bank Name
              </div>
              <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl tracking-tight bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                Access Bank
              </div>
            </div>
            <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
                Account Number
              </div>
              <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl tracking-tight whitespace-nowrap bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                0698457432
              </div>
            </div>
            <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex-1 shrink gap-5 w-full text-3xl tracking-tight leading-none max-md:max-w-full">
                Bank Verification Number
              </div>
              <div className="flex-1 shrink gap-2 self-stretch px-6 py-5 mt-2 w-full text-3xl tracking-tight whitespace-nowrap bg-white rounded-xl border-2 border-solid border-slate-300 min-h-[88px] max-md:px-5 max-md:max-w-full">
                22212345678
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
