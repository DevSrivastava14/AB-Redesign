import { LandingHeader } from "@/components/landing/LandingHeader";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { DailyLoop } from "@/components/landing/DailyLoop";
import { ProgressPreview } from "@/components/landing/ProgressPreview";
import { TracksSection } from "@/components/landing/TracksSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col overflow-x-hidden">
      <LandingHeader />
      <main className="mx-auto w-full max-w-[430px] flex-1 px-5">
        <Hero />
        <ProblemSection />
        <DailyLoop />
        <ProgressPreview />
        <TracksSection />
        <SocialProof />
        <FinalCTA />
      </main>
      <footer className="border-t border-border-subtle py-6 text-center text-xs text-text-muted">
        <p>ABTalks — Build. Prove. Grow.</p>
      </footer>
    </div>
  );
}
