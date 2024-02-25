import React from "react";

const BetDetails = ({ date, type }) => (
  <div className="flex gap-5 justify-between text-base font-bold text-gray-400">
    <div>
      <span className="font-medium text-neutral-200">{type}:</span>{" "}
      <span className="font-medium text-gray-400">$50</span>
    </div>
    <div>
      <span className="font-medium text-neutral-200">Saída:</span>{" "}
      <span className="font-medium text-gray-400">-</span>
    </div>
  </div>
);

const SportEventCard = () => {
  return (
    <article className="flex flex-col grow py-5 pr-1 pl-4 mx-auto w-full rounded-2xl border border-solid bg-slate-800 border-[color:var(--stroke-ds,#5E5F72)] max-md:mt-6">
      <header className="flex gap-2.5 justify-between">
        <img loading="lazy" src="/betlogo.png" 
        className="aspect-[0.92] w-[45px]" alt="Bet 365 Logo" />
        <div className="flex gap-5 self-start">
          <div className="flex gap-5 justify-between">
            <div className="flex flex-col flex-1">
                <h2 className="text-base font-bold leading-6 text-white">Bet 365</h2>
                <div className="flex gap-2 justify-between text-xs font-medium leading-6 text-gray-400 whitespace-nowrap">
                    <img loading="lazy" src="/pendente.svg" 
                    className="my-auto w-4 aspect-square" alt="Calendar icon" />
                    <time className="grow">24 Jan 2023 - 18:30</time>
                </div>
            </div>
            <div className="justify-center self-start px-5 text-xs font-medium leading-6 whitespace-nowrap bg-violet-300 aspect-[3.05] rounded-[58px] text-slate-900">Cash</div>
          </div>
          <button>
          <img loading="lazy" src="/3dot.svg" className="self-start w-6 aspect-square" alt="Cash icon" />
          </button>
        </div>
      </header>
      <div className="flex gap-5 justify-between mt-5 text-base font-bold leading-6 text-gray-400">
        <div className="grow whitespace-nowrap">
          <span className="font-medium text-neutral-200">Bankroll:</span>{" "}
          <span className="font-medium text-gray-400">Trade</span>
        </div>
        <div>
          <span className="font-medium text-neutral-200">ODD:</span>{" "}
          <span className="font-medium text-gray-400">1.60</span>
        </div>
        <div className="grow text-green-600 whitespace-nowrap">
          <span className="font-medium text-neutral-200">Profit:</span>{" "}
          <span className="font-medium text-green-600">+$30</span>
        </div>
      </div>
      <div className="flex gap-5 justify-between pr-9 mt-2 leading-6 max-md:pr-5">
        <BetDetails date="24 Jan 2023 - 18:30" type="Entrada"/>
        <div className="justify-center self-start px-2 text-xs font-medium text-lime-900 bg-orange-200 aspect-[3.2] rounded-[58px]">Pendente</div>
      </div>
    </article>
  );
}


function BetDashboard() {
  const bets = [
    {
      iconUrl: "/betlogo.png",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Cash",
      entry: 50,
      exit: null,
      profit: 30,
      odd: 1.60
    },
    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },
    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },
    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },
    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },
    
  ];

  return (
    <main className="px-5 mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="grid grid-cols-2 gap-5">
        {bets.map((bet, index) => (
          <SportEventCard key={index} {...bet} />
        ))}
        </div>
      </div>
    </main>
  );
}

export default BetDashboard;