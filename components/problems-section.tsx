import { Card } from "@/components/ui/card"
import { AlertCircle, TrendingDown, Users2, DollarSign } from "lucide-react"

const problems = [
  {
    icon: Users2,
    title: "Low Community Engagement",
    description:
      "Many sustainability initiatives struggle to maintain consistent participation and long-term community involvement.",
    stat: "68%",
    statLabel: "drop-off rate in traditional programs",
  },
  {
    icon: TrendingDown,
    title: "Lack of Measurable Impact",
    description:
      "Individuals often feel disconnected from the results of their environmental actions, leading to decreased motivation.",
    stat: "73%",
    statLabel: "want to see tangible results",
  },
  {
    icon: DollarSign,
    title: "Funding Challenges",
    description:
      "Sustainability programs require consistent funding for operations, materials, and scaling to reach more communities.",
    stat: "$2.5M",
    statLabel: "annual operational needs",
  },
  {
    icon: AlertCircle,
    title: "Awareness Gap",
    description:
      "Many people want to help the environment but don't know where to start or what actions create the most impact.",
    stat: "82%",
    statLabel: "need guidance on effective actions",
  },
]

export function ProblemsSection() {
  return (
    <section id="problems" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Challenges We're <span className="text-primary">Addressing</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Understanding the obstacles helps us build better solutions for lasting environmental impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-semibold">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  <div className="pt-2">
                    <div className="text-2xl font-bold text-destructive">{problem.stat}</div>
                    <div className="text-sm text-muted-foreground">{problem.statLabel}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
