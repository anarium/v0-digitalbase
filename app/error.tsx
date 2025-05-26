"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Xəta baş verdi!</h2>
        <p className="text-muted-foreground mb-4">Səhifə yüklənərkən xəta baş verdi.</p>
        <Button onClick={reset}>Yenidən cəhd et</Button>
      </div>
    </div>
  )
}
