"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Eye, Plus, Save } from "lucide-react"
import Link from "next/link"

const pages = [
  { id: 1, title: "Ana Səhifə", slug: "/", status: "published", lastModified: "2024-01-15" },
  { id: 2, title: "Xidmətlər", slug: "/services", status: "published", lastModified: "2024-01-14" },
  { id: 3, title: "Portfolio", slug: "/portfolio", status: "published", lastModified: "2024-01-13" },
  { id: 4, title: "Haqqımızda", slug: "/about", status: "published", lastModified: "2024-01-12" },
  { id: 5, title: "Əlaqə", slug: "/contact", status: "published", lastModified: "2024-01-11" },
  { id: 6, title: "FAQ", slug: "/faq", status: "published", lastModified: "2024-01-10" },
]

const services = [
  { id: 1, title: "Veb Sayt Hazırlanması", slug: "/services/web-development", status: "published" },
  { id: 2, title: "Mobil Tətbiqlər", slug: "/services/mobile-development", status: "published" },
  { id: 3, title: "UI/UX Dizayn", slug: "/services/ui-ux-design", status: "published" },
  { id: 4, title: "E-ticarət Həlləri", slug: "/services/ecommerce-solutions", status: "published" },
  { id: 5, title: "Rəqəmsal Marketinq", slug: "/services/digital-marketing", status: "published" },
  { id: 6, title: "Biznes Avtomatlaşdırma", slug: "/services/automation-dashboards", status: "published" },
]

export default function AdminPages() {
  const [selectedPage, setSelectedPage] = useState(null)
  const [editMode, setEditMode] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Səhifə İdarəetməsi</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Yeni Səhifə
        </Button>
      </div>

      <Tabs defaultValue="main-pages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="main-pages">Əsas Səhifələr</TabsTrigger>
          <TabsTrigger value="service-pages">Xidmət Səhifələri</TabsTrigger>
          <TabsTrigger value="blog-posts">Blog Məqalələri</TabsTrigger>
        </TabsList>

        <TabsContent value="main-pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Əsas Səhifələr</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pages.map((page) => (
                  <div key={page.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{page.title}</h3>
                      <p className="text-sm text-muted-foreground">{page.slug}</p>
                      <p className="text-xs text-muted-foreground">Son dəyişiklik: {page.lastModified}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={page.status === "published" ? "default" : "secondary"}>
                        {page.status === "published" ? "Yayımlanmış" : "Qaralama"}
                      </Badge>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={page.slug}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="service-pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Xidmət Səhifələri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.slug}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={service.status === "published" ? "default" : "secondary"}>
                        {service.status === "published" ? "Yayımlanmış" : "Qaralama"}
                      </Badge>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={service.slug}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog-posts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Blog Məqalələri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">AI İnteqrasiyası ilə E-ticarət Gələcəyi</h3>
                    <p className="text-sm text-muted-foreground">/blog/ai-integration-ecommerce-future</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">Yayımlanmış</Badge>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/blog/ai-integration-ecommerce-future">
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Mobil Tətbiq Dizaynında UX Prinsipləri</h3>
                    <p className="text-sm text-muted-foreground">/blog/mobile-app-ux-principles</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">Yayımlanmış</Badge>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/blog/mobile-app-ux-principles">
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Page Editor Modal/Panel would go here */}
      {editMode && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Səhifə Redaktoru</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Başlıq</label>
              <Input placeholder="Səhifə başlığı" />
            </div>
            <div>
              <label className="text-sm font-medium">Slug</label>
              <Input placeholder="/page-slug" />
            </div>
            <div>
              <label className="text-sm font-medium">Məzmun</label>
              <Textarea rows={10} placeholder="Səhifə məzmunu..." />
            </div>
            <div className="flex space-x-2">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Yadda Saxla
              </Button>
              <Button variant="outline" onClick={() => setEditMode(false)}>
                Ləğv Et
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
