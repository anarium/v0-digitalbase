"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, ShoppingCart, Palette, TrendingUp, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

const services = [
  {
    icon: Monitor,
    title: "webDev",
    description: "webDevDesc",
    features: ["SEO Optimallaşdırma", "Korporativ Saytlar", "Ranking Artırma", "Biznes Gəliri Artırma"],
    href: "/services/web-development",
  },
  {
    icon: ShoppingCart,
    title: "ecommerce",
    description: "ecommerceDesc",
    features: ["Satış Artırma", "Fərdi Yanaşma", "Ödəniş Sistemləri", "Müştəri Analitikası"],
    href: "/services/ecommerce-solutions",
  },
  {
    icon: Smartphone,
    title: "mobile",
    description: "mobileDesc",
    features: ["iOS & Android", "Restoran Menyu Saytları", "Cross-platform", "Native Performance"],
    href: "/services/mobile-development",
  },
  {
    icon: Palette,
    title: "design",
    description: "designDesc",
    features: ["User Research", "Wireframing", "Prototyping", "Design System"],
    href: "/services/ui-ux-design",
  },
  {
    icon: TrendingUp,
    title: "marketing",
    description: "marketingDesc",
    features: ["SEO & Ranking", "Social Media", "Content Strategy", "PPC Campaigns"],
    href: "/services/digital-marketing",
  },
  {
    icon: BarChart3,
    title: "automation",
    description: "automationDesc",
    features: ["ERP Sistemləri", "Maliyyə Sistemləri", "RPA", "Rəhbər Dashboard"],
    href: "/services/automation-dashboards",
  },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{t.services.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{t.services[service.title as keyof typeof t.services]}</CardTitle>
                <CardDescription className="text-base">
                  {t.services[service.description as keyof typeof t.services]}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                  <Link href={service.href}>
                    {t.common.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="text-lg px-8">
            <Link href="/services">{t.services.allServices}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
