import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Smartphone, Tablet, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Mobil Tətbiq Hazırlanması - Digital Base",
  description:
    "iOS və Android üçün yüksək keyfiyyətli mobil tətbiqlər. React Native və Flutter ilə cross-platform həllər.",
  keywords: ["mobil tətbiq", "ios app", "android app", "react native", "flutter", "mobile development", "azerbaijan"],
}

const features = [
  {
    icon: Smartphone,
    title: "Native Performance",
    description: "Yüksək performans və sürətli işləmə təminatı",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "iOS və Android üçün vahid kod bazası",
  },
  {
    icon: Zap,
    title: "Real-time Features",
    description: "Push notifications və real-vaxt yeniləmələr",
  },
  {
    icon: Shield,
    title: "Təhlükəsizlik",
    description: "Məlumatların qorunması və şifrələnməsi",
  },
  {
    icon: Tablet,
    title: "Responsive Design",
    description: "Bütün ekran ölçüləri üçün optimallaşdırma",
  },
]

const packages = [
  {
    name: "Sadə Tətbiq",
    price: "2,500",
    description: "Əsas funksiyalar",
    features: ["5-8 ekran", "Əsas UI/UX", "API inteqrasiyası", "App Store yayım", "3 ay dəstək"],
  },
  {
    name: "Biznes Tətbiqi",
    price: "5,500",
    description: "Genişləndirilmiş funksiyalar",
    features: [
      "15-20 ekran",
      "İstifadəçi qeydiyyatı",
      "Push notifications",
      "Offline dəstək",
      "Analytics",
      "6 ay dəstək",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "12,000",
    description: "Tam funksional həll",
    features: ["Limitsiz ekran", "Admin panel", "Çoxdilli dəstək", "Ödəniş sistemi", "Real-time chat", "12 ay dəstək"],
  },
]

export default function MobileDevelopmentPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Xidmətlər", href: "/services" }, { label: "Mobil Tətbiqlər" }]} />

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/team-work.jpg"
              alt="Mobile Development"
              fill
              className="object-cover opacity-10 rounded-lg"
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold">Mobil Tətbiq Hazırlanması</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              iOS və Android üçün yüksək keyfiyyətli, istifadəçi dostu mobil tətbiqlər hazırlayırıq.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary">React Native</Badge>
              <Badge variant="secondary">Flutter</Badge>
              <Badge variant="secondary">Swift</Badge>
              <Badge variant="secondary">Kotlin</Badge>
              <Badge variant="secondary">Firebase</Badge>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Mobil Həllərimiz</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Mobil Tətbiq Paketləri</h2>
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
          <h2 className="text-3xl font-bold mb-4">Mobil Tətbiqinizi Hazırlayaq</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            İdeyalarınızı həyata keçirən mobil tətbiq üçün bizimlə əlaqə saxlayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Pulsuz Məsləhət</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Mobil Layihələr</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
