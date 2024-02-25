import Image from "next/image";
 // Certifique-se de ter o react-router-dom instalado
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
    <a href="/login" className="bg-gray-500 text-white hover:text-gray-200 px-4 py-2 rounded-md mb-2">
      Login
    </a>
    <a href="/registro" className="bg-gray-500 text-white hover:text-gray-200 px-4 py-2 rounded-md mb-2">
      Registro
    </a>
    <a href="/dashboard" className="bg-gray-500 text-white hover:text-gray-200 px-4 py-2 rounded-md mb-2">
      Dashboard
    </a>
  </div>
  );
}
