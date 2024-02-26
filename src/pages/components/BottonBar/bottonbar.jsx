// NavOption.js
import React from 'react';

const NavOption = ({ id, icon, label, active, onOptionChange }) => (
  <a
    id={id}
    className={`hover:bg-green-400 hover:bg-opacity-10 rounded-full 
      inline-flex items-center justify-center p-2 ${
        active ? 'hover:bg-green-100 bg-opacity-10' : ''
      }`}
    onClick={() => onOptionChange(id)}
  >
    {icon}
    <p className="text-sm font-medium tracking-wide leading-tight text-white">{label}</p>
  </a>
);


const BottonBar = ({ onIconClick, activeOption }) => {
  const icons = [
    {
      id: 'home',
      icon: (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0473e596c29d05fca755acb04933d4ff93ddbb7d04f53dd2ce94b6f3d05f9e97?apiKey=7da105ff23d54111b1bb20395e740f5d&"
          alt="Icon 1"
          className="self-stretch my-auto w-6 aspect-square"
        />
      )
    },
    {
      id: 'list',
      icon: (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66386f9a8540787ba90d76a5ddaa1f1d3a62026bfe946cd4462aa50a27436bcd?apiKey=7da105ff23d54111b1bb20395e740f5d&"
          alt="Icon 2"
          className="self-stretch my-auto w-6 aspect-square"
        />
      )
    },
    {
      id: 'myBoards',
      icon: (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d4e43dbdf251e9492ff9b2d08fdb86e00984e3bdb620635507ff87227378a9e?apiKey=7da105ff23d54111b1bb20395e740f5d&"
          alt="Icon 3"
          className="self-stretch my-auto aspect-square w-[52px]"
        />
      )
    },
    {
      id: 'dashboards',
      icon: (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/325f9e8f5030788864946f6642382e81735e226068fb4543a6f676b6e1bdd243?apiKey=7da105ff23d54111b1bb20395e740f5d&"
          alt="Icon 4"
          className="self-stretch my-auto aspect-square fill-zinc-50 w-[22px]"
        />
      )
    },
    {
      id: 'profile',
      icon: (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/130eb3b87813760adbcdf32af92a534aaa20a0b7825e282662f4e4a246d270d6?apiKey=7da105ff23d54111b1bb20395e740f5d&"
          alt="Icon 5"
          className="self-stretch my-auto w-6 aspect-square"
        />
      )
    },
  ];

  return (
    <header className="fixed bottom-0 left-0 right-0  z-50 bg-slate-900 border-t border-solid
     border-t-indigo-600 rounded-lg">
  <div className="flex justify-between items-center px-6 py-4 rounded-2xl">
    {icons.map((navOption) => (
      <NavOption
        key={navOption.id}
        id={navOption.id}
        icon={navOption.icon}
        label={navOption.label}
        active={activeOption === navOption.id}
        onOptionChange={onIconClick}
      />
    ))}
  </div>
</header>
  );
};

export default BottonBar;