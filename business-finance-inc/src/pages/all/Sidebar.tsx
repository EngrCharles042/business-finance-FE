
const SideBar = () => {
  return (
<div className="flex flex-col items-start border-r border-solid opacity-80 border-r-gray-400 max-w-[278px]">
      <div className="flex flex-col max-w-full w-[254px]">
        <div className="flex gap-10 items-center self-start text-4xl font-semibold leading-none text-amber-500 whitespace-nowrap">
          <div className="gap-4 self-stretch my-auto">LOGO</div>
        </div>
        <div className="flex flex-col items-start mt-12 w-full text-3xl font-medium text-gray-600 max-w-[254px]">
          <div className="flex gap-8 items-center whitespace-nowrap text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/1ad0d8b12c8eb02865a96cfea751df90a80a3e3949356c4dfa84debe4ea0ecc2?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square fill-neutral-900"
            />
            <div className="self-stretch my-auto">Dashboard</div>
          </div>
          <div className="flex gap-8 items-center mt-24 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/13073197e07147a1e4b5c0bbde32e5a8065b83e440a4665826985fec489e58e9?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square fill-gray-600"
            />
            <div className="self-stretch my-auto">Profile</div>
          </div>
          <div className="flex gap-4 items-end self-stretch mt-24 w-full whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/153b31df7765d36b0c7087236d9853835cadb6e56b5e447f9c25574b032ba2b2?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 w-12 aspect-square"
            />
            <div className="w-[174px]">Support</div>
          </div>
          <div className="flex gap-4 items-end mt-24">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/87cf7648febfe040e7521365df99aa402a975a7dc8943358b61d81440d678649?apiKey=8139d9e03568455ba6696601aab74a9e&"
              className="object-contain shrink-0 aspect-[0.95] fill-gray-600 w-[37px]"
            />
            <div> Settings</div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-center text-4xl font-semibold leading-none text-red-500 mt-[1000px]">
        <div className="flex gap-4 items-start self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8139d9e03568455ba6696601aab74a9e/44e9d763f5a6557dcbfe3a60b9bce5264c419d8e4242e8c9e73c3f0daaa43957?apiKey=8139d9e03568455ba6696601aab74a9e&"
            className="object-contain shrink-0 w-12 aspect-square"
          />
          <div>Log out</div>
        </div>
      </div>
    </div>  )
}

export default SideBar