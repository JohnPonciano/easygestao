import { useState } from 'react';
import Image from 'next/image';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import '../../app/globals.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
        <div className="w-full p-8 md:w-1/2 mt-40">
          <div className="bg-white rounded-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" required />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Senha:</label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="w-full p-2 border rounded-md pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute  right-2 focus:outline-none"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                  </button>
                </div>
                <a href="#" className="text-blue-500 block mt-2">Esqueceu sua senha?</a>
              </div>
              <button type="submit" className="bg-green-500 text-white p-2 w-full rounded-full hover:bg-green-600">Entrar</button>
            </form>
            <div className="mt-4">
              <a href="/registro" className="text-blue-500">Cadastre-se</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
