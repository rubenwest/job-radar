export default function HomePage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center mt-16 space-y-6">
          <h1 className="text-4xl font-bold text-blue-600">🎯 Job Radar</h1>
          <p className="text-gray-600 text-lg">
            Encuentra tu próximo trabajo remoto con nuestra selección de ofertas
            tech.
          </p>
          <a
            href="/jobs"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            Buscar ofertas →
          </a>
        </div>
      </main>
    </div>
  );
}
