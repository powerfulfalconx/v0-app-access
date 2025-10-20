import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, Factory, Trash2, Droplets, TreePine, Wind, Fish } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

const environmentalProblems = [
  {
    icon: Flame,
    title: "Carbon Footprint Reduction",
    color: "text-red-600",
    problem: "Global CO₂ emissions",
    impact: "45 billion tons/year",
  },
  {
    icon: Factory,
    title: "Air Pollution Control",
    color: "text-gray-600",
    problem: "Toxic air quality",
    impact: "7M deaths annually",
  },
  {
    icon: Trash2,
    title: "Plastic Waste Crisis",
    color: "text-blue-600",
    problem: "Ocean plastic pollution",
    impact: "8M tons enter oceans/year",
  },
  {
    icon: Droplets,
    title: "Water Scarcity & Pollution",
    color: "text-cyan-600",
    problem: "Clean water shortage",
    impact: "2B people affected",
  },
  {
    icon: TreePine,
    title: "Deforestation & Habitat Loss",
    color: "text-green-600",
    problem: "Forest destruction",
    impact: "10M hectares lost/year",
  },
  {
    icon: Wind,
    title: "Non-Renewable Energy Dependence",
    color: "text-amber-600",
    problem: "Fossil fuel reliance",
    impact: "80% of global energy",
  },
  {
    icon: Fish,
    title: "Biodiversity Collapse",
    color: "text-teal-600",
    problem: "Species extinction",
    impact: "1M species at risk",
  },
]

export function ChallengesSection() {
  return (
    <section id="challenges" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              7 Critical <span className="text-primary">Environmental Problems</span> We Address
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Understanding the urgent challenges facing our planet and taking collective action to solve them
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {environmentalProblems.map((problem, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 80}>
              <Card className="p-6 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:border-primary/30 cursor-pointer group bg-card">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-primary/10">
                    <problem.icon
                      className={`w-8 h-8 ${problem.color} transition-transform duration-300 group-hover:rotate-12`}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-balance leading-tight transition-colors duration-300 group-hover:text-primary">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{problem.problem}</p>
                  </div>
                  <Badge
                    variant="destructive"
                    className="text-xs font-medium transition-all duration-300 group-hover:scale-110"
                  >
                    {problem.impact}
                  </Badge>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These interconnected environmental crises require immediate action. GreenSpark empowers individuals and
              communities to contribute meaningful solutions through targeted challenges and collective impact.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
