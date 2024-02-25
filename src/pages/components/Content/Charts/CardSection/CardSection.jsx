import React from 'react';
import FinanceEvolution from '../HortizontalChart/HorizontalChart'
const StatCard = ({ title, value, percentChange, imageUrl, positive, textColor = "text-neutral-200", valueColor = "text-white" }) => {
  return (
    <div className="flex flex-col grow h-auto px-4 pt-3.5 pb-7 w-full whitespace-nowrap rounded-2xl border 
    border-solid bg-slate-800 border-[color:var(--stroke-ds,#5E5F72)] max-md:mt-6 max-md:max-w-full">
        
      <div className="flex gap-5  justify-between px-px w-full max-md:flex-wrap max-md:max-w-full">
        <div className={`${textColor} text-sm font-bold leading-5`}>{title}</div>
        
        <div className={`flex gap-1 justify-center self-start px-0.5 text-xs leading-5 text-right ${positive ? "text-green-300" : "text-red-600"} rounded`}>
          <div className="grow">{percentChange}</div>
          <img loading="lazy" src={imageUrl} className="aspect-[1.1] w-[22px]" alt="" />
        </div>
      
      </div>
      
      <div className="flex gap-5 justify-between mt-4 max-md:flex-wrap max-md:max-w-full">
        <div className={`${textColor} text-sm font-bold leading-5`}>Profit</div>
        <div className={`${valueColor} text-xs leading-5 text-right`}>{value}</div>
      </div>
    </div>
  );
};

const InfoCard = () => {
  
    return (
      <div className="flex flex-col grow justify-center px-4 py-3.5 w-full text-xs whitespace-nowrap 
      rounded-2xl border border-solid bg-slate-800 border-[color:var(--stroke-ds,#5E5F72)] max-md:mt-6 max-md:max-w-full">
        
        <div className="flex gap-5 justify-between text-zinc-50 max-md:flex-wrap max-md:max-w-full">

          <div className={`font-bold leading-6`}>Entrada</div>
          <div className={`text-right leading-[150%]`}>15</div>
        
        </div>
        <div className="flex gap-5 justify-between text-zinc-50 max-md:flex-wrap max-md:max-w-full">

          <div className={` font-bold leading-6 text-green-600`}>Positivo</div>
          <div className={`text-right leading-[150%] text-green-600`}>12</div>
        
        </div>
        <div className="flex gap-5 justify-between text-zinc-50 max-md:flex-wrap max-md:max-w-full">

          <div className={` font-bold leading-6 text-red-600`}>Negativo</div>
          <div className={`text-right leading-[150%] text-red-600 `}>3</div>
        
        </div>

      </div>
    );
  };




const FinancialDashboard = () => {
  return (
    <div className="w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <StatCard title="ROI" value="+R$90" percentChange="+16%" 
          imageUrl="/grow.svg" positive={true} />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <InfoCard />
        </div>
      </div>
      <div className="flex flex-col mt-5 max-md:ml-0 max-md:w-full">
          <FinanceEvolution/>
     </div>
      
    </div>
  );
};

export default FinancialDashboard;