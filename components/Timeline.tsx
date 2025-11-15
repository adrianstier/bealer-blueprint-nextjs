"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const phases = [
  {
    number: "1",
    title: "Data Collection & AI Model Setup",
    weeks: "Weeks 1-3",
    tasks: [
      "Collect all datasets from agency systems",
      "Clean and normalize data",
      "Build lead scoring models",
      "Build cancellation prediction models",
      "Create customer personas and segments",
      "Establish data pipelines",
    ],
    deliverable: "Validated datasets and trained AI models",
  },
  {
    number: "2",
    title: "Prototype Automation Systems",
    weeks: "Weeks 4-6",
    tasks: [
      "Build AI invoice parser and mailing system",
      "Create cancellation dashboard with risk triage",
      "Develop first version of personalized newsletters",
      "Build social ad generator and targeting system",
      "Create executive AI summarization tool",
      "Test workflows with sample data",
    ],
    deliverable: "Working prototypes for all five systems",
  },
  {
    number: "3",
    title: "Full Automation Deployment",
    weeks: "Weeks 7-9",
    tasks: [
      "Deploy lead optimization agent to production",
      "Launch automated invoice mailing agent",
      "Activate concierge workflows",
      "Start social ad automation campaigns",
      "Implement weekly AI reporting system",
      "Train team on using AI tools",
    ],
    deliverable: "Fully operational AI systems in production",
  },
  {
    number: "4",
    title: "Optimization & Scaling",
    weeks: "Weeks 10-12",
    tasks: [
      "AI accuracy training and refinement",
      "A/B testing of newsletters and ads",
      "Advanced lead forecasting implementation",
      "Full systems integration and workflow optimization",
      "Create documentation and knowledge base",
      "Establish ongoing support plan",
    ],
    deliverable: "Optimized, integrated system with full documentation",
  },
];

const metrics = [
  { week: "Week 3", label: "Lead Scoring Model Accuracy >80%" },
  { week: "Week 6", label: "All Prototypes Functional" },
  { week: "Week 9", label: "First Automated Campaign Live" },
  { week: "Week 12", label: "15-20% Reduction in Manual Tasks" },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Implementation Timeline
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
            12-week phased rollout with measurable milestones
          </p>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary-light to-primary" />

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative md:pl-32"
                >
                  {/* Phase Number Badge */}
                  <div className="hidden md:flex absolute left-0 top-0 w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full items-center justify-center text-white text-2xl font-bold shadow-xl z-10">
                    {phase.number}
                  </div>

                  {/* Phase Content */}
                  <div className="bg-white border-2 border-primary-light rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Phase Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="md:hidden w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center text-white text-xl font-bold">
                          {phase.number}
                        </div>
                        <h3 className="text-2xl font-bold text-primary flex-1">
                          {phase.title}
                        </h3>
                      </div>
                      <span className="inline-block bg-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {phase.weeks}
                      </span>
                    </div>

                    {/* Tasks */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-4">
                      <ul className="space-y-3">
                        {phase.tasks.map((task, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700 border-b border-gray-200 last:border-0 pb-3 last:pb-0"
                          >
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverable */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-4">
                      <p className="text-gray-800">
                        <strong className="text-green-700">Deliverable:</strong>{" "}
                        {phase.deliverable}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              Success Metrics by Phase
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.week}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-primary-light mb-2">
                    {metric.week}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
