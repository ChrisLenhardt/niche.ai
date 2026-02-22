import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { fetchTopArtists, extractTopGenres } from '@/lib/supabase/spotify'

export async function GET() {
  const supabase = await createClient()
    
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session?.provider_token) {
    return NextResponse.json(
      { error: 'Not authenticated with Spotify' },
      { status: 401 }
    )
  }

  console.log('SESSION:', session)

  const data = await fetchTopArtists(session.provider_token)
  const topGenres = extractTopGenres(data.items, 3)

  return NextResponse.json({ topGenres })
}