import React, { useState, useEffect } from 'react';
import { Home, List, BarChart2, User, LogOut, LineChart, Menu } from 'lucide-react';
import Link from 'next/link';





// export const Sidebar = ({ onOptionChange, activeOption, ...props }) => {


//   return (
//     <div className=" md:flex flex-col space-y-90 
//     items-center justify-between w-64 px-6 pt-16 pb-6 bg-gray-900">
//       <div className="flex flex-col space-y-12 items-center justify-start w-full h-96">

//         <div className="inline-flex space-x-2.5 items-start justify-start">
//           <div className="w-10 h-10 overflow-hidden rounded-full">
//             <img src="/EasyGestao.png" alt="Imagem de Perfil" className="w-full h-full object-cover" />
//           </div>
//           <p className="text-base leading-normal text-white">Bem vindo,<br />Paulo!</p>
//           <div className="flex-1 h-full bg-yellow-500 rounded-full" />
//         </div>

//         <div className="w-full">
//               <div className="flex flex-col space-y-6 items-center justify-start w-full">
//                 <a
//                   id="home"
//                   className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full
//                    border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${
//                     activeOption === 'home' ? 'bg-green-400 bg-opacity-10' : ''
//                   }`}
//                   onClick={() => onOptionChange('home')}
//                 >
//                   <Home className="mr-2 text-white" size={20} />
//                   <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-white">Home</p>
//                 </a>

//                 <a
//                   id="dashboard"
//                   className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full
//                    border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${
//                     activeOption === 'dashboard' ? 'bg-green-400 bg-opacity-10' : ''
//                   }`}
//                   onClick={() => onOptionChange('dashboard')}
//                 >
//                   <LineChart className="mr-2 text-white" size={20} />
//                   <p className="flex-1 text-sm font-medium tracking-wide leading-tight
//                    text-white">Dashboard</p>
//                 </a>

//                 <a
//                   id="list"
//                   className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${
//                     activeOption === 'list' ? 'bg-green-400 bg-opacity-10' : ''
//                   }`}
//                   onClick={() => onOptionChange('list')}
//                 >
//                   <List className="mr-2 text-white" size={20} />
//                   <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-white">Lista</p>
//                 </a>

//                 <a
//                   id="myBoards"
//                   className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${
//                     activeOption === 'myBoards' ? 'bg-green-400 bg-opacity-10' : ''
//                   }`}
//                   onClick={() => onOptionChange('myBoards')}
//                 >
//                   <BarChart2 className="mr-2 text-white" size={20} />
//                   <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-white">Minha Banca</p>
//                 </a>

//                 <a
//                   id="perfil"
//                   className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${
//                     activeOption === 'profile' ? 'bg-green-400 bg-opacity-10' : ''
//                   }`}
//                   onClick={() => onOptionChange('profile')}
//                 >
//                   <User className="mr-2 text-white" size={20} />
//                   <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-white">Perfil</p>
//                 </a>
//               </div>
//         </div>

//       </div>

//       <a href='/' className="inline-flex space-x-2 mt-1 items-center 
//       justify-start w-full p-3 rounded-lg">
//         <div className="flex items-center justify-center w-10 h-full p-2 rounded-full">
//           <LogOut className="mr-2 text-red-400" size={20} />
//         </div>
//         <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-red-400">Sair</p>
//       </a>
//     </div>
//   );
// };

// MenuItems.jsx


const MenuItem = ({ id, icon, label, active, onClick }) => {
  return (
    <a
      id={id}
      className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full
         border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${active ? 'bg-green-400 bg-opacity-10' : ''
        }`}
      onClick={() => onClick(id)}
    >
      {React.createElement(icon, { className: 'mr-2 text-white', size: 20 })}
      <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-white">{label}</p>
    </a>
  );
};

const MenuItems = ({ activeOption, onOptionChange }) => {
  return (
    <div className="flex flex-col space-y-6 items-center justify-start mt-10 w-full">
      <MenuItem id="home" icon={Home} label="Home" active={activeOption === 'home'} onClick={onOptionChange} />
      <MenuItem id="dashboard" icon={BarChart2} label="Dashboard" active={activeOption === 'dashboard'} onClick={onOptionChange} />
      <MenuItem id="list" icon={List} label="Lista" active={activeOption === 'list'} onClick={onOptionChange} />
      <MenuItem id="myBoards" icon={BarChart2} label="Minha Banca" active={activeOption === 'myBoards'} onClick={onOptionChange} />
      <MenuItem id="perfil" icon={User} label="Perfil" active={activeOption === 'profile'} onClick={onOptionChange} />
    </div>
  );
};


// Sidebar.j

export const Sidebar = ({ onOptionChange, activeOption }) => {
  const isServer = typeof window === 'undefined';
  const [isMobile, setIsMobile] = useState(!isServer && window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isServer) {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isServer]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={isMobile ? 'md:hidden fixed top-0 left-0 right-0 bg-gray-900' : 'hidden md:flex flex-col space-y-90 items-center justify-between w-64 px-6 pt-16 pb-6 bg-gray-900'}>
      {isMobile && (
        <div className="flex justify-between items-center p-4">
          <p className="text-white">Bem vindo, Paulo!</p>
          <Menu
            className="text-white cursor-pointer"
            size={24}
            onClick={toggleMenu}
          />
        </div>
      )}

      {isMobile && isMenuOpen && (
        <div className="flex flex-col space-y-4 mt-10 items-center p-4">
        {/* Use MenuItems component */}
        <MenuItems activeOption={activeOption} onOptionChange={onOptionChange} />
    
        <Link href='/' className="flex items-center justify-center p-4 text-red-400"
         >
          <LogOut size={20} className="mr-2" />
          <span>Sair</span>
        </Link>
      </div>
        
      )}

      {!isMobile && (
        <div className="flex flex-col space-y-90 items-center justify-start w-full h-96">
          <div className="inline-flex space-x-2.5 items-start justify-start">
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <img src="/EasyGestao.png" alt="Imagem de Perfil" className="w-full h-full object-cover" />
            </div>
            <p className="text-base leading-normal text-white">Bem vindo,<br />Paulo!</p>
            <div className="flex-1 h-full bg-yellow-500 rounded-full" />
          </div>
          <MenuItems activeOption={activeOption} onOptionChange={onOptionChange} />
        </div>
      )}

      {!isMobile && (
        <Link href='/' className="flex items-center justify-center p-4 text-red-400" onClick={closeMenu}>
          <LogOut size={20} className="mr-2" />
          <span>Sair</span>
        </Link>
      )}
    </div>
  );
};

