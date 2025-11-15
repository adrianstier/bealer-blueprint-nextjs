"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Settings, Star, Check } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    items: [
      "Predictable and scalable lead generation",
      "Higher conversion rates through better targeting",
      "Improved bundling opportunities",
      "More efficient marketing spending",
      "Clear path to higher compensation tiers",
    ],
  },
  {
    icon: Shield,
    title: "Retention",
    items: [
      "Fewer preventable cancellations",
      "Stronger customer relationships",
      "Improved clarity around renewals",
      "Higher customer satisfaction scores",
      "Proactive issue resolution",
    ],
  },
  {
    icon: Settings,
    title: "Operational Efficiency",
    items: [
      "Automated monthly and weekly workflows",
      "Reduced manual labor and administrative burden",
      "More time for high-value activities",
      "AI-powered executive insights",
      "Streamlined decision-making processes",
    ],
  },
  {
    icon: Star,
    title: "Customer Experience",
    items: [
      "Personal, relevant, meaningful communication",
      "Seamless tech integration with human service",
      "Santa Barbara/Goleta-specific localization",
      "Stronger emotional connection to agency",
      "Timely, proactive support",
    ],
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            Integrated System Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-500 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 text-center">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
