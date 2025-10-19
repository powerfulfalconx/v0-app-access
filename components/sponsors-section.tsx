import { Card } from "@/components/ui/card"

const sponsors = [
  { name: "EcoTech Solutions", tier: "Platinum Partner", contribution: "$500K annually" },
  { name: "Green Future Foundation", tier: "Gold Partner", contribution: "$250K annually" },
  { name: "Sustainable Brands Co.", tier: "Gold Partner", contribution: "$250K annually" },
  { name: "CleanEnergy Corp", tier: "Silver Partner", contribution: "$100K annually" },
  { name: "Ocean Conservation Alliance", tier: "Silver Partner", contribution: "$100K annually" },
  { name: "Urban Green Initiative", tier: "Silver Partner", contribution: "$100K annually" },
]

export function SponsorsSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Partners</span> & Sponsors
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Proud to work with organizations committed to environmental sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{sponsor.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{sponsor.name}</h3>
                  <div className="text-sm text-primary font-medium">{sponsor.tier}</div>
                </div>
                <div className="text-sm text-muted-foreground">{sponsor.contribution}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join leading organizations in supporting global sustainability initiatives. Partnership opportunities
              start at $50K annually and include brand visibility, impact reporting, and employee engagement programs.
            </p>
            <a
              href="mailto:partnerships@greenspark.app"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Partnership Team
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}
