import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import '../../app/globals.css';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obter as credenciais do localStorage
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : null;

    if (userData && userData.email === email && userData.password === password) {
      // Credenciais corretas, redirecione para a página principal ou outra rota desejada
      router.push('/dashboard');
    } else {
      // Credenciais incorretas, exibir notificação
      setNotification('Credenciais incorretas. Tente novamente.');
      // Limpar a notificação após alguns segundos
      setTimeout(() => {
        setNotification('');
      }, 3000);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-indigo-950 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex justify-center">
        <div className="w-1/2 p-8 hidden md:flex md:flex-col md:items-center">
          <div className="w-800 h-800 mb-4 flex items-center justify-center">
            <Image src="/EasyGestao.png" alt="Logo" width={800} height={800} />
          </div>
        </div>

        <div className="w-full p-8 md:w-1/2 mt-40">
          <div className="bg-white rounded-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {notification && <div className="mb-4 text-red-500">{notification}</div>}
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded-md"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              <button
                type="submit"
                className="bg-green-500 text-white p-2 w-full rounded-full hover:bg-green-600"
              >
                Entrar
              </button>
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
