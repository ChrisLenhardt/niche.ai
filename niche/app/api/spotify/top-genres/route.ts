// app/api/spotify/top-genres/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  const supabase = await createClient();
  
  const { data: { session } } = await supabase.auth.getSession();
  const accessToken = session?.provider_token;

  if (!accessToken) {
    return NextResponse.json({ error: 'No access token' }, { status: 401 });
  }

  const res = await fetch('https://api.spotify.com/v1/me/top/artists?limit=20&time_range=medium_term', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  const data = await res.json();

  if (!data.items) {
    return NextResponse.json({ genres: [] });
  }

  // Count genre frequency across all top artists
  const genreCount: Record<string, number> = {};
  for (const artist of data.items) {
    for (const genre of artist.genres) {
      genreCount[genre] = (genreCount[genre] ?? 0) + 1;
    }
  }

  // Sort by frequency and take top 3
  const top3 = Object.entries(genreCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([genre]) => genre);

  return NextResponse.json({ genres: top3 });
}