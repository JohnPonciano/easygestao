import React from 'react';

function HorizontalSeparator() {
  return <div className="shrink-0 mt-16 h-px bg-gray-600 max-md:mt-10 max-md:max-w-full"></div>;
}

function BankEvolution() {
  const values = ['R$250', 'R$200', 'R$150', 'R$100'];

  return (
    <section className="flex flex-col px-4 py-4 rounded-2xl border border-solid bg-slate-800
     border-[color:var(--stroke,#5B5FC0)]">
      <header className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        <h1 className="flex-auto text-2xl font-semibold leading-7 text-slate-200">Evolução da Banca</h1>
        <div className="flex flex-col justify-center self-start text-base leading-6 
        text-center whitespace-nowrap aspect-[3.14] text-slate-200 text-opacity-30">
          <div className="flex gap-2.5 justify-between">
            <div className="self-start mt-3.5 w-5 bg-white h-[9px]" />
            <p>Profit</p>
          </div>
        </div>
      </header>
      <main className="flex gap-1.5 justify-between mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <aside className="flex flex-col py-1.5 pr-2 text-sm leading-5 text-gray-600 whitespace-nowrap basis-0">
          {values.map((value, index) => (
            <p key={index} className={`${index !== 0 ? 'mt-16 max-md:mt-10' : ''}`}>{value}</p>
          ))}
        </aside>
        <div className="flex flex-col flex-1 pt-12 my-auto max-md:max-w-full">
          <HorizontalSeparator />
          <HorizontalSeparator />
          <HorizontalSeparator />
        </div>
      </main>
    </section>
  );
}

export default BankEvolution;