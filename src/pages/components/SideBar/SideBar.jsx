import React, { useState, useEffect } from 'react';
import { Home, List, BarChart2, User, LogOut, LineChart, Menu } from 'lucide-react';
import Link from 'next/link';





 export const Sidebar = ({ onOptionChange, activeOption, ...props }) => {


   return (
     <div className=" md:flex flex-col space-y-90 
     items-center justify-between w-64 px-6 pt-16 pb-6 bg-gray-900">
       <div className="flex flex-col space-y-12 items-center justify-start w-full h-96">

         <div className="inline-flex space-x-2.5 items-start justify-start">
           <div className="w-10 h-10 overflow-hidden rounded-full">
             <img src="/EasyGestao.png" alt="Imagem de Perfil" className="w-full h-full object-cover" />
           </div>
           <p className="text-base leading-normal text-white">Bem vindo,<br />Paulo!</p>
           <div className="flex-1 h-full bg-yellow-500 rounded-full" />
         </div>

         <div className="w-full">
               <div className="flex flex-col space-y-6 items-center justify-start w-full">
                 <Link
                  href={'#'}
                   id="home"
                   className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full
                    border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${
                     activeOption === 'home' ? 'bg-green-400 bg-opacity-10' : ''
                   }`}
                   onClick={() => onOptionChange('home')}
                 >
                   <Home className="mr-2 text-white" size={20} />
                   <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-white">Home</p>
                 </Link>

                 <Link
                    href={'#'}
                   id="dashboard"
                   className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full
                    border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${
                     activeOption === 'dashboard' ? 'bg-green-400 bg-opacity-10' : ''
                   }`}
                   onClick={() => onOptionChange('dashboard')}
                 >
                   <LineChart className="mr-2 text-white" size={20} />
                   <p className="flex-1 text-sm font-medium tracking-wide leading-tight
                    text-white">Dashboard</p>
                 </Link>

                 <Link
                    href={'#'}
                   id="list"
                   className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${
                     activeOption === 'list' ? 'bg-green-400 bg-opacity-10' : ''
                   }`}
                   onClick={() => onOptionChange('list')}
                 >
                   <List className="mr-2 text-white" size={20} />
                   <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-white">Lista</p>
                 </Link>

                 <Link href={'#'}
                   id="myBoards"
                   className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${
                     activeOption === 'myBoards' ? 'bg-green-400 bg-opacity-10' : ''
                   }`}
                   onClick={() => onOptionChange('myBoards')}
                 >
                   <BarChart2 className="mr-2 text-white" size={20} />
                   <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-white">Minha Banca</p>
                 </Link>

                 <Link href={'#'}
                   id="perfil"
                   className={`hover:bg-green-400 hover:bg-opacity-10 border rounded-full border-green-400 inline-flex space-x-2 items-center justify-start w-full p-3 ${
                     activeOption === 'profile' ? 'bg-green-400 bg-opacity-10' : ''
                   }`}
                   onClick={() => onOptionChange('profile')}
                 >
                   <User className="mr-2 text-white" size={20} />
                   <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-white">Perfil</p>
                 </Link>
               </div>
         </div>

       </div>

       <Link href='/' className="inline-flex space-x-2 mt-1 items-center 
       justify-start w-full p-3 rounded-lg">
         <div className="flex items-center justify-center w-10 h-full p-2 rounded-full">
           <LogOut className="mr-2 text-red-400" size={20} />
         </div>
         <p className="flex-1 text-sm font-medium tracking-wide leading-tight text-red-400">Sair</p>
       </Link>
     </div>
   );
 };
