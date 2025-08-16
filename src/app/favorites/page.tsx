"use client";

import JobCard from "@/components/JobCard";
import { Job } from "@/types/job";
import { useEffect, useState } from "react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Job[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/favorites")
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      .catch((err) => console.error("Error al obtener favoritos:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">⭐ Favoritos guardados</h1>
      <ul className="space-y-4">
        {favorites.map((job) => (
          <JobCard key={job.id} job={job} isFavorite={true} />
        ))}
      </ul>
    </div>
  );
}
