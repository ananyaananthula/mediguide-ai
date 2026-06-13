import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getBackendHealth } from "@/lib/api";

const features = [
  {
    icon: "🤖",
    title: "AI Symptom Assistant",
    description:
      "Describe your symptoms naturally and receive AI-powered healthcare guidance with educational explanations.",
  },
  {
    icon: "🌿",
    title: "Home Remedies",
    description:
      "Discover safe home remedies, wellness tips, and simple exercises for mild everyday conditions.",
  },
  {
    icon: "🏥",
    title: "Find Nearby Hospitals",
    description:
      "Locate nearby hospitals and healthcare centers using real-world location data and maps.",
  },
  {
    icon: "👨‍⚕️",
    title: "Doctor Discovery",
    description:
      "Explore doctors by specialty, experience, and healthcare domain using trusted public data sources.",
  },
  {
    icon: "🧠",
    title: "Medical Knowledge Hub",
    description:
      "Ask health-related questions and understand diseases, medications, and preventive care in simple language.",
  },
  {
    icon: "📱",
    title: "Available Anywhere",
    description:
      "A responsive platform designed to work beautifully across desktop, tablet, and mobile devices.",
  },
];

export default async function Home() {
  const backendHealth = await getBackendHealth();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32">
          <div className="mb-8 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            🚀 AI-Powered Healthcare Assistant for Everyone
          </div>

          <h1 className="max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
            Your One-Stop Destination for
            <span className="mt-2 block text-blue-600">
              Smart Healthcare Guidance
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            MediGuide AI combines artificial intelligence with trusted medical
            information to help you understand symptoms, explore home remedies,
            discover nearby hospitals, and make informed healthcare decisions —
            all from one platform.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700">
              🤖 Try AI Assistant
            </button>

            <button className="rounded-xl border border-border bg-background px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 hover:bg-muted">
              🏥 Find Hospitals
            </button>
          </div>

          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 px-6 py-4">
            <p className="text-sm font-medium text-green-700">
              ✅ Backend Status: {backendHealth.status}
            </p>
            <p className="mt-1 text-sm text-green-600">
              {backendHealth.message}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14 text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Features
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Everything You Need for
            <span className="block text-blue-600">
              Smarter Healthcare
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            A complete AI-powered healthcare companion designed to help users
            understand symptoms, discover medical knowledge, and connect with
            trusted healthcare resources.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 text-5xl">{feature.icon}</div>

              <h3 className="mb-3 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="leading-7 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}