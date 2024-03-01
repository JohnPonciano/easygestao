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

const AddMultiplas = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      fields: [
        { title: "Escolha o bankroll", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Unidade", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Qtd de aposta", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "% Stake", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Estratégia", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Esporte", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Tipster", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Bookmaker", options: ["Option 1", "Option 2", "Option 3"] },
      ]
    },
  ]);

  const addSection = () => {
    const newId = sections.length + 1;
    const newSection = {
      id: newId,
      fields: [
        { title: "Escolha o bankroll", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Unidade", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Qtd de aposta", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "% Stake", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Estratégia", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Esporte", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Tipster", options: ["Option 1", "Option 2", "Option 3"] },
        { title: "Bookmaker", options: ["Option 1", "Option 2", "Option 3"] },
      ]
    };

    setSections([...sections, newSection]);
  };

  return (
        <main className="flex flex-col text-base p-2 -mt-15 md:justify-center md:items-center">
        {sections.map((section, index) => (
            <section key={section.id} className="md:grid md:grid-cols-2 md:w-full">
            <div className="col-span-2 text-center  mb-5">
                <h3 className="font-semibold text-white ml-2 mb-5 mt-5 text-4xl">Adicionar Aposta {index + 1}</h3>
            </div>
            {section.fields.map((field, fieldIndex) => (
                <InputSection key={fieldIndex} title={field.title} options={field.options} />
            ))}
            </section>
        ))}

        <div className="flex flex-col items-center mt-10 w-full md:flex-row md:justify-center">
            <button
            type="button"
            onClick={addSection}
            className="flex items-center justify-center mb-2 md:mb-0 w-10 h-10 bg-blue-500 rounded-full text-white"
            >
            +
            </button>
            <span className="text-white md:ml-2">Adicionar aposta</span>
        </div>

        <button
            type="button"
            className="justify-center items-center self-end px-16 py-3.5 max-w-full font-semibold text-emerald-900 whitespace-nowrap bg-teal-400 rounded-lg w-[358px] max-md:px-5 max-md:mt-10"
            tabIndex="0" // Garantindo a navegação pelo teclado
        >
            Adicionar
        </button>
        </main>


);
};

export default AddMultiplas;
