"use client";

import { motion } from "framer-motion";
import { FileCheck, Database, Calendar, Users } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileCheck,
    title: "Review & Approve",
    description: "Review this blueprint with Derrick and get approval to proceed",
  },
  {
    number: "2",
    icon: Database,
    title: "Data Collection",
    description: "Work with Britney to gather all required datasets",
  },
  {
    number: "3",
    icon: Calendar,
    title: "Kick-off Meeting",
    description: "Schedule initial working session to begin Phase 1",
  },
  {
    number: "4",
    icon: Users,
    title: "Weekly Check-ins",
    description: "Establish regular progress reviews and feedback sessions",
  },
];

export default function NextSteps() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            Next Steps
          </h2>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 text-center border-2 border-gray-200 hover:border-primary-light shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <Icon className="w-10 h-10 text-primary-light mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white rounded-2xl border-4 border-primary-light p-8 md:p-12 text-center shadow-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transform Your Agency?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              This AI-enabled strategy positions Derrick's agency far ahead of competitors by
              creating a predictable, scalable, automated growth engine that attracts better
              customers, protects existing policies, builds deeper loyalty, and helps achieve
              higher year-end variable compensation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Kick-off Meeting
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.print()}
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Download Full Proposal (PDF)
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
