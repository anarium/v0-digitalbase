import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, Heart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Haqqımızda - Digital Base",
  description:
    "Digital Base haqqında ətraflı məlumat. Komandamız, missiyamız və Azərbaycanda rəqəmsal sahədə fəaliyyətimiz.",
  keywords: ["digital base haqqında", "rəqəmsal agentlik", "azərbaycan", "komanda", "missiya"],
  openGraph: {
    title: "Haqqımızda - Digital Base",
    description:
      "Digital Base haqqında ətraflı məlumat. Komandamız, missiyamız və Azərbaycanda rəqəmsal sahədə fəaliyyətimiz.",
  },
}

const teamMembers = [
  {
    name: "Əli Məmmədov",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "10+ il texnologiya sahəsində təcrübə",
  },
  {
    name: "Leyla Həsənova",
    role: "Creative Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "UI/UX dizayn və branding mütəxəssisi",
  },
  {
    name: "Rəşad Quliyev",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack developer və arxitektura mütəxəssisi",
  },
  {
    name: "Nigar Əliyeva",
    role: "Marketing Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Rəqəmsal marketinq və strategiya eksperti",
  },
]

const values = [
  {
    icon: Target,
    title: "Missiya",
    description:
      "Azərbaycan bizneslərini rəqəmsal transformasiya ilə gücləndirir və beynəlxalq bazarlarda rəqabətədavamlı edirik.",
  },
  {
    icon: Heart,
    title: "Dəyərlər",
    description: "Keyfiyyət, şəffaflıq, innovasiya və müştəri məmnuniyyəti bizim əsas dəyərlərimizdir.",
  },
  {
    icon: Globe,
    title: "Vizyon",
    description: "Azərbaycanda rəqəmsal sahənin lideri olmaq və regional bazarda tanınan brend yaratmaq.",
  },
]

const achievements = [
  { number: "150+", label: "Tamamlanmış Layihə" },
  { number: "50+", label: "Məmnun Müştəri" },
  { number: "5+", label: "İl Təcrübə" },
  { number: "99%", label: "Müştəri Məmnuniyyəti" },
]

const technologies = [
  { name: "Next.js", logo: "/placeholder.svg?height=60&width=60&text=Next.js" },
  { name: "React", logo: "/placeholder.svg?height=60&width=60&text=React" },
  { name: "Node.js", logo: "/placeholder.svg?height=60&width=60&text=Node.js" },
  { name: "PostgreSQL", logo: "/placeholder.svg?height=60&width=60&text=PostgreSQL" },
  { name: "MongoDB", logo: "/placeholder.svg?height=60&width=60&text=MongoDB" },
  { name: "AWS", logo: "/placeholder.svg?height=60&width=60&text=AWS" },
  { name: "Figma", logo: "/placeholder.svg?height=60&width=60&text=Figma" },
  { name: "Adobe XD", logo: "/placeholder.svg?height=60&width=60&text=Adobe+XD" },
  { name: "TypeScript", logo: "/placeholder.svg?height=60&width=60&text=TypeScript" },
  { name: "Tailwind CSS", logo: "/placeholder.svg?height=60&width=60&text=Tailwind" },
  { name: "Prisma", logo: "/placeholder.svg?height=60&width=60&text=Prisma" },
  { name: "Vercel", logo: "/placeholder.svg?height=60&width=60&text=Vercel" },
]

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Haqqımızda" }]} />

        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-5xl md:text-6xl font-bold">Haqqımızda</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            2019-cu ildən bəri Azərbaycanda rəqəmsal sahədə fəaliyyət göstərən Digital Base, müasir texnologiyalar və
            yaradıcı yanaşma ilə bizneslərin rəqəmsal transformasiyasına dəstək olur.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Bizim Hekayəmiz</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Digital Base 2019-cu ildə kiçik bir komanda tərəfindən qurulmuş və bu gün Azərbaycanda aparıcı rəqəmsal
                agentliklər arasında yer alır. Biz texnologiyanın gücünə inanaraq, hər bir layihəyə fərdi yanaşma tətbiq
                edirik.
              </p>
              <p>
                Komandamız müxtəlif sahələrdə təcrübəli mütəxəssislərdən ibarətdir və hər bir üzvü öz sahəsində
                ekspertdir. Biz sadəcə kod yazmır, dizayn etmir - həllər yaradırıq.
              </p>
              <p>
                Müştərilərimizin uğuru bizim uğurumuzdur. Bu prinsiplə çalışaraq, hər bir layihədə maksimum nəticə əldə
                etməyə çalışırıq.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Digital Base Ofis"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Missiya, Vizyon və Dəyərlərimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20 p-12 bg-primary/5 rounded-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Nailiyyətlərimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Komandamız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-base text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">İstifadə Etdiyimiz Texnologiyalar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
              >
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform"
                />
                <Badge variant="outline" className="text-sm">
                  {tech.name}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 bg-primary/5 rounded-2xl">
          <h2 className="text-4xl font-bold mb-4">Bizimlə İşləməyə Hazırsınız?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Layihənizi müzakirə etmək və pulsuz məsləhət almaq üçün bizimlə əlaqə saxlayın
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Əlaqə Saxlayın</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
