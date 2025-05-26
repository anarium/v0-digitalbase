"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Filter } from "lucide-react"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useLanguage } from "@/hooks/use-language"

const projects = [
  {
    id: 1,
    title: "TechCorp E-ticarət Platforması",
    description: "AI tövsiyələri və çoxdilli dəstək ilə müasir e-ticarət həlli",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "AI/ML", "PostgreSQL", "Stripe"],
    category: "E-ticarət",
    client: "TechCorp LLC",
    url: "#",
    featured: true,
  },
  {
    id: 2,
    title: "RestaurantBook Rezervasiya Sistemi",
    description: "Restoran və otel rezervasiya platforması real-vaxt idarəetmə ilə",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Booking",
    client: "Restaurant Chain",
    url: "#",
    featured: true,
  },
  {
    id: 3,
    title: "FinanceApp Mobil Tətbiqi",
    description: "iOS və Android üçün şəxsi maliyyə idarəetmə tətbiqi",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Firebase", "Plaid API", "Chart.js"],
    category: "Mobil",
    client: "FinTech Startup",
    url: "#",
    featured: false,
  },
  {
    id: 4,
    title: "EduPlatform LMS Sistemi",
    description: "Onlayn təhsil platforması video dərslər və test sistemi ilə",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Prisma", "AWS S3", "Stripe"],
    category: "Təhsil",
    client: "Education Institute",
    url: "#",
    featured: true,
  },
  {
    id: 5,
    title: "HealthCare Dashboard",
    description: "Tibb müəssisəsi üçün xəstə idarəetmə və analitika paneli",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
    category: "Healthcare",
    client: "Medical Center",
    url: "#",
    featured: false,
  },
  {
    id: 6,
    title: "LogisticsPro Tracking System",
    description: "Logistika şirkəti üçün real-vaxt yük izləmə sistemi",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Angular", "Express.js", "PostgreSQL", "Google Maps"],
    category: "Logistika",
    client: "Logistics Company",
    url: "#",
    featured: false,
  },
]

const categories = ["Hamısı", "E-ticarət", "Booking", "Mobil", "Təhsil", "Healthcare", "Logistika"]

export default function PortfolioPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("Hamısı")
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "Hamısı" || project.category === selectedCategory
    const featuredMatch = !showFeaturedOnly || project.featured
    return categoryMatch && featuredMatch
  })

  return (
    <div className="py-20">
      <div className="container">
        <Breadcrumb items={[{ label: t.nav.portfolio }]} />

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold">{t.portfolio.title}</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">{t.portfolio.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-base"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <Button
              variant={showFeaturedOnly ? "default" : "outline"}
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              size="sm"
            >
              Seçilmiş İşlər
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Layihəni Gör
                  </Button>
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 left-4" variant="default">
                    Seçilmiş
                  </Badge>
                )}
                <Badge className="absolute top-4 right-4" variant="secondary">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-base line-clamp-2">{project.description}</p>
                  <p className="text-sm text-muted-foreground">Müştəri: {project.client}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Seçilmiş kateqoriyada layihə tapılmadı.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20 p-12 bg-primary/5 rounded-2xl">
          <h2 className="text-4xl font-bold mb-4">Sizin Layihəniz Növbətidir</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bizim portfolio-muza əlavə olunacaq növbəti uğurlu layihə sizinki ola bilər
          </p>
          <Button size="lg" className="text-lg px-8">
            Layihənizi Başlayın
          </Button>
        </div>
      </div>
    </div>
  )
}
