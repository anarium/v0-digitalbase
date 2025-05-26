import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for API routes, static files, and non-admin routes
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/images/") ||
    pathname.includes(".") ||
    !pathname.startsWith("/admin")
  ) {
    return NextResponse.next()
  }

  // Allow access to login page without authentication
  if (pathname === "/admin/login") {
    try {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      })

      // If already authenticated, redirect to admin dashboard
      if (token) {
        return NextResponse.redirect(new URL("/admin", request.url))
      }
    } catch (error) {
      console.error("Token check error:", error)
    }

    return NextResponse.next()
  }

  // For all other admin routes, require authentication
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }
}

export const config = {
  matcher: ["/admin/:path*"],
}
