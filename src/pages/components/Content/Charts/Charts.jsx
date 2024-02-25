import React from 'react';
import FinancialDashboard from './CardSection/CardSection';


export const Charts = () => {

    return (
<div className="flex mt-20 flex-col items-start justify-start w-full max-w-screen-xl mx-auto">
  <div className="flex items-center justify-start p-4 bg-gray-700 w-full">
    <h3 className="text-4xl font-semibold text-white ml-2 ">Dashboard</h3>
  </div>
  <div className="flex items-center justify-between w-full p-8">
    <span className="p-2 text-gray-400 font-bold text-sm">
      Resumo diário
    </span>
    <span className="p-2  text-gray-400  font-bold text-sm">
      Apostas esportivas
    </span>
  </div>

  <div className="flex items-center justify-between w-full p-8">
  <FinancialDashboard/>
  </div>
  

</div>


      

    );
};
