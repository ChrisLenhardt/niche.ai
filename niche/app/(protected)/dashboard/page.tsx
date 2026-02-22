'use client'

import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [genres, setGenres] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/spotify/top-genres')
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text()
          throw new Error(`API ${res.status}: ${text}`)
        }
        return res.json()
      })
      .then((data) => {
        setGenres(data.topGenres ?? [])
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
      })
  }, [])

  if (error) {
    return <p className="text-red-500">Error: {error}</p>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Top Genres</h1>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}