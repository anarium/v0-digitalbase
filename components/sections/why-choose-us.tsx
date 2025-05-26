import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Award, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Keyfiyyət Zəmanəti",
    description: "Hər layihədə yüksək keyfiyyət standartları və müasir texnologiyalar",
  },
  {
    icon: Clock,
    title: "Vaxtında Çatdırılma",
    description: "Müəyyən edilmiş vaxtlara riayət və şəffaf layihə idarəetməsi",
  },
  {
    icon: Users,
    title: "Təcrübəli Komanda",
    description: "5+ il təcrübəsi olan peşəkar developers və dizaynerlər",
  },
  {
    icon: Award,
    title: "Uğurlu Nəticələr",
    description: "150+ tamamlanmış layihə və məmnun müştərilər",
  },
  {
    icon: Zap,
    title: "Sürətli Həllər",
    description: "Ən son texnologiyalar ilə sürətli və effektiv həllər",
  },
  {
    icon: Shield,
    title: "24/7 Dəstək",
    description: "Layihə tamamlandıqdan sonra da davamlı texniki dəstək",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Niyə Digital Base?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Biznesinizin rəqəmsal uğuru üçün etibarlı tərəfdaş
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 bg-background">
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

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Tamamlanmış Layihə</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Məmnun Müştəri</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Müştəri Məmnuniyyəti</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Texniki Dəstək</div>
          </div>
        </div>
      </div>
    </section>
  )
}
