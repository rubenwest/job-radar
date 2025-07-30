export async function fetchJobs() {
  const res = await fetch("https://remoteok.com/api", {
    headers: {
      Accept: "application/json",
    },
    next: { revalidate: 3600 }, // Opcional: cache 1h (SSG)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await res.json();

  // RemoteOK devuelve un primer elemento con metadata, lo eliminamos
  return data.slice(1);
}
