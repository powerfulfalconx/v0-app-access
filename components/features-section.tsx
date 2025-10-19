import { Card } from "@/components/ui/card"
import { Target, Users, TrendingUp, Award, Globe, Heart } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Mission-Driven Challenges",
    description:
      "Participate in carefully designed sustainability challenges that create real environmental impact in your community.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Connect with like-minded individuals, share progress, and inspire others to join the sustainability movement.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Impact",
    description:
      "Visualize your environmental contributions with detailed analytics and see how your actions make a difference.",
  },
  {
    icon: Award,
    title: "Earn Recognition",
    description:
      "Gain badges, achievements, and recognition for your sustainability efforts and milestone completions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Join a worldwide movement of environmental champions making positive changes across the planet.",
  },
  {
    icon: Heart,
    title: "Easy to Start",
    description:
      "Simple onboarding and intuitive interface make it easy for anyone to begin their sustainability journey.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Powerful Features for <span className="text-primary">Lasting Change</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            GreenSpark provides everything you need to make a meaningful environmental impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
