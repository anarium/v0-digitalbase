import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Search, Target, BarChart3, Video, Mail, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Rəqəmsal Marketinq - Digital Base",
  description:
    "SEO, content marketing, video istehsal və hədəfli reklam kampaniyaları. Professional digital marketing xidmətləri.",
  keywords: ["rəqəmsal marketinq", "SEO", "google ads", "facebook ads", "content marketing", "azerbaijan"],
}

const features = [
  {
    icon: Search,
    title: "SEO Optimallaşdırma",
    description: "Axtarış motorlarında üst sıralarda yer almaq",
  },
  {
    icon: Target,
    title: "PPC Reklamlar",
    description: "Google Ads və Facebook Ads kampaniyaları",
  },
  {
    icon: Mail,
    title: "Email Marketinq",
    description: "Avtomatik email kampaniyaları və newsletter",
  },
  {
    icon: Video,
    title: "Video Marketinq",
    description: "Promotional videolar və sosial media content",
  },
  {
    icon: BarChart3,
    title: "Analitika və Hesabat",
    description: "Detallı performans analizi və ROI hesabatları",
  },
  {
    icon: Globe,
    title: "Sosial Media",
    description: "SMM strategiyası və content idarəetməsi",
  },
]

const packages = [
  {
    name: "Başlanğıc",
    price: "800",
    description: "Kiçik bizneslər üçün",
    features: ["SEO audit", "Google My Business", "Sosial media setup", "Aylıq hesabat", "3 ay müqavilə"],
  },
  {
    name: "Professional",
    price: "1,800",
    description: "Böyüyən bizneslər",
    features: [
      "Tam SEO xidməti",
      "PPC kampaniyalar",
      "Content yaradılması",
      "Email marketinq",
      "Sosial media idarəetməsi",
      "6 ay müqavilə",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "3,500",
    description: "Böyük şirkətlər",
    features: [
      "Tam digital strategiya",
      "Video istehsal",
      "Influencer marketinq",
      "A/B testlər",
      "Xüsusi analitika",
      "12 ay müqavilə",
    ],
  },
]

export default function DigitalMarketingPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Xidmətlər", href: "/services" }, { label: "Rəqəmsal Marketinq" }]} />

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/team-work.jpg"
              alt="Digital Marketing"
              fill
              className="object-cover opacity-10 rounded-lg"
            />
            <div className="absolute inset-0 bg-background/20 rounded-lg" />
          </div>
          <div className="relative z-10 bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold">Rəqəmsal Marketinq</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Brendinizi gücləndirir və satışlarınızı artıran hərtərəfli rəqəmsal marketinq strategiyaları.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary">Google Ads</Badge>
              <Badge variant="secondary">Facebook Ads</Badge>
              <Badge variant="secondary">SEO</Badge>
              <Badge variant="secondary">Analytics</Badge>
              <Badge variant="secondary">Content Marketing</Badge>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Marketinq Xidmətlərimiz</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Marketinq Paketləri</h2>
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
                  <div className="text-2xl font-bold text-primary">${pkg.price}/ay</div>
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
          <h2 className="text-3xl font-bold mb-4">Marketinq Strategiyanızı Quraq</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Brendinizi gücləndirir və satışlarınızı artırmaq üçün bizimlə əlaqə saxlayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Pulsuz Məsləhət</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Marketinq Nümunələri</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
