import { Card } from "@/components/ui/card"
import { AlertCircle, TrendingDown, Users2, DollarSign } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

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
        <ScrollAnimation animation="fade-up">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Challenges We're <span className="text-primary">Addressing</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Understanding the obstacles helps us build better solutions for lasting environmental impact
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 150}>
              <Card className="p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-destructive/30 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-destructive/20 group-hover:scale-110">
                    <problem.icon className="w-6 h-6 text-destructive transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-destructive">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                    <div className="pt-2">
                      <div className="text-2xl font-bold text-destructive transition-transform duration-300 group-hover:scale-110 inline-block">
                        {problem.stat}
                      </div>
                      <div className="text-sm text-muted-foreground">{problem.statLabel}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
