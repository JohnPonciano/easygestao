import React from 'react';
import { ArrowLeft, UserCog } from 'lucide-react';
import {CardBanca} from './cards-info/cardBanca';


export const ShowBanca = () => {
    
  return (   
    
   
    <div className="flex mt-20 flex-col items-start justify-start w-full max-w-screen-xl mx-auto">
      <div className="flex items-center justify-start p-4 bg-gray-700" style={{ width: '100%' }}>
        <ArrowLeft className="text-white mr-4 " />
        <UserCog className="mr-2 text-white" size={35} />
        <h3 className="text-lg font-semibold text-white ml-2 text-4xl ">Gerir suas bancas </h3>
      </div>
      <CardBanca />
    </div>

  );
};