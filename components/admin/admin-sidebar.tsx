"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, Settings, BarChart3, MessageSquare, ImageIcon, Globe } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Səhifələr", href: "/admin/pages", icon: FileText },
  { name: "Blog", href: "/admin/blog", icon: FileText },
  { name: "Portfolio", href: "/admin/portfolio", icon: ImageIcon },
  { name: "Əlaqə Sorğuları", href: "/admin/contacts", icon: MessageSquare },
  { name: "Analitika", href: "/admin/analytics", icon: BarChart3 },
  { name: "Tənzimləmələr", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-background border-r">
      <div className="p-6">
        <Link href="/admin" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Digital Base" width={150} height={35} className="h-8 w-auto" />
        </Link>
      </div>
      <nav className="px-4 space-y-2">
        {navigation.map((item) => (
          <Button
            key={item.name}
            asChild
            variant={pathname === item.href ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4 mr-2" />
              {item.name}
            </Link>
          </Button>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4 right-4">
        <Button asChild variant="outline" className="w-full">
          <Link href="/">
            <Globe className="h-4 w-4 mr-2" />
            Sayta Qayıt
          </Link>
        </Button>
      </div>
    </div>
  )
}
