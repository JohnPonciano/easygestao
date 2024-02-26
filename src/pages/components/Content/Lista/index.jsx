import React ,{useState}from 'react';
import BetDashboard from './betcards/BetCards';
import { ArrowLeft } from 'lucide-react';

export const  ListaBet = () => {
    const [showCardBanca, setShowCardBanca] = useState(true);

    const handleArrowLeftClick = () => {
        setShowCardBanca(false);
    };

    const handleBackToCards = () => {
        setShowCardBanca(true);
    };
    return (

    
        <div className="flex md:mt-20 mt-5 flex-col items-start justify-start 
        w-full max-w-screen-xl mx-auto">
        <div className="flex items-center justify-start p-4 bg-gray-70 w-full" >
        
        
        <ArrowLeft className="mr-2 text-green-500" size={35} />
        
        <h3 className=" font-semibold text-white ml-2 text-4xl"> Profit: 
        <span className='text-green-400'> +$30</span></h3>
        </div>
        <BetDashboard/>
        </div>
    );
}