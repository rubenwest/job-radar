"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `hover:underline ${
      pathname === path ? "font-bold text-blue-600" : "text-gray-700"
    }`;

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Job Radar
        </Link>
        <div className="space-x-4">
          <Link href="/jobs" className={linkClass("/jobs")}>
            Jobs
          </Link>
          <Link href="/favorites" className={linkClass("/favorites")}>
            Favorites
          </Link>
        </div>
      </nav>
    </header>
  );
}
