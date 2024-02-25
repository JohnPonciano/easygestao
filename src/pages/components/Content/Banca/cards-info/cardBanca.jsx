import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import {EditBankrollForm} from '../../../editar/minhasbancas/minhasbancas'


export const CardBanca = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);  // Estado para armazenar o índice do card selecionado
    const [showCards, setShowCards] = useState(true);  // Estado para controlar a visibilidade dos cards

    // Função para definir o índice do card selecionado
    const handleEditClick = (index) => {
        setSelectedCardIndex(index);
        setShowCards(false);  // Oculta os cards ao clicar em "Editar"
    };

    // Função para voltar à exibição dos cards
    const handleBackToCards = () => {
        setSelectedCardIndex(null);
        setShowCards(true);  // Exibe os cards ao voltar
    };


    const data = [
        { nome: 'Banca 1', unidade: 'R$10,00', stake: '1%', bancaInicial: 'R$100,00', roi: '-', profit: '-', entradas: '-', positivo: '-', negativo: '-' },
        { nome: 'Banca 2', unidade: 'R$15,00', stake: '2%', bancaInicial: 'R$150,00', roi: '+70.00%', profit: 'R$350,00', entradas: '20', positivo: '15', negativo: '5' },
        { nome: 'Banca 3', unidade: 'R$20,00', stake: '3%', bancaInicial: 'R$200,00', roi: '+70.00%', profit: 'R$350,00', entradas: '20', positivo: '15', negativo: '5' },
    ];

    return (
        <div className="flex mt-10 p-8 flex-col flex-grow items-start justify-start w-full max-w-screen-xl mx-auto">
            {showCards ? (

                <div className="grid grid-cols-3 gap-4 w-auto">
                    {data.map((cardData, index) => (
                        <div key={index} className="flex-col bg-gray-800 border rounded-2xl border-gray-600 p-4">
                            <p className="text-base font-bold text-white">Trade esportiva</p>

                            <button onClick={() => handleEditClick(index)} className=" flex items-center justify-end w-full p-2">
                                <div className="flex space-x-2 items-center justify-center px-3 py-0.5 bg-gray-400 bg-opacity-30 rounded-full">
                                    <div className="w-4 h-4">
                                        <div className="flex items-center justify-center flex-1 h-full p-0.5  text-white">
                                            <Pencil />
                                        </div>
                                    </div>
                                    <p className="text-xs font-bold tracking-wide leading-tight text-white">Editar</p>
                                </div>
                            </button>

                            <div className="flex flex-col space-y-2 items-start justify-start w-full">
                                <div className="inline-flex space-x-3.5 items-start justify-start w-full">
                                    <p className="text-xs text-gray-200">Nome: {cardData.nome}</p>
                                    <p className="text-xs text-gray-200">Unidade: {cardData.unidade}</p>
                                    <p className="text-xs text-gray-200">% Stake: {cardData.stake}</p>
                                </div>
                                <p className="w-24 text-xs text-gray-200">Banca Inicial: {cardData.bancaInicial}</p>
                                <div className="inline-flex space-x-14 items-start justify-start w-32">
                                    <div className="inline-flex flex-col space-y-1 items-start justify-start">
                                        <p className="text-xs text-gray-200">ROI</p>
                                        <p className="text-xl text-green-500">{cardData.roi}</p>
                                    </div>
                                    <div className="inline-flex flex-col space-y-1 items-start justify-start">
                                        <p className="text-xs text-gray-200">Profit</p>
                                        <p className="text-xl text-green-500">{cardData.profit}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-2.5 items-start justify-start">
                                    <div className="inline-flex space-x-4 items-center justify-start">
                                        <p className="text-xs text-gray-200">Entradas</p>
                                        <p className="text-xs text-gray-200 font-semibold">{cardData.entradas}</p>
                                    </div>
                                    <div className="inline-flex space-x-6 items-center justify-start">
                                        <p className="text-xs text-green-300">Positivo</p>
                                        <p className="text-xs text-green-300 font-semibold">{cardData.positivo}</p>
                                    </div>
                                    <div className="inline-flex space-x-4 items-center justify-start">
                                        <p className="text-xs text-red-400">Negativo</p>
                                        <p className="text-xs text-red-400 font-semibold">{cardData.negativo}</p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    ))}
                </div>
            ) : (
                <EditBankrollForm data={data[selectedCardIndex]} onBackToCards={handleBackToCards} />
            )}
        </div>
    );
};
