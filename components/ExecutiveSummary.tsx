"use client";

import { motion } from "framer-motion";
import { Target, Zap, Lightbulb, ArrowRight } from "lucide-react";

const summaryCards = [
  {
    icon: Target,
    title: "The Opportunity",
    description:
      "Santa Barbara/Goleta represents one of the most competitive and high-value personal lines markets with significant retiree population, high-value homeowners, and tech professionals.",
  },
  {
    icon: Zap,
    title: "The Challenge",
    description:
      "Rising rate pressure, increased cancellation risk, manual processes, and limited scalability threaten growth potential and customer retention.",
  },
  {
    icon: Lightbulb,
    title: "The Solution",
    description:
      "A six-pillar integrated system that creates predictable, scalable growth through intelligent automation, personalization, and data-driven decision making.",
  },
];

const lifecycleSteps = ["Attract", "Convert", "Protect", "Nurture", "Upsell", "Retain"];

export default function ExecutiveSummary() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Executive Summary
          </h2>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-16">
            {summaryCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Growth Lifecycle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              Continuous Growth Lifecycle
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {lifecycleSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white px-6 py-3 rounded-full border-2 border-primary-light shadow-sm font-semibold text-primary hover:bg-primary-light hover:text-white transition-all duration-300 cursor-default"
                  >
                    {step}
                  </motion.div>
                  {index < lifecycleSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-primary-light hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
