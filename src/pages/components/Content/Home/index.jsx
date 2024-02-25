import React from 'react';

export const  Home = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full max-w-screen-xl mx-auto sm:p-8 md:p-12 lg:p-16 xl:p-20" style={{ backgroundImage: 'url("/bg-home.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex flex-row space-x-8 items-start justify-start sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="flex flex-col space-y-8 items-start justify-start">
                
                    <div className="flex flex-col space-y-4 items-start justify-start">
                        <p className="text-4xl font-medium leading-10 text-gray-50">
                            Vamos abrir seus olhos frente a seus investimentos!
                        </p>
                        <p className="text-1xl leading-loose text-gray-50">
                            Dê o seu melhor nas apostas, trades ou sessões de pôquer e traga seus resultados, aí deixe a mágica acontecer. Gestão fácil!
                        </p>
                    </div>
                    <p className="w-96 text-base font-semibold leading-none text-yellow-500">Para começar, adicione sua banca inicial.</p>
                    <button className="inline-flex items-center justify-center px-4 py-2 bg-green-400 rounded-lg hover:bg-green-600">
                        <p className="text-base font-semibold text-green-900">Adicionar Banca</p>
                    </button>
                </div>
                <img src="/rocket.png" alt="Right Image" className="w-full h-auto" />
            </div>
            
        </div>
    );
}