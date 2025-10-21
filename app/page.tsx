import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ImpactHeatmapSection } from "@/components/impact-heatmap-section"
import { ChallengesSection } from "@/components/challenges-section"
import { ProblemsSection } from "@/components/problems-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FuturePlansSection } from "@/components/future-plans-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ImpactHeatmapSection />
      <ChallengesSection />
      <ProblemsSection />
      <SolutionsSection />
      <ReviewsSection />
      <FuturePlansSection />
      <SponsorsSection />
      <CTASection />
    </main>
  )
}
