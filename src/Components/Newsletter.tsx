const Newsletter = () => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-between p-8 text-left">
      <h3 className="text-3xl">Newsletter</h3>
      <div className="flex">
        <input
          placeholder="Podaj swój e-mail"
          className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-transparent 
        bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        ></input>
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-[#219ebc] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          {">"}
        </button>
      </div>
      <div>
        <input type="checkbox" className="mr-2"></input>
        Zgadzam się na przesyłanie newslettera o tym, co się dzieje na bieżąco w
        Parku
      </div>
      <div>
        <input type="checkbox" className="mr-2"></input>
        Zapoznałem się i akceptuję Polityka prywatności
      </div>
    </div>
  );
};

export default Newsletter;
