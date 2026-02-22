export async function fetchTopArtists(accessToken: string) {
  const res = await fetch(
    'https://api.spotify.com/v1/me/top/artists?limit=50',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch Spotify top artists')
  }

  return res.json()
}

export function extractTopGenres(
  artists: any[],
  topN = 3
): string[] {
  const counts: Record<string, number> = {}

  for (const artist of artists) {
    for (const genre of artist.genres) {
      counts[genre] = (counts[genre] || 0) + 1
    }
  }

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([genre]) => genre)
}