import Image from "next/image";
import Link from "next/link";
 // Certifique-se de ter o react-router-dom instalado
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
    <Link href="/login" className="bg-gray-500 text-white hover:text-gray-200 px-4 py-2 rounded-md mb-2">
      Login
    </Link>
    <Link href="/registro" className="bg-gray-500 text-white hover:text-gray-200 px-4 py-2 rounded-md mb-2">
      Registro
    </Link>
    <Link href="/dashboard" className="bg-gray-500 text-white hover:text-gray-200 px-4 py-2 rounded-md mb-2">
      Dashboard
    </Link>
  </div>
  );
}
