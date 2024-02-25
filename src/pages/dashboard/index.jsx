import React, { useState } from 'react';
import { Sidebar } from '../components/SideBar/SideBar';
import { Topbar } from '../components/topbar/Topbar';
import { ShowBanca } from '../components/Content/Banca/Banca';
import { Home} from '../components/Content/Home/index';

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState('home');

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  const renderContent = () => {
    switch (activeOption) {
      case 'home': 
        return <Home/>
      case 'dashboard':
        return <h1>dashboard</h1>
      case 'list':
        return <h1>List</h1>;
      case 'myBoards':
        return <ShowBanca />
      case 'profile':
        return <h1>Profile</h1>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onOptionChange={handleOptionChange} activeOption={activeOption} />

      {/* Conteúdo à direita da Sidebar */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar Fixa */}
        <Topbar />
      </div>
      <div className="flex w-full bg-gray-700 p-4 mx-auto overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
