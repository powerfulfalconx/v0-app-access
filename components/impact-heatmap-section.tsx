"use client"

import { ScrollAnimation } from "./scroll-animation"
import {
  MapPin,
  CheckCircle2,
  AlertCircle,
  Shield,
  Users,
  Trash2,
  Calendar,
  Target,
  Leaf,
  Droplets,
  Recycle,
} from "lucide-react"
import { useState } from "react"

interface Location {
  id: string
  name: string
  area: string
  lat: number
  lng: number
  status: "cleaned" | "needs-cleaning" | "no-cleaning-needed"
  challenge: string
  participants: number
  wasteCollected?: string
  timeframe?: string
  completionDate?: string
}

const locations: Location[] = [
  {
    id: "1",
    name: "JBR Beach",
    area: "Dubai",
    lat: 25.0782,
    lng: 55.1328,
    status: "cleaned",
    challenge: "Beach Cleanup",
    participants: 156,
    wasteCollected: "340 kg",
    timeframe: "3 weeks",
    completionDate: "Jan 15, 2025",
  },
  {
    id: "2",
    name: "Al Barsha Beach Walk",
    area: "Dubai",
    lat: 25.0892,
    lng: 55.1456,
    status: "cleaned",
    challenge: "Coastal Cleanup",
    participants: 98,
    wasteCollected: "215 kg",
    timeframe: "2 weeks",
    completionDate: "Jan 28, 2025",
  },
  {
    id: "3",
    name: "Dubai Marina",
    area: "Dubai",
    lat: 25.0805,
    lng: 55.1396,
    status: "cleaned",
    challenge: "Plastic Purge",
    participants: 89,
    wasteCollected: "125 kg",
    timeframe: "2 weeks",
    completionDate: "Feb 10, 2025",
  },
  {
    id: "4",
    name: "Zabeel Park",
    area: "Dubai",
    lat: 25.2318,
    lng: 55.3089,
    status: "cleaned",
    challenge: "Park Cleanup",
    participants: 203,
    wasteCollected: "280 kg",
    timeframe: "4 weeks",
    completionDate: "Jan 20, 2025",
  },
  {
    id: "5",
    name: "Al Mamzar Beach",
    area: "Dubai",
    lat: 25.2948,
    lng: 55.3489,
    status: "needs-cleaning",
    challenge: "Beach Cleanup",
    participants: 45,
    timeframe: "Estimated 3 weeks",
  },
  {
    id: "6",
    name: "Corniche Beach",
    area: "Abu Dhabi",
    lat: 24.4764,
    lng: 54.3705,
    status: "cleaned",
    challenge: "Beach Cleanup",
    participants: 178,
    wasteCollected: "410 kg",
    timeframe: "5 weeks",
    completionDate: "Feb 5, 2025",
  },
  {
    id: "7",
    name: "Al Qudra Lakes",
    area: "Dubai",
    lat: 24.8897,
    lng: 55.2094,
    status: "needs-cleaning",
    challenge: "Water Conservation",
    participants: 67,
    timeframe: "Estimated 4 weeks",
  },
  {
    id: "8",
    name: "Sharjah Beach",
    area: "Sharjah",
    lat: 25.321,
    lng: 55.389,
    status: "needs-cleaning",
    challenge: "Beach Cleanup",
    participants: 52,
    timeframe: "Estimated 2 weeks",
  },
  {
    id: "9",
    name: "Dubai Creek Park",
    area: "Dubai",
    lat: 25.2467,
    lng: 55.3267,
    status: "cleaned",
    challenge: "Park Cleanup",
    participants: 145,
    wasteCollected: "195 kg",
    timeframe: "3 weeks",
    completionDate: "Jan 25, 2025",
  },
  {
    id: "10",
    name: "Mushrif Park",
    area: "Dubai",
    lat: 25.1567,
    lng: 55.4567,
    status: "no-cleaning-needed",
    challenge: "Tree Planting",
    participants: 234,
    timeframe: "Ongoing maintenance",
  },
  {
    id: "11",
    name: "Safa Park",
    area: "Dubai",
    lat: 25.1889,
    lng: 55.2456,
    status: "no-cleaning-needed",
    challenge: "Tree Planting",
    participants: 189,
    timeframe: "Ongoing maintenance",
  },
  {
    id: "12",
    name: "Yas Beach",
    area: "Abu Dhabi",
    lat: 24.4889,
    lng: 54.6089,
    status: "cleaned",
    challenge: "Beach Cleanup",
    participants: 167,
    wasteCollected: "298 kg",
    timeframe: "4 weeks",
    completionDate: "Feb 12, 2025",
  },
  {
    id: "13",
    name: "Ajman Beach",
    area: "Ajman",
    lat: 25.4052,
    lng: 55.4456,
    status: "needs-cleaning",
    challenge: "Beach Cleanup",
    participants: 38,
    timeframe: "Estimated 2 weeks",
  },
]

