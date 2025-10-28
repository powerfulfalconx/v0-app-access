"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Droplets,
  Trees,
  Mountain,
  Wind,
  Waves,
  Flame,
  Thermometer,
  CloudRain,
  Trash2,
  Bug,
  Award,
  FileText,
  Users,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

const challenges = [
  {
    id: 1,
    title: "Water Scarcity",
    icon: Droplets,
    description: "Addressing global freshwater shortage and sustainable water management solutions",
    severity: "Critical",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Deforestation & Habitat Loss",
    icon: Trees,
    description: "Combating forest destruction and protecting biodiversity hotspots worldwide",
    severity: "Critical",
    color: "from-green-600 to-emerald-600",
  },
  {
    id: 3,
    title: "Soil Erosion & Land Degradation",
    icon: Mountain,
    description: "Preventing soil loss and restoring degraded agricultural lands",
    severity: "High",
    color: "from-amber-600 to-orange-600",
  },
  {
    id: 4,
    title: "Air Pollution & Urban Smog",
    icon: Wind,
    description: "Reducing harmful emissions and improving air quality in cities",
    severity: "Critical",
    color: "from-gray-500 to-slate-600",
  },
  {
    id: 5,
    title: "Ocean Plastic & Marine Waste",
    icon: Waves,
    description: "Eliminating plastic pollution and protecting marine ecosystems",
    severity: "Critical",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 6,
    title: "Forest Fires & Biodiversity Loss",
    icon: Flame,
    description: "Preventing wildfires and protecting endangered species",
    severity: "High",
    color: "from-red-600 to-orange-600",
  },
  {
    id: 7,
    title: "Global Warming & Melting Ice Caps",
    icon: Thermometer,
    description: "Mitigating climate change and preserving polar regions",
    severity: "Critical",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 8,
    title: "Extreme Weather Events",
    icon: CloudRain,
    description: "Building resilience against hurricanes, floods, and droughts",
    severity: "High",
    color: "from-purple-600 to-violet-600",
  },
  {
    id: 9,
    title: "Waste Mismanagement & Overconsumption",
    icon: Trash2,
    description: "Promoting circular economy and reducing waste generation",
    severity: "High",
    color: "from-yellow-600 to-amber-600",
  },
  {
    id: 10,
    title: "Decline in Pollinators & Ecosystem Balance",
    icon: Bug,
    description: "Protecting bees, butterflies, and maintaining ecological harmony",
    severity: "High",
    color: "from-lime-600 to-green-600",
  },
]

interface Submission {
  challengeId: number
  solution: string
  pointsAwarded: number
  submittedAt: Date
}

