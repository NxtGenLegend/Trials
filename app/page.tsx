export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mx-auto max-w-2xl rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-center text-3xl font-bold">Next.js Deploy Test</h1>
        <p className="mb-6 text-center text-gray-600">
          Minimal Next.js 14 + TypeScript + Tailwind repository, ready for real deployments.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="/api/ping"
            className="rounded-md bg-gray-900 px-4 py-2 text-center font-medium text-white hover:bg-gray-800"
          >
            Test API: /api/ping
          </a>
          <a
            href="https://docs.github.com/webhooks"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-center font-medium hover:bg-gray-50"
          >
            GitHub Webhooks Docs
          </a>
        </div>
      </div>
    </main>
  );
}


