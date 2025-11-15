"use client";

import { motion } from "framer-motion";
import { TrendingUp, Mail, Shield, MessageSquare, Share2 } from "lucide-react";

const projects = [
  {
    id: "A",
    title: "AI Lead Acquisition & Growth Optimization",
    tagline: "Predictive lead scoring and ROI optimization",
    icon: TrendingUp,
    problem: [
      "No data-driven way to identify which demographics convert best",
      "Unclear optimal lead spending levels",
      "Can't predict leads needed to hit variable comp thresholds",
      "No insight into bundling probability",
    ],
    solution: [
      "ML predictive lead scoring",
      "Demographic segmentation model",
      "Automated weekly budget optimization",
      "ROI and variable comp trajectory forecasting",
      "NLP analysis of customer interactions",
    ],
    data: [
      "Historical lead files with outcomes",
      "Customer demographics and premium amounts",
      "Marketing source per lead",
      "Sales activity logs and notes",
      "Variable compensation thresholds",
    ],
  },
  {
    id: "B",
    title: "Automated AI Invoice & Envelope Mailing",
    tagline: "Retention engine for high-value older customers",
    icon: Mail,
    problem: [
      "Older customers expect paper invoices and clear reminders",
      "Allstate's digital-first approach creates frustration",
      "Missed payments lead to preventable cancellations",
    ],
    solution: [
      "Automated invoice downloading and parsing",
      "Personalized paper mail packet generation",
      "Auto-classification of high-risk customers",
      "Address validation and label printing",
      "Retention risk scoring",
    ],
    data: [
      "Monthly invoice files (PDF)",
      "Customer addresses and demographics",
      "Payment history",
      "Billing preferences",
      "Complaints/notes about billing confusion",
    ],
  },
  {
    id: "C",
    title: "AI Cancellation Watchtower & Save System",
    tagline: "Proactive risk monitoring and automated outreach",
    icon: Shield,
    problem: [
      "Cancellation data difficult to review manually",
      "Missed outreach opportunities",
      "Preventable customer losses",
      "Lost premium and bonus potential",
    ],
    solution: [
      "Weekly auto-download of cancel-pending list",
      "Predictive cancellation risk modeling",
      "Urgency categorization (red/yellow/green)",
      "Personalized texts, emails, and call scripts",
      "Dashboard showing premium at risk",
    ],
    data: [
      "Weekly cancel-pending reports",
      "Reason codes and renewal dates",
      "Contact information",
      "Historical save attempts and notes",
      "Premium per policy and communication logs",
    ],
  },
  {
    id: "D",
    title: "AI Concierge + Personalized Newsletter",
    tagline: "Automated relationship building and engagement",
    icon: MessageSquare,
    problem: [
      "Customers rarely hear from agent unless issues arise",
      "Rising rates require proactive communication",
      "Missed opportunities for trust-building",
      "Limited cross-selling and referral generation",
    ],
    solution: [
      "AI-generated monthly personalized newsletters",
      "Birthday, holiday, and life-event messages",
      "Plain-English renewal summaries",
      "Post-claim check-ins",
      "Local Santa Barbara content integration",
    ],
    data: [
      "Age, household structure, and renewal dates",
      "Policy mix and birthdays",
      "Customer interests (simple survey)",
      "Service history and claim history",
    ],
  },
  {
    id: "E",
    title: "AI Targeted Social Media Marketing",
    tagline: "Intelligent audience targeting and ad optimization",
    icon: Share2,
    problem: [
      "Limited lead sources",
      "Missed opportunity to target ideal customers",
      "High acquisition costs",
      "Low brand visibility in local market",
    ],
    solution: [
      "Predictive audience modeling",
      "AI-generated ad creative (copy + images + scripts)",
      "Automated A/B testing",
      "Budget optimization across platforms",
      "Conversion probability forecasting",
    ],
    data: [
      "Customer list for lookalike audiences",
      "High-converting zip codes",
      "Brand images and videos",
      "Allstate compliance requirements",
      "Lead outcomes and household demographics",
    ],
  },
];

export default function AIProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Five Core AI Projects
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Each system solves a specific challenge while creating compounding long-term value
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-10 shadow-md hover:shadow-xl hover:border-primary-light transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                        {project.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 italic text-lg">{project.tagline}</p>
                    </div>
                    <div className="hidden md:block">
                      <Icon className="w-10 h-10 text-primary-light" />
                    </div>
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid md:grid-cols-3 gap-8 mt-8 pt-8 border-t-2 border-gray-100">
                    {/* Problem */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                        <span className="text-primary-light">▸</span>
                        The Problem
                      </h4>
                      <ul className="space-y-2">
                        {project.problem.map((item, i) => (
                          <li key={i} className="text-gray-600 text-sm leading-relaxed pl-4 relative">
                            <span className="absolute left-0 text-primary-light font-bold">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                        <span className="text-primary-light">▸</span>
                        AI Solution
                      </h4>
                      <ul className="space-y-2">
                        {project.solution.map((item, i) => (
                          <li key={i} className="text-gray-600 text-sm leading-relaxed pl-4 relative">
                            <span className="absolute left-0 text-primary-light font-bold">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Data Needed */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                        <span className="text-primary-light">▸</span>
                        Key Data Needed
                      </h4>
                      <ul className="space-y-2">
                        {project.data.map((item, i) => (
                          <li key={i} className="text-gray-600 text-sm leading-relaxed pl-4 relative">
                            <span className="absolute left-0 text-primary-light font-bold">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
