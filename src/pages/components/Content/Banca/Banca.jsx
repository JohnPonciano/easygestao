import React, { useState } from 'react';
import { ArrowLeft, UserCog } from 'lucide-react';
import { CardBanca } from './cardsBanca/cardBanca';
import { EditBankrollForm } from './editBanca/editBanca';
import { AddBankrollForm } from './addBanca/addBanca';

export const ShowBanca = () => {
  const [showCardBanca, setShowCardBanca] = useState(true);
  const [showAddBankrollForm, setShowAddBankrollForm] = useState(false);
  const [showEditBankrollForm, setShowEditBankrollForm] = useState(false);

  const handleArrowLeftClick = () => {
    setShowCardBanca(true);
    setShowAddBankrollForm(false);
    setShowEditBankrollForm(false);
  };

  const handleBackToCards = () => {
    setShowCardBanca(true);
    setShowAddBankrollForm(false);
    setShowEditBankrollForm(false);
  };

  const handleAddBankrollClick = () => {
    setShowCardBanca(false);
    setShowAddBankrollForm(true);
    setShowEditBankrollForm(false);
  };

  return (
    <div className="flex flex-col items-start justify-start w-full max-w-screen-xl mx-auto">
      <div className="flex items-center justify-start p-4 bg-gray-700 w-full">
        <button onClick={handleArrowLeftClick}>
          <ArrowLeft className="text-white mr-4" />
        </button>
        <UserCog className="mr-2 text-white" size={35} />
        <h3 className="font-semibold text-white ml-2 text-4xl">Gerir suas bancas</h3>
      </div>

      <button onClick={handleAddBankrollClick} className="mt-4 ml-10 bg-green-500 text-white px-4 py-2 rounded-full">
        + Adicionar Banca
      </button>

      {showCardBanca && <CardBanca />}
      {showAddBankrollForm && <AddBankrollForm onBackToCards={handleBackToCards} />}
      {showEditBankrollForm && <EditBankrollForm onBackToCards={handleBackToCards} />}
    </div>
  );
};
