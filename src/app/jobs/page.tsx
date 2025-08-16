"use client";

import { fetchJobs } from "@/services/remoteok";
import { Job } from "@/types/job";
import JobCard from "@/components/JobCard";
import { useEffect, useState } from "react";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.position.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = ["Frontend", "Backend", "DevOps", "fullstack"];

  const normalize = (str: string) => str.toLowerCase().replace(/[-_ ]/g, "");

  const filteredJobsByTag = selectedTag
    ? filteredJobs.filter((job) =>
        job.tags.some((tag) => normalize(tag).includes(normalize(selectedTag)))
      )
    : filteredJobs;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Remote Job Listings</h1>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3 w-full border border-gray-300 rounded px-4 py-2"
      />

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            className={`cursor-pointer text-xs font-medium px-3 py-1 rounded-full transition ${
              selectedTag === tag
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobsByTag.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            isFavorite={favorites.includes(job.id)}
            onToggleFavorite={() => {
              setFavorites((prev) =>
                prev.includes(job.id)
                  ? prev.filter((id) => id !== job.id)
                  : [...prev, job.id]
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}