export function ImpactHeatmapSection() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const filteredLocations = filterStatus === "all" ? locations : locations.filter((loc) => loc.status === filterStatus)

  const stats = {
    cleaned: locations.filter((l) => l.status === "cleaned").length,
    needsCleaning: locations.filter((l) => l.status === "needs-cleaning").length,
    noCleaningNeeded: locations.filter((l) => l.status === "no-cleaning-needed").length,
    totalParticipants: locations.reduce((sum, l) => sum + l.participants, 0),
    totalWaste: locations
      .filter((l) => l.wasteCollected)
      .reduce((sum, l) => sum + Number.parseInt(l.wasteCollected!), 0),
  }

  const additionalStats = {
    carbonOffset: Math.round(stats.totalWaste * 2.5), // kg CO2 offset
    treesEquivalent: Math.round(stats.totalWaste / 20), // trees planted equivalent
    plasticBottles: Math.round(stats.totalWaste * 50), // plastic bottles removed
    waterSaved: Math.round(stats.totalParticipants * 150), // liters of water saved
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "cleaned":
        return "bg-emerald-500"
      case "needs-cleaning":
        return "bg-amber-500"
      case "no-cleaning-needed":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "cleaned":
        return <CheckCircle2 className="w-5 h-5" />
      case "needs-cleaning":
        return <AlertCircle className="w-5 h-5" />
      case "no-cleaning-needed":
        return <Shield className="w-5 h-5" />
      default:
        return <MapPin className="w-5 h-5" />
    }
  }

  return (
    <section id="impact-map" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              UAE Impact Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time tracking of our environmental impact across the UAE. View detailed statistics and achievements
              from all cleanup locations.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">{stats.cleaned}</div>
              <div className="text-sm opacity-90">Areas Cleaned</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">{stats.needsCleaning}</div>
              <div className="text-sm opacity-90">In Progress</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">{stats.noCleaningNeeded}</div>
              <div className="text-sm opacity-90">Maintained</div>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trash2 className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">{stats.totalWaste}</div>
              <div className="text-sm opacity-90">kg Waste Removed</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">{stats.totalParticipants}</div>
              <div className="text-sm opacity-90">Volunteers</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">{additionalStats.carbonOffset}</div>
              <div className="text-sm opacity-90">kg CO₂ Offset</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Recycle className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">{additionalStats.plasticBottles.toLocaleString()}</div>
              <div className="text-sm opacity-90">Bottles Removed</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1">{additionalStats.waterSaved.toLocaleString()}</div>
              <div className="text-sm opacity-90">Liters Saved</div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filterStatus === "all"
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card border border-border hover:border-primary hover:scale-105"
              }`}
            >
              All Locations
            </button>
            <button
              onClick={() => setFilterStatus("cleaned")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filterStatus === "cleaned"
                  ? "bg-emerald-500 text-white shadow-lg scale-105"
                  : "bg-card border border-border hover:border-emerald-500 hover:scale-105"
              }`}
            >
              Cleaned
            </button>
            <button
              onClick={() => setFilterStatus("needs-cleaning")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filterStatus === "needs-cleaning"
                  ? "bg-amber-500 text-white shadow-lg scale-105"
                  : "bg-card border border-border hover:border-amber-500 hover:scale-105"
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setFilterStatus("no-cleaning-needed")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filterStatus === "no-cleaning-needed"
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-card border border-border hover:border-blue-500 hover:scale-105"
              }`}
            >
              Maintained
            </button>
          </div>
        </ScrollAnimation>

        {selectedLocation && (
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedLocation.name}</h3>
                    <p className="text-lg text-muted-foreground">{selectedLocation.area}</p>
                  </div>
                  <div className={`p-3 rounded-full ${getStatusColor(selectedLocation.status)} text-white`}>
                    {getStatusIcon(selectedLocation.status)}
                  </div>
                </div>

                <div className="h-px bg-border mb-6"></div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">Challenge Type</div>
                      <div className="font-semibold">{selectedLocation.challenge}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">Participants</div>
                      <div className="font-semibold">{selectedLocation.participants} volunteers</div>
                    </div>
                  </div>

                  {selectedLocation.wasteCollected && (
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-emerald-500/10 rounded-lg">
                        <Trash2 className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">Waste Collected</div>
                        <div className="font-semibold text-emerald-500">{selectedLocation.wasteCollected}</div>
                      </div>
                    </div>
                  )}

                  {selectedLocation.timeframe && (
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Calendar className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">Timeframe</div>
                        <div className="font-semibold">{selectedLocation.timeframe}</div>
                      </div>
                    </div>
                  )}

                  {selectedLocation.completionDate && (
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">Completion Date</div>
                        <div className="font-semibold">{selectedLocation.completionDate}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3 md:col-span-2">
                    <div className={`p-2 ${getStatusColor(selectedLocation.status)}/10 rounded-lg`}>
                      {getStatusIcon(selectedLocation.status)}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">Status</div>
                      <div className="font-semibold capitalize">{selectedLocation.status.replace(/-/g, " ")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        )}

        <ScrollAnimation animation="fade-up" delay={500}>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">All Locations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredLocations.map((location, index) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className="bg-card border border-border rounded-xl p-5 text-left transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{location.name}</h4>
                      <p className="text-sm text-muted-foreground">{location.area}</p>
                    </div>
                    <div className={`p-1.5 rounded-full ${getStatusColor(location.status)} text-white`}>
                      {getStatusIcon(location.status)}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{location.challenge}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{location.participants} volunteers</span>
                    </div>

                    {location.wasteCollected && (
                      <div className="flex items-center gap-2 text-sm">
                        <Trash2 className="w-4 h-4 text-emerald-500" />
                        <span className="font-semibold text-emerald-500">{location.wasteCollected}</span>
                      </div>
                    )}

                    {location.timeframe && (
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{location.timeframe}</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
