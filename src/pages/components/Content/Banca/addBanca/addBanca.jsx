import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

export const AddBankrollForm = ({ onBackToCards }) => {
  const [formData, setFormData] = useState({
    bankrollName: '',
    managementType: '',
    currency: 'BRL',
    initialBankroll: '',
    stakePercentage: '',
    unit: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onBackToCards();
  };

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto", scrollbarWidth: "thin", msOverflowStyle: "none" }} className="container mx-auto mt-1 p-4 md:p-8 bg-gray-700 rounded-lg">
      <div className="flex items-center justify-start mb-4 w-full">
        <DollarSign className="mr-2 text-white" size={35} />
        <h3 className="font-semibold text-white ml-2 text-2xl md:text-4xl">Adicionar Banca</h3>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="bankrollName">
            Nome do Bankroll
          </label>
          <input
            type="text"
            id="bankrollName"
            name="bankrollName"
            value={formData.bankrollName}
            onChange={handleChange}
            className="w-full p-2 text-white bg-gray-900 border rounded border-indigo-700 border-opacity-10"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="managementType">
            Tipo de Gestão
          </label>
          <input
            type="text"
            id="managementType"
            name="managementType"
            value={formData.managementType}
            onChange={handleChange}
            className="w-full p-2 text-white bg-gray-900 border rounded border-indigo-700 border-opacity-10"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="currency">
            Escolha a moeda
          </label>
          <select
            id="currency"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full p-2 text-white bg-gray-900 border rounded border-indigo-700 border-opacity-10"
          >
            <option value="BRL">Real-BRL (R$)</option>
            <option value="USD">Dolar-USD ($)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="initialBankroll">
            Banca Inicial
          </label>
          <input
            mask="999,999,999.99"
            type="text"
            id="initialBankroll"
            name="initialBankroll"
            value={formData.initialBankroll}
            onChange={handleChange}
            className="w-full p-2 text-white bg-gray-900 border rounded border-indigo-700 border-opacity-10"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="stakePercentage">
            Stake %
          </label>
          <input
            mask="99.99"
            type="text"
            id="stakePercentage"
            name="stakePercentage"
            value={formData.stakePercentage}
            onChange={handleChange}
            className="w-full p-2 text-white bg-gray-900 border rounded border-indigo-700 border-opacity-10"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="unit">
            Unidade
          </label>
          <input
            type="text"
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="w-full p-2 text-white bg-gray-900 border border-indigo-700 border-opacity-10 rounded"
          />
        </div>

        <div className="flex justify-end col-span-2">
          <button
            type="submit"
            className="bg-green-500 text-white rounded-full px-6 py-2"
          >
            Salvar alterações
          </button>
        </div>
      </form>
    </div>
  );
};
