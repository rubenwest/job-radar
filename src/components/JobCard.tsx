"use client";

import { Job } from "@/types/job";
import Image from "next/image";
import Link from "next/link";

type Props = {
  job: Job;
  isFavorite: boolean;
  onToggleFavorite?: () => void;
};

export default function JobCard({ job, isFavorite, onToggleFavorite }: Props) {
  const tags = Array.from(new Set(job.tags));

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md h-full flex flex-col justify-between">
      <div className="flex gap-4 items-start">
        {job.logo && (
          <div className="w-12 h-12 flex-shrink-0 relative">
            <Image
              src={job.logo}
              alt={job.company}
              fill
              className="object-contain rounded"
            />
          </div>
        )}
        <div className="flex-1">
          <h2
            className="text-lg font-semibold text-black"
            dangerouslySetInnerHTML={{ __html: job.position }}
          />

          <p className="text-sm text-gray-600">
            {job.company} · {job.location}
          </p>
          <div className="flex gap-2 flex-wrap mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <button onClick={onToggleFavorite}>{isFavorite ? "💙" : "🤍"}</button>
        </div>
      </div>

      <div className=""></div>

      <div className="mt-4">
        <Link
          href={job.url}
          target="_blank"
          className="text-sm text-blue-600 hover:underline"
        >
          Ver oferta →
        </Link>
      </div>
    </div>
  );
}
