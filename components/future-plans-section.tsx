"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Globe2, Smartphone, Brain, Building2, Leaf, Users2 } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

const plans = [
  {
    icon: Globe2,
    title: "Global Expansion to 50+ Countries",
    timeline: "Q2 2025",
    description:
      "Launch GreenSpark in 50 countries with localized challenges, multilingual support, region-specific environmental initiatives, and partnerships with local NGOs and governments to create worldwide impact.",
    status: "In Progress",
    details: "Starting with Europe, Asia-Pacific, and Latin America regions",
  },
  {
    icon: Smartphone,
    title: "Native Mobile Apps with Offline Mode",
    timeline: "Q3 2025",
    description:
      "Release iOS and Android apps featuring offline challenge tracking, GPS-based location verification, augmented reality for tree planting visualization, push notifications, and enhanced social sharing capabilities.",
    status: "Planned",
    details: "Beta testing begins Q2 2025 with 10,000 users",
  },
  {
    icon: Brain,
    title: "AI-Powered Personalization Engine",
    timeline: "Q4 2025",
    description:
      "Implement machine learning algorithms to provide personalized challenge recommendations based on user location, interests, past participation, local environmental needs, and optimal impact opportunities.",
    status: "Planned",
    details: "Partnering with leading AI research institutions",
  },
  {
    icon: Building2,
    title: "Corporate Sustainability Platform",
    timeline: "Q1 2026",
    description:
      "Launch dedicated enterprise solution enabling companies to manage employee sustainability programs, track corporate environmental impact, generate ESG reports, and integrate with existing HR systems.",
    status: "Research",
    details: "Pilot program with 20 Fortune 500 companies",
  },
  {
    icon: Leaf,
    title: "Carbon Credit Marketplace Integration",
    timeline: "Q2 2026",
    description:
      "Create a verified carbon credit marketplace where users can earn tradeable credits for their environmental actions, enabling monetization of positive impact and funding for larger sustainability projects.",
    status: "Research",
    details: "Blockchain-based verification system for transparency",
  },
  {
    icon: Users2,
    title: "Educational Partnership Program",
    timeline: "Q3 2026",
    description:
      "Partner with 1,000+ schools and universities worldwide to integrate GreenSpark into environmental education curricula, create student competitions, and develop youth leadership programs in sustainability.",
    status: "Planning",
    details: "Targeting 500,000 students in first year",
  },
  {
    icon: Rocket,
    title: "Smart City Integration & IoT Sensors",
    timeline: "Q4 2026",
    description:
      "Integrate with smart city infrastructure and deploy IoT sensors to provide real-time environmental data, verify challenge completion automatically, and enable data-driven urban sustainability initiatives.",
    status: "Planning",
    details: "Pilot cities: Singapore, Copenhagen, San Francisco",
  },
]

export function FuturePlansSection() {
  return (
    <section id="future" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              The <span className="text-primary">Future</span> of GreenSpark
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Our comprehensive roadmap for scaling impact and empowering millions to create lasting environmental
              change
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
              <Card className="p-8 hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 bg-card h-full">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
                      <plan.icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge variant={plan.status === "In Progress" ? "default" : "secondary"}>{plan.status}</Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-balance">{plan.title}</h3>
                    <div className="text-sm text-muted-foreground font-medium">{plan.timeline}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{plan.description}</p>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground italic">{plan.details}</p>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-center">Long-Term Vision: 2030 Goals</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">10M+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">1M</div>
                  <div className="text-sm text-muted-foreground">Tons CO₂ Prevented</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">500K</div>
                  <div className="text-sm text-muted-foreground">Tons Waste Diverted</div>
                </div>
              </div>
              <p className="text-center text-muted-foreground leading-relaxed">
                By 2030, GreenSpark will be the world's leading platform for community-driven environmental action,
                creating measurable impact through technology, education, and collective participation.
              </p>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
