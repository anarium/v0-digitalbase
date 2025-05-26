import type React from "react"
import { Providers } from "@/app/providers"

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
