import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Smartphone, Search, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Veb Sayt Hazırlanması - Digital Base",
  description:
    "Müasir və funksional veb saytlar, SaaS platformalar və AI inteqrasiyası ilə biznes həlləri. Professional veb development xidmətləri.",
  keywords: ["veb sayt hazırlanması", "web development", "sayt yaratmaq", "next.js", "react", "azerbaijan"],
}

const features = [
  {
    icon: Code,
    title: "Müasir Texnologiyalar",
    description: "Next.js, React, TypeScript kimi ən son texnologiyalarla hazırlanır",
  },
  {
    icon: Smartphone,
    title: "Responsive Dizayn",
    description: "Bütün cihazlarda mükəmməl görünüm və funksionallıq",
  },
  {
    icon: Search,
    title: "SEO Optimallaşdırma",
    description: "Axtarış motorlarında yüksək reytinq üçün optimallaşdırılmış struktur",
  },
  {
    icon: Shield,
    title: "Təhlükəsizlik",
    description: "SSL sertifikatı və müasir təhlükəsizlik standartları",
  },
  {
    icon: Zap,
    title: "Yüksək Performans",
    description: "Sürətli yüklənmə və optimal performans göstəriciləri",
  },
]

const packages = [
  {
    name: "Başlanğıc",
    price: "1,500",
    description: "Kiçik biznes və şəxsi saytlar üçün",
    features: ["5 səhifəyə qədər", "Responsive dizayn", "Əsas SEO", "Əlaqə formu", "3 ay dəstək"],
  },
  {
    name: "Biznes",
    price: "3,500",
    description: "Orta ölçülü şirkətlər üçün",
    features: [
      "15 səhifəyə qədər",
      "CMS sistemi",
      "Blog bölməsi",
      "Analitika inteqrasiyası",
      "6 ay dəstək",
      "Sosial media inteqrasiyası",
    ],
    popular: true,
  },
  {
    name: "Korporativ",
    price: "7,500",
    description: "Böyük şirkətlər və mürəkkəb layihələr",
    features: [
      "Limitsiz səhifə",
      "Xüsusi funksionallıq",
      "API inteqrasiyaları",
      "Çoxdilli dəstək",
      "12 ay dəstək",
      "Təlim və sənədləşdirmə",
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Analiz və Planlaşdırma",
    description: "Tələblərinizi öyrənir, rəqibləri analiz edir və layihə planı hazırlayırıq",
  },
  {
    step: "02",
    title: "Dizayn və Prototip",
    description: "UI/UX dizayn hazırlayır və interaktiv prototip yaradırıq",
  },
  {
    step: "03",
    title: "Development",
    description: "Müasir texnologiyalarla kodlaşdırma və funksionallıq əlavə edirik",
  },
  {
    step: "04",
    title: "Test və Optimallaşdırma",
    description: "Hərtərəfli test edir, performansı optimallaşdırırıq",
  },
  {
    step: "05",
    title: "Launch və Dəstək",
    description: "Saytı yayımlayır və davamlı texniki dəstək təmin edirik",
  },
]

export default function WebDevelopmentPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Xidmətlər", href: "/services" }, { label: "Veb Sayt Hazırlanması" }]} />

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/web-development.jpg"
              alt="Web Development"
              fill
              className="object-cover opacity-10 rounded-lg"
            />
            <div className="absolute inset-0 bg-background/20 rounded-lg" />
          </div>
          <div className="relative z-10 bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold">Veb Sayt Hazırlanması</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Müasir texnologiyalar və yaradıcı dizayn ilə biznesinizi rəqəmsal dünyada güclü şəkildə təmsil edən veb
              saytlar hazırlayırıq.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Node.js</Badge>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Niyə Bizim Veb Saytlarımız?</h2>
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

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">İş Prosesimiz</h2>
          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Qiymət Paketləri</h2>
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

        {/* Portfolio Examples */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio Nümunələri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden border-0 shadow-lg">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=Project+${item}`}
                  alt={`Layihə ${item}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Korporativ Veb Sayt</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Müasir dizayn və funksional həllər ilə hazırlanmış korporativ sayt
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      CMS
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-primary/5 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Veb Saytınızı Hazırlamağa Başlayaq</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pulsuz məsləhət alın və layihənizi müzakirə edək
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Pulsuz Məsləhət</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Portfolio-ya Bax</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
