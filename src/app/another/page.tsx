import Link from 'next/link';

export default function Another() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center w-full h-96 bg-blue-200">
        <h1 className="text-2xl font-bold text-gray-900">Another page</h1>
        <Link
          href="/"
          className="text-2xl font-bold text-zinc-800 hover:text-orange-700 transition-colors duration-300"
        >
          Go Home
        </Link>
        <a
          href="/oneword"
          className="text-2xl text-zinc-800 decoration-solid hover:text-orange-700 transition-colors duration-300"
        >
          Ordinary link to go home
        </a>
      </div>
    </main>
  );
}
