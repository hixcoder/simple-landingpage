export function CreonPassCard() {
  const benefits = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];

  return (
    <div className="max-w-full">
      <div className="flex flex-col max-w-full md:flex-row">
        <div className="w-full md:w-6/12">
          <div className="my-auto">
            <h1 className="text-4xl md:text-7xl text-white uppercase leading-[75px] md:leading-[49px]">
              Creon Pass NFT
            </h1>
            <div className="mt-10 h-px bg-zinc-900" />
            <p className="mt-9 text-xl md:text-2xl font-bold leading-7">
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools
            </p>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="px-5 pt-3 pb-3.5 mt-2.5 text-white rounded-md border border-solid border-zinc-900"
              >
                {benefit}
              </div>
            ))}
            <button className="px-16 py-5 mt-20 font-bold text-center text-white rounded-md bg-gradient-to-r from-blue-500 to-purple-500 w-full md:w-auto">
              Buy Creon Pass
            </button>
          </div>
        </div>
        <div className="ml-0 md:ml-5 w-full md:w-6/12 relative mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a6f9c1bd4b83c1acca279ef5db56af18e690b9fea130dde1126bfc999e487f?apiKey=15699259d57541149d8b9fecd26f59f3&"
            alt="Creon Pass NFT"
            className="w-full aspect-square "
          />
          <div className="absolute inset-0 flex flex-col justify-between h-full ">
            <div className="h-48 bg-gradient-to-b from-black to-transparent"></div>
            <div className="h-48 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}