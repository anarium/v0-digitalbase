import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Film, Palette, Zap, Camera, Edit, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Video İstehsal Xidmətləri - Digital Base",
  description:
    "Peşəkar video çəkilişləri, qlobal səviyyədə montaj, motion design və CGI xidmətləri. Professional video production.",
  keywords: ["video istehsal", "video çəkiliş", "montaj", "motion design", "CGI", "video production", "azerbaijan"],
}

const features = [
  {
    icon: Camera,
    title: "Peşəkar Video Çəkilişləri",
    description: "4K keyfiyyətdə peşəkar video çəkiliş xidmətləri",
  },
  {
    icon: Edit,
    title: "Qlobal Səviyyədə Montaj",
    description: "Beynəlxalq standartlarda video montaj və post-production",
  },
  {
    icon: Sparkles,
    title: "Motion Design",
    description: "Animasiya və motion graphics dizaynı",
  },
  {
    icon: Zap,
    title: "CGI",
    description: "Computer Generated Imagery və 3D animasiya",
  },
  {
    icon: Film,
    title: "Korporativ Videolar",
    description: "Şirkət təqdimatları və korporativ məzmun",
  },
  {
    icon: Palette,
    title: "Reklam Videoları",
    description: "Məhsul və xidmət tanıtım videoları",
  },
]

const packages = [
  {
    name: "Başlanğıc Paket",
    price: "1,200",
    description: "Kiçik layihələr üçün",
    features: ["1 günlük çəkiliş", "Əsas montaj", "HD keyfiyyət", "Musiqi əlavəsi", "2 reviziya"],
  },
  {
    name: "Professional Paket",
    price: "3,500",
    description: "Orta ölçülü layihələr",
    features: ["3 günlük çəkiliş", "4K keyfiyyət", "Motion graphics", "Color grading", "Səs dizaynı", "5 reviziya"],
    popular: true,
  },
  {
    name: "Premium Paket",
    price: "8,500",
    description: "Böyük korporativ layihələr",
    features: [
      "Limitsiz çəkiliş günü",
      "CGI və 3D animasiya",
      "Drone çəkilişləri",
      "Professional lighting",
      "Tam post-production",
      "Limitsiz reviziya",
    ],
  },
]

const videoTypes = [
  {
    title: "Korporativ Videolar",
    description: "Şirkət təqdimatları, işçi müsahibələri, korporativ tədbirlər",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Məhsul Tanıtımı",
    description: "Məhsul və xidmətlərin professional tanıtım videoları",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Sosial Media Məzmunu",
    description: "Instagram, TikTok, YouTube üçün optimallaşdırılmış videolar",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Animasiya və Motion",
    description: "2D/3D animasiya, motion graphics və vizual effektlər",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function VideoProductionPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Xidmətlər", href: "/services" }, { label: "Video İstehsal" }]} />

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/team-work.jpg"
              alt="Video Production"
              fill
              className="object-cover opacity-10 rounded-lg"
            />
            <div className="absolute inset-0 bg-background/20 rounded-lg" />
          </div>
          <div className="relative z-10 bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold">Video İstehsal Xidmətləri</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gəlirlərini artırmaq üçün biznesini güclü video məzmunla rəqəmsallaşdır. Peşəkar video çəkilişləri və
              qlobal səviyyədə montaj xidmətləri.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary">4K Video</Badge>
              <Badge variant="secondary">Motion Design</Badge>
              <Badge variant="secondary">CGI</Badge>
              <Badge variant="secondary">Drone Çəkiliş</Badge>
              <Badge variant="secondary">Color Grading</Badge>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Video İstehsal Xidmətlərimiz</h2>
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

        {/* Video Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Video Növləri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Video İstehsal Paketləri</h2>
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
          <h2 className="text-3xl font-bold mb-4">Video Layihənizi Başlayaq</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Biznesinizi güclü video məzmunla rəqəmsallaşdırmaq üçün bizimlə əlaqə saxlayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Pulsuz Məsləhət</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Video Nümunələri</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
