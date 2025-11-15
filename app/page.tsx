import Header from "@/components/Header";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import AIProjects from "@/components/AIProjects";
import Timeline from "@/components/Timeline";
import Benefits from "@/components/Benefits";
import DataRequirements from "@/components/DataRequirements";
import NextSteps from "@/components/NextSteps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExecutiveSummary />
      <AIProjects />
      <Timeline />
      <Benefits />
      <DataRequirements />
      <NextSteps />
      <Footer />
    </main>
  );
}
