import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="flex flex-columb justify-center items-center w-full h-96 bg-blue-200">
        <h1 className="text-2xl font-bold text-gray-900">Home page</h1>
        <Link
          href="/another"
          className="text-2xl font-bold text-zinc-800 hover:text-orange-700 transition-colors duration-300"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
