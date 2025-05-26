import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BarChart3, Zap, Database, Settings, Users, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Biznes Avtomatlaşdırma və Dashboard - Digital Base",
  description:
    "İş proseslərini optimallaşdıran dashboard və avtomatlaşdırma həlləri. Custom business automation solutions.",
  keywords: ["biznes avtomatlaşdırma", "dashboard", "business intelligence", "workflow automation", "azerbaijan"],
}

const features = [
  {
    icon: BarChart3,
    title: "Custom Dashboard",
    description: "Biznesinizə uyğun analitika panelləri",
  },
  {
    icon: Zap,
    title: "Workflow Avtomatlaşdırma",
    description: "İş proseslərinin avtomatlaşdırılması",
  },
  {
    icon: Database,
    title: "Data İnteqrasiyası",
    description: "Müxtəlif sistemlərin birləşdirilməsi",
  },
  {
    icon: Settings,
    title: "API İnteqrasiyaları",
    description: "Üçüncü tərəf sistemlərlə əlaqə",
  },
  {
    icon: Users,
    title: "İstifadəçi İdarəetməsi",
    description: "Rol əsaslı giriş və icazələr",
  },
  {
    icon: Shield,
    title: "Təhlükəsizlik",
    description: "Məlumatların qorunması və backup",
  },
]

const packages = [
  {
    name: "Sadə Dashboard",
    price: "1,500",
    description: "Kiçik komandalar üçün",
    features: ["5 widget", "Əsas analitika", "PDF export", "Email hesabatları", "3 ay dəstək"],
  },
  {
    name: "Biznes Avtomatlaşdırma",
    price: "3,500",
    description: "Orta ölçülü şirkətlər",
    features: [
      "15 widget",
      "Workflow avtomatlaşdırma",
      "API inteqrasiyaları",
      "Real-time data",
      "İstifadəçi idarəetməsi",
      "6 ay dəstək",
    ],
    popular: true,
  },
  {
    name: "Enterprise Həll",
    price: "7,500",
    description: "Böyük korporasiyalar",
    features: [
      "Limitsiz widget",
      "Xüsusi inteqrasiyalar",
      "AI/ML analitika",
      "Multi-tenant arxitektura",
      "24/7 monitoring",
      "12 ay dəstək",
    ],
  },
]

export default function AutomationDashboardsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Xidmətlər", href: "/services" }, { label: "Biznes Avtomatlaşdırma" }]} />

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/web-development.jpg"
              alt="Business Automation"
              fill
              className="object-cover opacity-10 rounded-lg"
            />
            <div className="absolute inset-0 bg-background/20 rounded-lg" />
          </div>
          <div className="relative z-10 bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold">Biznes Avtomatlaşdırma</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              İş proseslərini optimallaşdıran və effektivliyi artıran custom dashboard və avtomatlaşdırma həlləri.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary">Power BI</Badge>
              <Badge variant="secondary">Tableau</Badge>
              <Badge variant="secondary">Zapier</Badge>
              <Badge variant="secondary">Custom APIs</Badge>
              <Badge variant="secondary">AI/ML</Badge>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Avtomatlaşdırma Həllərimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Avtomatlaşdırma Paketləri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "border-primary shadow-xl scale-105" : "border-0 shadow-lg"}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Ən Populyar</Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">${pkg.price}</div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-1">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="sm" variant={pkg.popular ? "default" : "outline"}>
                    Paketi Seç
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-primary/5 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Biznesinizi Avtomatlaşdıraq</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            İş proseslərini optimallaşdırmaq və effektivliyi artırmaq üçün bizimlə əlaqə saxlayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Pulsuz Məsləhət</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Avtomatlaşdırma Nümunələri</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
