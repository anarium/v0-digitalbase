"use client"

import { useSession } from "next-auth/react"

export default function AdminTest() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div className="p-8">Loading...</div>
  }

  if (!session) {
    return <div className="p-8">Not authenticated</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Test Page</h1>
      <p>Welcome, {session.user?.email}</p>
      <p>Session status: {status}</p>
      <pre className="mt-4 p-4 bg-gray-100 rounded">{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
