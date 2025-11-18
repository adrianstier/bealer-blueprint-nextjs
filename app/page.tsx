"use client";

import { useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useReactToPrint } from "react-to-print";
import Header from "@/components/Header";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import AIProjects from "@/components/AIProjects";
import Benefits from "@/components/Benefits";
import NextSteps from "@/components/NextSteps";
import Footer from "@/components/Footer";

export default function Home() {
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
    documentTitle: "Agency Growth & Retention System - Allstate Blueprint",
  });

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary-light flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Don't render content if not authenticated
  if (status === "unauthenticated") {
    return null;
  }

  return (
    <>
      <main ref={contentRef} className="min-h-screen">
        <Header />
        <ExecutiveSummary />
        <AIProjects />
        <Benefits />
        <NextSteps onPrintClick={handlePrint} />
        <Footer />
      </main>
    </>
  );
}
