import React, { useState } from 'react';

const UserProfile = () => {
  const [userName, setUserName] = useState('Seu Nome');
  const [profileImage, setProfileImage] = useState('/EasyGestao.png');
  const [isHovered, setIsHovered] = useState(false);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleImageChange = (e) => {
    // Lógica para lidar com o upload de imagem
    setProfileImage('NOVA_URL_DA_IMAGEM');
  };

  const handleSaveChanges = () => {
    // Lógica para salvar as alterações
    console.log('Alterações salvas:', { userName, profileImage });
  };

  return (
    <div className="flex flex-col items-center mt-52">
      <div className="relative">
        <img
          src={profileImage}
          alt="Imagem de Perfil"
          className="w-32 h-32 object-cover rounded-full"
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          Alterar foto
        </div>
        <label
          htmlFor="imageInput"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </label>
      </div>
      <div className="mt-4">
        <label htmlFor="userName" className="block text-gray-700 font-semibold mb-1">Nome:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={handleNameChange}
          className="w-64 px-4 py-2 border rounded focus:outline-none focus:border-green-500"
        />
      </div>
      <button
        onClick={handleSaveChanges}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700"
      >
        Salvar Alterações
      </button>
    </div>
  );
};

export default UserProfile;
