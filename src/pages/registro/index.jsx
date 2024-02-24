import { useState } from 'react';
import Image from 'next/image';
import '../../app/globals.css';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="bg-indigo-950 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex justify-center">
        {/* Coluna 1 */}
        <div className="w-1/2 p-8 hidden md:flex md:flex-col md:items-center">
          {/* Centralize a sua imagem aqui */}
          <div className="w-800 h-800 mb-4 flex items-center justify-center">
            <Image src="/EasyGestao.png" alt="Logo" width={800} height={800} />
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="w-full p-8 md:w-1/2 mt-4">
          <div className="bg-white rounded-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Cadastrar-se</h2>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                <input type="text" id="nome" name="nome" className="w-full p-2 border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" required />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Senha:</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="w-full p-2 border rounded-md pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute mt-2 right-2 focus:outline-none"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <EyeOffIcon/>: <EyeIcon/>}
                </button>

              </div>
              <div className="mb-4 relative">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirme sua senha:</label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full p-2 border rounded-md pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute mt-2  right-2 focus:outline-none"
                  onClick={toggleShowConfirmPassword}
                >
                  {showConfirmPassword ?  <EyeOffIcon/> : <EyeIcon/>}
                </button>
              </div>
              <button type="submit" className="bg-green-500 text-white p-2 w-full rounded-full hover:bg-green-600">Cadastrar</button>
            </form>
            <div className="mt-4">
              <a href="/login" className="text-blue-500">Já possuo uma conta</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
