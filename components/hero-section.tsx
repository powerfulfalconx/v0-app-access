import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Users, Target } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium shadow-lg">
            <div className="relative w-6 h-6">
              <Image src="/images/greenspark-logo.png" alt="GreenSpark" fill className="object-contain" />
            </div>
            <span>Transforming Communities Through Sustainability</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-balance leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              GreenSpark
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            An all-in-one sustainability platform empowering individuals and communities to take meaningful
            environmental action through engaging challenges and real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="text-base px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <a href="https://green-spark-190cd2eb.base44.app" target="_blank" rel="noopener noreferrer">
                Launch GreenSpark
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 border-2 border-primary/50 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <a href="#features">Learn More</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div
              className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm animate-count-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              <Target className="w-8 h-8 text-primary mx-auto" />
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                13+
              </div>
              <div className="text-sm font-medium text-muted-foreground">Active Challenges</div>
            </div>
            <div
              className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 backdrop-blur-sm animate-count-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <Users className="w-8 h-8 text-accent mx-auto" />
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-sm font-medium text-muted-foreground">Community Members</div>
            </div>
            <div
              className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm animate-count-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              <Leaf className="w-8 h-8 text-primary mx-auto" />
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-sm font-medium text-muted-foreground">Actions Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
