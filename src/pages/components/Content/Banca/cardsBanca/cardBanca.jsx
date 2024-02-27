import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import { EditBankrollForm } from '../editBanca/editBanca';

export const CardBanca = () => {
  // Estado para rastrear o índice do cartão selecionado e se os cartões estão sendo exibidos
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [showCards, setShowCards] = useState(true);

  // Função para lidar com o clique no botão de edição
  const handleEditClick = (index) => {
    setSelectedCardIndex(index);
    setShowCards(false);
  };

  // Função para voltar à exibição de cartões
  const handleBackToCards = () => {
    setSelectedCardIndex(null);
    setShowCards(true);
  };

  // Dados de exemplo para os cartões
  const data = [
    { nome: 'Banca 1', unidade: 'R$10,00', stake: '1%', bancaInicial: 'R$100,00', roi: '-', profit: '-', entradas: '-', positivo: '-', negativo: '-' },
    { nome: 'Banca 2', unidade: 'R$15,00', stake: '2%', bancaInicial: 'R$150,00', roi: '+70.00%', profit: 'R$350,00', entradas: '20', positivo: '15', negativo: '5' },
    { nome: 'Banca 3', unidade: 'R$20,00', stake: '3%', bancaInicial: 'R$200,00', roi: '+70.00%', profit: 'R$350,00', entradas: '20', positivo: '15', negativo: '5' },
  ];

  // Renderização condicional com base no estado de showCards
  return (
    <div className="flex mt-10 p-8 flex-col flex-grow items-start justify-start w-full max-w-screen-xl mx-auto">
      {showCards ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full" style={{ maxHeight: "500px", overflowY: "auto", scrollbarWidth: "thin", msOverflowStyle: "none" }}>
          {data.map((cardData, index) => (
            // Renderização de cada cartão com base nos dados
            <div key={index} className="flex-col bg-gray-800 border rounded-2xl border-gray-600 p-4 w-full">
              <p className="text-base font-bold text-white">Trade esportiva</p>
              {/* Botão de edição com ícone de lápis */}
              <button onClick={() => handleEditClick(index)} className="flex items-center justify-end w-full p-2">
                {/* Ícone de lápis */}
                <div className="flex space-x-2 items-center justify-center px-3 py-0.5 bg-gray-400 bg-opacity-30 rounded-full">
                  <div className="w-4 h-4">
                    <div className="flex items-center justify-center flex-1 h-full p-0.5 text-white">
                      <Pencil />
                    </div>
                  </div>
                  {/* Texto "Editar" ao lado do ícone */}
                  <p className="text-xs font-bold tracking-wide leading-tight text-white">Editar</p>
                </div>
              </button>
              {/* Detalhes do cartão, como Nome, Unidade, % Stake, etc. */}
              <div className="flex flex-col space-y-2 items-start justify-start w-full">
                <div className="inline-flex space-x-3.5 items-start justify-start w-full">
                  {/* Detalhes como Nome, Unidade e % Stake */}
                  <p className="text-xs text-gray-200">Nome: {cardData.nome}</p>
                  <p className="text-xs text-gray-200">Unidade: {cardData.unidade}</p>
                  <p className="text-xs text-gray-200">% Stake: {cardData.stake}</p>
                </div>
                {/* Detalhes adicionais como Banca Inicial, ROI, Profit, etc. */}
                <p className="w-24 text-xs text-gray-200">Banca Inicial: {cardData.bancaInicial}</p>
                <div className="inline-flex space-x-14 items-start justify-start w-32">
                  {/* Detalhes como ROI e Profit */}
                  <div className="inline-flex flex-col space-y-1 items-start justify-start">
                    <p className="text-xs text-gray-200">ROI</p>
                    <p className="text-xl text-green-500">{cardData.roi}</p>
                  </div>
                  <div className="inline-flex flex-col space-y-1 items-start justify-start">
                    <p className="text-xs text-gray-200">Profit</p>
                    <p className="text-xl text-green-500">{cardData.profit}</p>
                  </div>
                </div>
                {/* Detalhes finais como Entradas, Positivo e Negativo */}
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
        // Se showCards for falso, exibe o formulário de edição
        <EditBankrollForm data={data[selectedCardIndex]} onBackToCards={handleBackToCards} />
      )}
    </div>
  );
};
