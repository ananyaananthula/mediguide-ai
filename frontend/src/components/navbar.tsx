export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏥</span>
          <span className="text-xl font-bold tracking-tight">
            MediGuide AI
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#" className="transition-colors hover:text-blue-600">
            Home
          </a>
          <a href="/assistant" className="transition-colors hover:text-blue-600">
            AI Assistant
          </a>
          <a href="#" className="transition-colors hover:text-blue-600">
            Find Hospitals
          </a>
          <a href="#" className="transition-colors hover:text-blue-600">
            About
          </a>
        </div>

        <button
          className="rounded-md border border-border p-2 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}