import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation animation="scale-in">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-primary/20">
              <Leaf className="w-10 h-10 text-primary" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Ready to Make a <span className="text-primary">Difference?</span>
            </h2>

            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Join thousands of environmental champions using GreenSpark to create lasting positive change in their
              communities. Start your sustainability journey today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                asChild
                className="text-base px-8 transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 group"
              >
                <a href="https://green-spark-190cd2eb.base44.app" target="_blank" rel="noopener noreferrer">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 bg-transparent transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-primary/10 active:scale-95"
              >
                <a href="mailto:hello@greenspark.app">Contact Us</a>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
