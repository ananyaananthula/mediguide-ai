const API_BASE_URL = "http://127.0.0.1:8000";

export async function getBackendHealth() {
  const response = await fetch(`${API_BASE_URL}/health`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to connect to backend.");
  }

  return response.json();
}