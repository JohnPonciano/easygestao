import React from 'react';
import { Home, List, BarChart2, User, LogOut, Bell, Image } from 'lucide-react';
import '../../../app/globals.css';

const Status = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* Menu Aside */}
      <aside className="bg-gray-800 text-white w-1/5 p-4 flex flex-col relative">
        {/* Header do Aside */}
        <div className="flex items-center mb-4">
          {/* Ícone de usuário médio redondo */}
          <div className="w-12 h-12 bg-white rounded-full overflow-hidden mr-2">
            <Image src="/user.jpg" alt="User" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-sm mb-1">Seu Nome</p>
            {/* Adicione o nome do usuário aqui */}
            <div className="bg-white rounded-md p-1 text-xs">
              {/* Box para ajuste no Aside */}
              {/* Adicione qualquer conteúdo adicional necessário */}
            </div>
          </div>
        </div>
        {/* Título do menu */}
        <h2 className="text-2xl font-bold mb-4 p-4">Menu</h2>
        {/* Itens do menu */}
        <ul>
          <a href='#'  className="flex items-center mb-2 p-4">
            <Home className="mr-2" size={20} />
            Dashboard
          </a>
          <a href='#'  className="flex items-center mb-2 p-4">
            <List className="mr-2" size={20} />
            Lista
          </a>
          <a href='#'  className="flex items-center mb-2 p-4">
            <BarChart2 className="mr-2" size={20} />
            Minhas Bancas
          </a>
          <a href='#'  className="flex items-center mb-2 p-4">
            <User className="mr-2" size={20} />
            Perfil
          </a>
        </ul>
        {/* Ícone de saída */}
        <a href='#'  className="flex items-end text-red-700 p-4 ">
          <LogOut className="mr-2" size={20} />
          Sair
        </a>
      </aside>

      {/* Área de Conteúdo */}
      <div className="flex-1 p-4">
        {/* Header da Área de Conteúdo */}
        <div className=" flex justify-end p-4">
          {/* Ícone de notificação e ícone de usuário */}
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden mr-4">
            <Image src="/EasyGestao.png" alt="User" 
            className="w-full h-full object-cover" />
          </div>
          
          
        </div>
        {/* Conteúdo da Página */}
        <h2 className="text-2xl font-bold mb-4">Profit</h2>
        {/* Adicione o conteúdo da sua página aqui */}
        <p> Bem-vindo ao seu Dashboard!</p>
      </div>
    </div>
  );
};

export default Status;