export function GlobalGreenPulseSection() {
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [solutionText, setSolutionText] = useState("")
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleSubmitSolution = () => {
    if (!selectedChallenge || !solutionText.trim()) return

    const pointsAwarded = 50
    const newSubmission: Submission = {
      challengeId: selectedChallenge,
      solution: solutionText,
      pointsAwarded,
      submittedAt: new Date(),
    }

    setSubmissions([...submissions, newSubmission])
    setShowSuccessMessage(true)
    setSolutionText("")
    setIsDialogOpen(false)

    setTimeout(() => setShowSuccessMessage(false), 5000)
  }

  const getSubmissionCount = (challengeId: number) => {
    return submissions.filter((s) => s.challengeId === challengeId).length
  }

  const hasSubmitted = (challengeId: number) => {
    return submissions.some((s) => s.challengeId === challengeId)
  }

  return (
    <section
      id="global-pulse"
      className="py-20 sm:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>Innovation Feature</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Global Green Pulse
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              An innovative research & action platform that tracks the Top 10 most critical environmental challenges
              globally each month. Contribute solution-based reports, earn Green Points, and collaborate with experts to
              turn your ideas into real-world impact.
            </p>
          </div>
        </ScrollAnimation>

        {showSuccessMessage && (
          <ScrollAnimation animation="fade-up">
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-green-500">Solution Submitted Successfully!</h4>
                  <p className="text-sm text-muted-foreground">
                    You've earned <strong className="text-green-500">50 Green Points</strong>. Your solution is now
                    under review by our expert panel.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        )}

        <ScrollAnimation animation="fade-up" delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Real-Time Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our system analyzes global data from trusted environmental sources, NGOs, and sustainability research
                platforms to identify the most pressing challenges.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 backdrop-blur-sm space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <FileText className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Solution-Based Reports</h3>
              <p className="text-muted-foreground leading-relaxed">
                Select one challenge each month and write a mini report or proposal with built-in tools, templates, and
                creative guidance to support your ideas.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Recognition & Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Best submissions earn bonus Green Points, digital eco-certificates, and opportunities to collaborate
                with NGOs for real-world implementation.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.3}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Top 10 Environmental Challenges This Month</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => {
                const Icon = challenge.icon
                const isSelected = selectedChallenge === challenge.id
                const submissionCount = getSubmissionCount(challenge.id)
                const userSubmitted = hasSubmitted(challenge.id)

                return (
                  <ScrollAnimation key={challenge.id} animation="scale-in" delay={index * 0.05}>
                    <div
                      onClick={() => setSelectedChallenge(isSelected ? null : challenge.id)}
                      className={`group relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        isSelected
                          ? "border-primary bg-gradient-to-br from-primary/20 to-accent/20 shadow-2xl"
                          : "border-border bg-card hover:border-primary/50 hover:shadow-xl"
                      }`}
                    >
                      {userSubmitted && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <Badge className="bg-green-500 hover:bg-green-600 gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Submitted
                          </Badge>
                        </div>
                      )}

                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                              {challenge.title}
                            </h4>
                            <Badge
                              variant={challenge.severity === "Critical" ? "destructive" : "secondary"}
                              className="flex-shrink-0"
                            >
                              {challenge.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>

                          {isSelected && (
                            <div className="pt-4 space-y-3 border-t border-border/50 animate-fade-in-up">
                              <div className="flex items-center gap-2 text-sm">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-muted-foreground">
                                  <strong className="text-foreground">2,847</strong> users working on solutions
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <FileText className="w-4 h-4 text-accent" />
                                <span className="text-muted-foreground">
                                  <strong className="text-foreground">156</strong> proposals submitted this month
                                </span>
                              </div>
                              {submissionCount > 0 && (
                                <div className="flex items-center gap-2 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                                  <span className="text-muted-foreground">
                                    <strong className="text-green-500">{submissionCount}</strong> solution
                                    {submissionCount > 1 ? "s" : ""} submitted by you
                                  </span>
                                </div>
                              )}
                              <Button
                                className="w-full mt-2"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setIsDialogOpen(true)
                                }}
                              >
                                <FileText className="w-4 h-4 mr-2" />
                                {userSubmitted ? "Submit Another Solution" : "Submit Your Solution"}
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                )
              })}
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Submit Your Solution
              {selectedChallenge && (
                <span className="block text-base font-normal text-muted-foreground mt-2">
                  {challenges.find((c) => c.id === selectedChallenge)?.title}
                </span>
              )}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              Share your innovative solution or proposal to address this environmental challenge. Your submission will
              be reviewed by our expert panel and the community. Quality submissions earn 50 Green Points and may be
              featured for real-world implementation.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="solution" className="text-base font-semibold">
                Your Solution Proposal
              </Label>
              <Textarea
                id="solution"
                placeholder="Describe your solution in detail. Include the problem analysis, proposed approach, expected impact, and implementation steps..."
                className="min-h-[250px] text-base"
                value={solutionText}
                onChange={(e) => setSolutionText(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">Minimum 100 characters. Be specific and actionable.</p>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold">Rewards for Quality Submissions:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 50 Green Points upon submission</li>
                    <li>• Digital Eco-Certificate for top solutions</li>
                    <li>• Opportunity to collaborate with NGOs</li>
                    <li>• Featured in monthly impact reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmitSolution}
              disabled={!solutionText.trim() || solutionText.length < 100}
              className="gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Submit Solution
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
