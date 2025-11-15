"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Square } from "lucide-react";

const dataCategories = [
  {
    title: "1. Customer Data",
    items: [
      "Names, emails, phone numbers",
      "Addresses",
      "Age and household structure",
      "Renewal dates",
      "Policy mix and premium amounts",
      "Birthdays",
      "Customer interests (optional)",
      "Claim history",
      "Service notes and interaction history",
    ],
  },
  {
    title: "2. Lead Data",
    items: [
      "Full historical lead lists (CSV/Excel)",
      "Lead sources and marketing channels",
      "Outcomes (quoted/sold/unreachable)",
      "Premium amounts and policy types",
      "Demographic data (age, zip, income proxies)",
      "Sales activity logs",
      "Notes and comments on leads",
      "Conversion timelines",
    ],
  },
  {
    title: "3. Cancellation Data",
    items: [
      "Weekly cancel-pending reports",
      "Cancellation reason codes",
      "Premium at risk per policy",
      "Renewal dates and policy details",
      "Communication history",
      "Historical save attempts and outcomes",
      "Customer contact information",
    ],
  },
  {
    title: "4. Billing Data",
    items: [
      "Monthly invoice files (PDF or similar)",
      "Payment history and dates",
      "Billing preferences (paper vs digital)",
      "Customer addresses for mailing",
      "Complaints or notes about billing confusion",
      "Auto-pay status",
    ],
  },
  {
    title: "5. Marketing Data",
    items: [
      "Existing brand assets (logos, images, videos)",
      "Social media account access",
      "Prior campaign results (if available)",
      "Allstate marketing compliance requirements",
      "Target zip codes and demographics",
      "Current marketing budget allocation",
    ],
  },
  {
    title: "6. Business Performance Data",
    items: [
      "Variable compensation thresholds",
      "Current policy counts by type",
      "Bundling rates and cross-sell data",
      "Average customer lifetime value",
      "Lead cost and ROI metrics",
      "Retention rates by segment",
    ],
  },
];

export default function DataRequirements() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    const newChecked = new Set(checkedItems);
    if (newChecked.has(key)) {
      newChecked.delete(key);
    } else {
      newChecked.add(key);
    }
    setCheckedItems(newChecked);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Data Requirements Checklist
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Essential data needed to power the AI systems
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary-light">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const key = `${categoryIndex}-${itemIndex}`;
                    const isChecked = checkedItems.has(key);
                    return (
                      <li
                        key={itemIndex}
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className={`flex items-start gap-3 text-sm leading-relaxed cursor-pointer border-b border-gray-100 last:border-0 pb-3 last:pb-0 transition-all duration-200 hover:bg-gray-50 p-2 -m-2 rounded-lg ${
                          isChecked ? "text-green-700 line-through bg-green-50" : "text-gray-600"
                        }`}
                      >
                        {isChecked ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
                        )}
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
