import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Palette, Users, Eye, Smartphone, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "UI/UX Dizayn Xidmətləri - Digital Base",
  description:
    "İstifadəçi təcrübəsini artıran müasir və cəlbedici UI/UX dizayn həlləri. Professional dizayn xidmətləri Azərbaycanda.",
  keywords: ["UI/UX dizayn", "istifadəçi təcrübəsi", "interfeys dizaynı", "figma", "adobe xd", "azerbaijan"],
}

const features = [
  {
    icon: Users,
    title: "İstifadəçi Araşdırması",
    description: "Hədəf auditoriya analizi və istifadəçi ehtiyaclarının müəyyən edilməsi",
  },
  {
    icon: Eye,
    title: "Vizual Dizayn",
    description: "Müasir və cəlbedici interfeys dizaynı yaradılması",
  },
  {
    icon: Smartphone,
    title: "Responsive Dizayn",
    description: "Bütün cihazlar üçün optimallaşdırılmış dizayn həlləri",
  },
  {
    icon: Monitor,
    title: "Prototipləşdirmə",
    description: "İnteraktiv prototiplər və wireframe hazırlanması",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Logo, rəng palitri və brand identity yaradılması",
  },
]

const packages = [
  {
    name: "Başlanğıc",
    price: "800",
    description: "Kiçik layihələr üçün",
    features: ["5 səhifə dizayn", "Wireframe", "Mobil versiya", "2 reviziya", "Figma faylları"],
  },
  {
    name: "Professional",
    price: "1,800",
    description: "Orta ölçülü layihələr",
    features: [
      "15 səhifə dizayn",
      "İstifadəçi araşdırması",
      "İnteraktiv prototip",
      "Design system",
      "5 reviziya",
      "Developer handoff",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "3,500",
    description: "Böyük korporativ layihələr",
    features: [
      "Limitsiz səhifə",
      "Detallı UX research",
      "A/B test dizaynı",
      "Branding paketi",
      "Limitsiz reviziya",
      "Təlim və dəstək",
    ],
  },
]

export default function UIUXDesignPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Xidmətlər", href: "/services" }, { label: "UI/UX Dizayn" }]} />

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/web-development.jpg"
              alt="UI/UX Design"
              fill
              className="object-cover opacity-10 rounded-lg"
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">UI/UX Dizayn Xidmətləri</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              İstifadəçi təcrübəsini artıran, müasir və funksional dizayn həlləri ilə brendinizi gücləndirik.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary">Figma</Badge>
              <Badge variant="secondary">Adobe XD</Badge>
              <Badge variant="secondary">Sketch</Badge>
              <Badge variant="secondary">Principle</Badge>
              <Badge variant="secondary">InVision</Badge>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Dizayn Xidmətlərimiz</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Dizayn Paketləri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "border-primary shadow-xl scale-105" : "border-0 shadow-lg"}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Ən Populyar</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">${pkg.price}</div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    Paketi Seç
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-primary/5 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Dizayn Layihənizi Başlayaq</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            İstifadəçilərinizi heyran edəcək dizayn üçün bizimlə əlaqə saxlayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Pulsuz Məsləhət</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Dizayn Nümunələri</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
