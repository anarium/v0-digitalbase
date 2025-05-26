import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Səhifə tapılmadı</h2>
        <p className="text-muted-foreground mb-4">Axtardığınız səhifə mövcud deyil.</p>
        <Button asChild>
          <Link href="/">Ana səhifəyə qayıt</Link>
        </Button>
      </div>
    </div>
  )
}
