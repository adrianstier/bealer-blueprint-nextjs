"use client";

import { motion } from "framer-motion";

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
              <strong className="font-semibold">By:</strong> Adrian
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              <strong className="font-semibold">Date:</strong> November 2025
            </span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
