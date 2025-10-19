"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Environmental Educator",
    avatar: "SJ",
    rating: 5,
    text: "GreenSpark has transformed how our school engages with sustainability. The challenges are well-designed and the impact tracking keeps students motivated!",
  },
  {
    name: "Michael Chen",
    role: "Community Organizer",
    avatar: "MC",
    rating: 5,
    text: "Finally, a platform that makes environmental action accessible and fun. We've organized 12 community cleanups through GreenSpark with amazing turnout.",
  },
  {
    name: "Emily Rodriguez",
    role: "Sustainability Advocate",
    avatar: "ER",
    rating: 5,
    text: "The real-time impact metrics are incredible. Seeing exactly how much CO₂ we've saved and waste we've diverted keeps our team inspired every day.",
  },
  {
    name: "David Thompson",
    role: "Corporate CSR Manager",
    avatar: "DT",
    rating: 5,
    text: "GreenSpark helped us engage our entire workforce in sustainability initiatives. The platform is intuitive and the results speak for themselves.",
  },
  {
    name: "Priya Patel",
    role: "College Student",
    avatar: "PP",
    rating: 5,
    text: "I love how easy it is to get started! The guided challenges helped me go from wanting to help to actually making a difference in my community.",
  },
  {
    name: "James Wilson",
    role: "Local Business Owner",
    avatar: "JW",
    rating: 5,
    text: "Partnering with GreenSpark has been fantastic for our brand and the environment. The community engagement is authentic and impactful.",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            What Our <span className="text-primary">Community Says</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Real feedback from people making a real difference with GreenSpark
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">{review.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="text-lg font-semibold text-foreground">4.9/5</span>
            <span>average rating from 2,847 reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
