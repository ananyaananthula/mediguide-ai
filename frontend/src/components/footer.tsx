export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl">🏥</span>
              <span className="text-2xl font-bold">
                MediGuide AI
              </span>
            </div>

            <p className="max-w-md text-muted-foreground">
              An AI-powered healthcare companion designed to help users
              understand symptoms, explore medical knowledge, discover nearby
              hospitals, and make informed healthcare decisions.
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="mb-3 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-wrap gap-4 md:justify-end">
              <a href="#" className="hover:text-blue-600">
                Home
              </a>

              <a href="#" className="hover:text-blue-600">
                AI Assistant
              </a>

              <a href="#" className="hover:text-blue-600">
                Hospitals
              </a>

              <a href="#" className="hover:text-blue-600">
                About
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 MediGuide AI • Built with Next.js, FastAPI, Tailwind CSS, and
          AI technologies.
        </div>
      </div>
    </footer>
  );
}