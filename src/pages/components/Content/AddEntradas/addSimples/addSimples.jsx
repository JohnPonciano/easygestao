import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from "lucide-react";

const FormSectionTitle = ({ children }) => (
  <div className="font-semibold text-white">
    {children}
    <span className="text-red-400">*</span>
  </div>
);

const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-2 mt-2
        font-light rounded-lg border border-solid bg-slate-800 text-zinc-500 focus:outline-none"
      >
        <span>{selectedOption}</span>
        <span className="material-icons text-xl">{isOpen ? <ArrowUp/> : <ArrowDown/>}</span>
      </button>
      <ul className={`absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleSelect(option)}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

const InputSection = ({ title, options }) => (
  <div className="flex flex-col flex-1 px-5 md:w-full">
    <FormSectionTitle>{title}</FormSectionTitle>
    <Dropdown
      title={`Select ${title.toLowerCase()}`}
      options={options}
      onSelect={(option) => console.log(`${title} selected:`, option)}
    />
  </div>
);

const AddSimples = () => {
  const bankrollOptions = ["Option 1", "Option 2", "Option 3"];
  const betQuantityOptions = ["Option 1", "Option 2", "Option 3"];
  const strategyOptions = ["Option 1", "Option 2", "Option 3"];
  const sportOptions = ["Option 1", "Option 2", "Option 3"];
  const tipsterOptions = ["Option 1", "Option 2", "Option 3"];
  const bookmakerOptions = ["Option 1", "Option 2", "Option 3"];
  const situationOptions = ["Option 1", "Option 2", "Option 3"];

  return (
    <main className="flex flex-col text-base p-2 -mt-15  md:justify-center md:items-center">
      <h3 className="font-semibold text-white ml-2 mb-5 text-4xl">Adicionar Aposta</h3>
      <section className="grid gap-5 grid-cols-1 md:grid-cols-2 md:w-full"
      >
        <InputSection title="Escolha o bankroll" options={bankrollOptions} />
        <InputSection title="Unidade" options={betQuantityOptions} />
        <InputSection title="Qtd de aposta" options={betQuantityOptions} />
        <InputSection title="% Stake" options={strategyOptions} />
        <InputSection title="Estratégia" options={strategyOptions} />
        <InputSection title="Esporte" options={sportOptions} />
        <InputSection title="Tipster" options={tipsterOptions} />
        <InputSection title="Bookmaker" options={bookmakerOptions} />
      </section>
      <section className="mt-6 w-full">
        <FormSectionTitle>Situação</FormSectionTitle>
        <Dropdown
          title="Select situation"
          options={situationOptions}
          onSelect={(option) => console.log("Situation selected:", option)}
        />
      </section>
      <button
      type="button"
      className="justify-center items-center self-end
       px-16 py-3.5 mt-5 max-w-full 
       font-semibold text-emerald-900 whitespace-nowrap
        bg-teal-400 rounded-lg w-[358px] max-md:px-5 max-md:mt-10"
      
      tabIndex="0" // Ensuring keyboard navigation
    >
      Adicionar
    </button>
    </main>
  );
};

export default AddSimples;
