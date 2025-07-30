"use client";

import { fetchJobs } from "@/services/remoteok";
import { Job } from "@/types/job";
import JobCard from "@/components/JobCard";
import { useEffect, useState } from "react";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.position.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Remote Job Listings</h1>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full border border-gray-300 rounded px-4 py-2"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
