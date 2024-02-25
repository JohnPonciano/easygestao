import React from 'react';
import BetDashboard from './betcards/BetCards';

export const  ListaBet = () => {
    return (
        <div className="flex flex-col items-start 
        justify-start w-full max-w-screen-xl mx-auto 
        sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-gray-700">
            <BetDashboard/>
            
        </div>
    );
}