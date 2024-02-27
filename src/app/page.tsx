"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirecionar para a página de login ao acessar o caminho '/'
    router.push('/login');
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      {/* Conteúdo opcional da página Home */}
    </div>
  );
};

export default Home;
