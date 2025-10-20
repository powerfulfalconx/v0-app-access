"use client"
import { Leaf, Users, Lightbulb, TrendingUp, Flag } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

const alignmentPoints = [
  {
    icon: Users,
    title: "User-Friendliness",
    description:
      "Intuitive design makes sustainability accessible to every UAE resident, from students to professionals, ensuring widespread participation in environmental initiatives.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Leaf,
    title: "Relevance to Sustainability",
    description:
      "Directly supports UAE's Net Zero by 2050 strategy and Year of Sustainability initiatives through actionable challenges that create measurable environmental impact.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation in Features",
    description:
      "Leverages cutting-edge technology including AI-powered tracking, blockchain verification, and IoT integration to revolutionize environmental action in the region.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Scalability for Wider Adoption",
    description:
      "Built to scale from individual users to entire communities, schools, and corporations across the UAE and GCC region, with multi-language support and cultural adaptation.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Flag,
    title: "Alignment with UAE Priorities",
    description:
      "Perfectly aligned with UAE Vision 2030, Dubai Clean Energy Strategy 2050, and Abu Dhabi's Sustainable Development Goals, supporting national environmental targets.",
    color: "from-amber-500 to-orange-500",
  },
]

export function UAEAlignmentSection() {
  return (
    <section id="uae-alignment" className="py-24 bg-gradient-to-b from-background via-emerald-50/30 to-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Flag className="w-4 h-4" />
              UAE Vision 2030 & Net Zero 2050
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Empowering UAE's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Sustainable Future
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              GreenSpark is strategically designed to support the UAE's ambitious sustainability goals, making it the
              perfect platform for driving environmental change across the nation.
            </p>
          </div>
        </ScrollAnimation>

        {/* UAE Vision Banner */}
        <ScrollAnimation animation="scale-in" delay={200}>
          <div className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Supporting UAE's Environmental Leadership</h3>
              <p className="text-lg md:text-xl text-emerald-50 mb-6 max-w-3xl">
                The UAE has positioned itself as a global leader in sustainability, hosting COP28 and committing to
                ambitious climate goals. GreenSpark provides the digital infrastructure to turn these national visions
                into grassroots action.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl">
                  <div className="text-4xl font-bold mb-2">2030</div>
                  <div className="text-emerald-100">UAE Vision Target Year</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl">
                  <div className="text-4xl font-bold mb-2">2050</div>
                  <div className="text-emerald-100">Net Zero Commitment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl">
                  <div className="text-4xl font-bold mb-2">50%</div>
                  <div className="text-emerald-100">Clean Energy by 2050</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Alignment Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {alignmentPoints.map((point, index) => (
            <ScrollAnimation
              key={point.title}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 100}
            >
              <div className="group h-full">
                <div className="h-full p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-emerald-200 hover:shadow-2xl hover:-translate-y-2">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6`}
                  >
                    <point.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-emerald-600">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Regional Impact */}
        <ScrollAnimation animation="fade-up" delay={300}>
          <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <h3 className="text-3xl font-bold mb-6 text-center">Regional Leadership & Expansion</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-emerald-600">
                  UAE Launch
                </h4>
                <p className="text-muted-foreground">
                  Establish strong presence across all seven emirates with localized challenges
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-600">
                  GCC Expansion
                </h4>
                <p className="text-muted-foreground">
                  Scale to Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman with regional partnerships
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-purple-600">
                  MENA Leadership
                </h4>
                <p className="text-muted-foreground">
                  Become the leading sustainability platform across the Middle East and North Africa
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
