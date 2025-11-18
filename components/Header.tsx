"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Agency Growth & Retention System
          </h1>

          <p className="text-xl md:text-2xl font-light opacity-95">
            Strategic Blueprint for Scaling Allstate Santa Barbara & Goleta
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm md:text-base opacity-90 pt-4">
            <span>
              <strong className="font-semibold">For:</strong> Derrick Bealer, Allstate Agent
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              <strong className="font-semibold">By:</strong> Adrian Stier
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              <strong className="font-semibold">Date:</strong> November 2025
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Link
              href="/timeline"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-all duration-200 border border-white/20"
            >
              View Timeline
            </Link>
            <Link
              href="/data-requirements"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-all duration-200 border border-white/20"
            >
              Data Requirements
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
