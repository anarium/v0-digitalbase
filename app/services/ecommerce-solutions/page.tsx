import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ShoppingCart, CreditCard, Truck, BarChart, Users, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "E-ticarət Həlləri - Digital Base",
  description:
    "Onlayn mağaza, rezervasiya və booking sistemləri ilə satışlarınızı artırın. Professional e-commerce həlləri.",
  keywords: ["e-ticarət", "onlayn mağaza", "e-commerce", "shopify", "woocommerce", "azerbaijan"],
}

const features = [
  {
    icon: ShoppingCart,
    title: "Onlayn Mağaza",
    description: "Tam funksional e-ticarət platforması",
  },
  {
    icon: CreditCard,
    title: "Ödəniş Sistemləri",
    description: "Çoxsaylı ödəniş üsulları inteqrasiyası",
  },
  {
    icon: Truck,
    title: "Çatdırılma İdarəetməsi",
    description: "Avtomatik çatdırılma hesablaması",
  },
  {
    icon: BarChart,
    title: "Satış Analitikası",
    description: "Detallı satış hesabatları və statistika",
  },
  {
    icon: Users,
    title: "Müştəri İdarəetməsi",
    description: "CRM və müştəri bazası idarəetməsi",
  },
  {
    icon: Shield,
    title: "Təhlükəsizlik",
    description: "SSL və PCI DSS uyğunluğu",
  },
]

const packages = [
  {
    name: "Başlanğıc Mağaza",
    price: "2,000",
    description: "Kiçik bizneslər üçün",
    features: ["50 məhsula qədər", "Əsas ödəniş sistemləri", "Mobil responsive", "SEO optimallaşdırma", "3 ay dəstək"],
  },
  {
    name: "Biznes Mağaza",
    price: "4,500",
    description: "Böyüyən bizneslər",
    features: [
      "500 məhsula qədər",
      "Çoxsaylı ödəniş üsulları",
      "İnventory idarəetməsi",
      "Müştəri hesabları",
      "Email marketinq",
      "6 ay dəstək",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "8,500",
    description: "Böyük şirkətlər",
    features: [
      "Limitsiz məhsul",
      "B2B funksiyalar",
      "Multi-vendor dəstək",
      "API inteqrasiyaları",
      "Xüsusi dizayn",
      "12 ay dəstək",
    ],
  },
]

export default function EcommerceSolutionsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Xidmətlər", href: "/services" }, { label: "E-ticarət Həlləri" }]} />

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="E-commerce Solutions"
              fill
              className="object-cover opacity-10 rounded-lg"
            />
            <div className="absolute inset-0 bg-background/20 rounded-lg" />
          </div>
          <div className="relative z-10 bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold">E-ticarət Həlləri</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Onlayn satışlarınızı artırmaq üçün müasir e-ticarət platformaları və rezervasiya sistemləri.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary">Shopify</Badge>
              <Badge variant="secondary">WooCommerce</Badge>
              <Badge variant="secondary">Magento</Badge>
              <Badge variant="secondary">Stripe</Badge>
              <Badge variant="secondary">PayPal</Badge>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">E-ticarət Xüsusiyyətləri</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">E-ticarət Paketləri</h2>
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
          <h2 className="text-3xl font-bold mb-4">E-ticarət Layihənizi Başlayaq</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Onlayn satışlarınızı artırmaq üçün bizimlə əlaqə saxlayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Pulsuz Məsləhət</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">E-ticarət Nümunələri</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
