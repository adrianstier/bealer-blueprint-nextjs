"use client";

import { motion } from "framer-motion";
import { TrendingUp, Mail, Shield, MessageSquare, Share2, Layers } from "lucide-react";

const projects = [
  {
    id: "A",
    title: "Lead Optimization & Growth Intelligence",
    tagline: "Know which leads to prioritize and how much to spend",
    icon: TrendingUp,
    problem: [
      "No data-driven way to identify which demographics convert best",
      "Unclear optimal lead spending levels",
      "Can't predict leads needed to hit variable comp thresholds",
      "No insight into bundling probability",
    ],
    solution: [
      "Predictive lead scoring system",
      "Demographic performance analysis",
      "Automated weekly budget recommendations",
      "Variable comp trajectory forecasting",
      "Conversion pattern analysis",
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
    title: "Automated Billing Communication System",
    tagline: "Keep senior customers informed and reduce payment issues",
    icon: Mail,
    problem: [
      "Older customers expect paper invoices and clear reminders",
      "Allstate's digital-first approach creates frustration",
      "Missed payments lead to preventable cancellations",
    ],
    solution: [
      "Automated invoice processing and mailing",
      "Personalized paper mail generation",
      "Risk identification for high-value customers",
      "Address validation and label printing",
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
    title: "Cancellation Prevention & Save System",
    tagline: "Stop preventable cancellations before they happen",
    icon: Shield,
    problem: [
      "Cancellation data difficult to review manually",
      "Missed outreach opportunities",
      "Preventable customer losses from cancellations and payment issues",
      "Lost premium and bonus potential",
    ],
    solution: [
      "Automated weekly cancel-pending monitoring",
      "Payment issue early warning system for all customers",
      "Risk prioritization system",
      "Urgency categorization (red/yellow/green)",
      "Personalized outreach templates and scripts",
      "Premium-at-risk tracking dashboard",
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
    title: "Customer Engagement & Communication System",
    tagline: "Stay connected with customers year-round",
    icon: MessageSquare,
    problem: [
      "Customers rarely hear from agent unless issues arise",
      "Rising rates require proactive communication",
      "Missed opportunities for trust-building",
      "Limited cross-selling and referral generation",
    ],
    solution: [
      "Automated monthly personalized newsletters",
      "Birthday, holiday, and life-event messaging",
      "Plain-English renewal summaries",
      "Post-claim follow-up automation",
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
    title: "Targeted Social Media Marketing System",
    tagline: "Reach the right customers in the right places",
    icon: Share2,
    problem: [
      "Limited lead sources",
      "Missed opportunity to target ideal customers",
      "High acquisition costs",
      "Low brand visibility in local market",
    ],
    solution: [
      "Intelligent audience targeting",
      "Automated ad creative generation and testing",
      "Continuous A/B testing optimization",
      "Multi-platform budget optimization",
      "Performance tracking and forecasting",
    ],
    data: [
      "Customer list for lookalike audiences",
      "High-converting zip codes",
      "Brand images and videos",
      "Allstate compliance requirements",
      "Lead outcomes and household demographics",
    ],
  },
  {
    id: "F",
    title: "Smart Cross-Sell & Bundle Optimization",
    tagline: "Increase premium per customer through intelligent product recommendations",
    icon: Layers,
    problem: [
      "Manual review of customer policies is time-consuming",
      "Missing obvious bundling and cross-sell opportunities",
      "Don't know when customers are most receptive to new products",
      "Difficult to track which life events trigger coverage needs",
      "No systematic follow-up on declined quotes",
    ],
    solution: [
      "Automated policy gap analysis for every customer",
      "Life event detection (marriage, new home, new car, children)",
      "Personalized product recommendations with timing optimization",
      "Bundle discount opportunity identification",
      "Cross-sell conversation scripts and email templates",
      "Competitive rate monitoring for switching opportunities",
    ],
    data: [
      "Current policy mix per customer",
      "Customer demographics and life stage",
      "Recent quote activity (sold and declined)",
      "Claims history and policy changes",
      "Competitor rate sheets",
      "Customer contact preferences and response history",
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
            Six Core Systems
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Each system tackles a specific business challenge while creating compounding long-term value
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
                        How We Solve It
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
