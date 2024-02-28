// Importação de dependências
import React, { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';

// Definição do componente EditBankrollForm
const EditBankrollForm = ({ data, onBackToCards }) => {
  // Estado local para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    bankrollName: '',           // Nome do Bankroll
    managementType: '',         // Tipo de Gestão
    currency: 'BRL',            // Escolha a moeda (padrão: BRL)
    initialBankroll: '',        // Banca Inicial
    stakePercentage: '',        // Stake %
    unit: '',                   // Unidade
  });

  // Efeito useEffect para atualizar o estado com os dados recebidos
  useEffect(() => {
    setFormData({
      bankrollName: data.nome || '',                // Nome do Bankroll (ou vazio)
      managementType: data.managementType || '',    // Tipo de Gestão (ou vazio)
      currency: data.currency || 'BRL',             // Escolha a moeda (ou BRL se vazio)
      initialBankroll: data.initialBankroll || '',  // Banca Inicial (ou vazio)
      stakePercentage: data.stake || '',            // Stake % (ou vazio)
      unit: data.unidade || '',                     // Unidade (ou vazio)
    });
  }, [data]);

  // Manipulador de eventos para atualizar o estado ao digitar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manipulador de eventos para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);        // Aqui você pode fazer algo com os dados atualizados
    onBackToCards();              // Volta para a exibição de cards
  };

  // Renderização do componente
  return (
    // Container principal do formulário
    <div className="container mx-auto -mt-10 p-2 md:p-8 bg-gray-700 rounded-lg">
      {/* Cabeçalho com ícone e título */}
      <div className="flex items-center justify-start mb-4 w-full">
        <DollarSign className="mr-2 text-white" size={35} />
        <h3 className="font-semibold text-white ml-2 text-2xl md:text-4xl">Editar Banca</h3>
      </div>

      {/* Formulário com layout responsivo em duas colunas para telas maiores */}
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

// Exportação do componente para uso em outros lugares
export default EditBankrollForm;
