"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, ShoppingCart, Palette, TrendingUp, BarChart3, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useLanguage } from "@/hooks/use-language"

const services = [
  {
    icon: Monitor,
    title: "webDev",
    description: "webDevDesc",
    features: ["Responsive Dizayn", "SEO Optimallaşdırma", "CMS İnteqrasiyası", "AI Xüsusiyyətləri"],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
    href: "/services/web-development",
  },
  {
    icon: ShoppingCart,
    title: "ecommerce",
    description: "ecommerceDesc",
    features: ["Ödəniş İnteqrasiyası", "İnventory İdarəetməsi", "Müştəri Paneli", "Analytics"],
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
    href: "/services/ecommerce-solutions",
  },
  {
    icon: Smartphone,
    title: "mobile",
    description: "mobileDesc",
    features: ["Cross-platform", "Native Performance", "Push Notifications", "Offline Support"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    href: "/services/mobile-development",
  },
  {
    icon: Palette,
    title: "design",
    description: "designDesc",
    features: ["User Research", "Wireframing", "Prototyping", "Design System"],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
    href: "/services/ui-ux-design",
  },
  {
    icon: TrendingUp,
    title: "marketing",
    description: "marketingDesc",
    features: ["SEO Optimallaşdırma", "Social Media", "Content Strategy", "PPC Campaigns"],
    technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush"],
    href: "/services/digital-marketing",
  },
  {
    icon: BarChart3,
    title: "automation",
    description: "automationDesc",
    features: ["Custom Dashboards", "API İnteqrasiyası", "Workflow Automation", "Reporting"],
    technologies: ["Power BI", "Tableau", "Zapier", "Custom APIs"],
    href: "/services/automation-dashboards",
  },
]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="py-20">
      <div className="container">
        <Breadcrumb items={[{ label: t.nav.services }]} />

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold">{t.services.title}</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <CardHeader className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl">{t.services[service.title as keyof typeof t.services]}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-xl mb-6">
                    {t.services[service.description as keyof typeof t.services]}
                  </CardDescription>
                  <Button asChild size="lg" className="text-lg">
                    <Link href={service.href}>{t.common.learnMore}</Link>
                  </Button>
                </CardHeader>

                <CardContent className="p-8 lg:p-12 bg-muted/30">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Əsas Xüsusiyyətlər</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Texnologiyalar</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 p-12 bg-primary/5 rounded-2xl">
          <h2 className="text-4xl font-bold mb-4">Layihənizi Başlayaq</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hansı xidmətə ehtiyacınız olduğunu bilmirsinizsə, bizimlə əlaqə saxlayın və pulsuz məsləhət alın
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Pulsuz Məsləhət</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
