"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Timeline from "@/components/Timeline";
import Link from "next/link";

export default function TimelinePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "Implementation Timeline - Allstate Blueprint",
  });

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary-light flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                ← Back to Overview
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Implementation Timeline</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/data-requirements"
                className="text-primary hover:text-primary-dark font-medium transition-colors"
              >
                View Data Requirements
              </Link>
              <button
                onClick={handlePrint}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Print Timeline
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main ref={contentRef} className="py-12">
        <Timeline />
      </main>
    </div>
  );
}
