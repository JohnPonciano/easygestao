import React, { useState } from 'react';
import { ArrowLeft, UserCog } from 'lucide-react';
import MenuGrid from './addCards/MenuGrid';

export const AddEntradas = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleBackToMenu = () => {
    // Configura o componente selecionado para null
    setSelectedComponent(null);
  };

  const handleComponentClick = (component) => {
    // Quando um componente é clicado, define o componente selecionado
    setSelectedComponent(component);
  };

  return (
    <div className="flex flex-col items-start justify-start w-full max-w-screen-xl mx-auto">
      <div className="flex items-center justify-start p-4 bg-gray-700 w-full md:mt-20">
        {selectedComponent !== null && (
          <button onClick={handleBackToMenu}>
            <ArrowLeft className="text-white mr-4" />
          </button>
        )}
        <UserCog className="mr-2 text-white" size={35} />
        <h3 className="font-semibold text-white ml-2 text-4xl">Adicionar Entradas</h3>
      </div>

      {selectedComponent !== null ? (
        // Renderiza o componente selecionado
        <div key={selectedComponent.key}>
          {selectedComponent}
        </div>
      ) : (
        // Renderiza o menu principal
        <MenuGrid onComponentClick={handleComponentClick} />
      )}
    </div>
  );
};
