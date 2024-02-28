import React, { useState } from 'react';
import { Sidebar } from '../components/SideBar/SideBar';
import { Topbar } from '../components/topbar/Topbar';
import { ShowBanca } from '../components/Content/Banca/Banca';
import { Home } from '../components/Content/Home/index';
import { Charts } from '../components/Content/Charts/Charts';
import { ListaBet } from '../components/Content/Lista';
import UserProfile from '../components/Content/Profile/profile'
import BottonBar from '../components/BottonBar/bottonbar';
import { AddEntradas } from '../components/Content/AddEntradas/AddEntradas';

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState('home');

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  const renderContent = () => {
    switch (activeOption) {
      case 'home':
        return <Home onOptionChange={handleOptionChange} />;
      case 'dashboard':
        return <Charts />;
      case 'list':
        return <ListaBet />;
      case 'myBoards':
        return <ShowBanca />;
      case 'profile':
        return <UserProfile />;
      case 'addentrada':
        return <AddEntradas/>
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Topbar Fixa */}
      <Topbar />

      {/* Renderiza BottonBar se a resolução for mobile */}
      <div className="md:hidden">
        <BottonBar  onIconClick={handleOptionChange} activeOption={activeOption }/>
      </div>

      {/* Renderiza Sidebar ou BottonBar dependendo da resolução */}
      <div className="flex md:flex-row flex-col h-full">
        {/* Sidebar (oculto em resoluções móveis) */}
        <div className="hidden md:flex">
          <Sidebar onOptionChange={handleOptionChange} activeOption={activeOption} />
        </div>

        {/* Conteúdo à direita da Sidebar ou BottonBar */}
        <div className="flex-1 w-full bg-gray-700 p-4 overflow-hidden">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
