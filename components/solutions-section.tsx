import { Card } from "@/components/ui/card"
import { CheckCircle2, Flame, Factory, Trash2, Droplets, TreePine, Wind, Fish } from "lucide-react"

const solutions = [
  {
    icon: Flame,
    title: "Carbon Footprint Reduction",
    description:
      "Through tree planting initiatives, promoting public transport, encouraging renewable energy adoption, and organizing zero-waste challenges, we help users reduce their carbon emissions.",
    impact: "Each user saves avg. 2.5 tons CO₂/year",
    savings: "Community total: 50,000+ tons CO₂ prevented",
  },
  {
    icon: Factory,
    title: "Air Pollution Control",
    description:
      "Community tree planting programs, promoting electric vehicles, reducing industrial waste, and advocating for clean energy policies to improve air quality in urban areas.",
    impact: "15% air quality improvement in active zones",
    savings: "Planted 100,000+ trees filtering pollutants",
  },
  {
    icon: Trash2,
    title: "Plastic Waste Elimination",
    description:
      "Beach cleanups, plastic purge campaigns, promoting reusable alternatives, and partnering with recycling facilities to prevent plastic from entering oceans and landfills.",
    impact: "500 tons of plastic collected & recycled",
    savings: "Prevented 200 tons from reaching oceans",
  },
  {
    icon: Droplets,
    title: "Water Conservation & Protection",
    description:
      "Water-saving technique education, rainwater harvesting promotion, watershed cleanup drives, and reducing water pollution through proper waste disposal practices.",
    impact: "20M liters of water saved annually",
    savings: "Cleaned 50+ water bodies & watersheds",
  },
  {
    icon: TreePine,
    title: "Reforestation & Habitat Restoration",
    description:
      "Large-scale tree planting campaigns, native species restoration, creating urban green spaces, and protecting existing forests through community monitoring programs.",
    impact: "250,000 trees planted across 15 regions",
    savings: "Restored 500 hectares of habitat",
  },
  {
    icon: Wind,
    title: "Renewable Energy Transition",
    description:
      "Promoting solar panel installations, educating about renewable energy benefits, connecting users with green energy providers, and advocating for sustainable energy policies.",
    impact: "5,000+ homes switched to solar energy",
    savings: "15 MW clean energy capacity added",
  },
  {
    icon: Fish,
    title: "Biodiversity Protection",
    description:
      "Habitat cleanup and restoration, removing invasive species, creating wildlife corridors, supporting local conservation efforts, and educating communities about ecosystem protection.",
    impact: "Protected 30+ endangered species habitats",
    savings: "Restored ecosystems supporting 1000+ species",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Solutions</span> & Environmental Impact
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Proven strategies that create measurable environmental change and protect our planet for future generations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 bg-card">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2 text-primary">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">{solution.impact}</span>
                  </div>
                  <div className="flex items-start gap-2 text-green-600">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">{solution.savings}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Budget Allocation & Revenue Model</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">45%</div>
                <div className="text-sm text-muted-foreground">Platform Development & Operations</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Community Programs & Materials</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">25%</div>
                <div className="text-sm text-muted-foreground">Marketing & Growth</div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-center text-muted-foreground">
                <span className="font-semibold text-foreground">Revenue Sources:</span> Corporate sponsorships, premium
                memberships, carbon credit partnerships, and grant funding
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
