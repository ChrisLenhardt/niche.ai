'use client'

import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

export default function SpotifyLinkButton() {
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const linkSpotify = async () => {
    setLoading(true)
    const { error } = await supabase.auth.linkIdentity({
      provider: 'spotify',
      options: {
        scopes: 'user-top-read',
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    })
    if (error) {
      console.error(error)
      setLoading(false)
    }
    // On success, browser redirects to Spotify
  }

  return (
    <button onClick={linkSpotify} disabled={loading}>
      {loading ? 'Connecting...' : 'Connect Spotify'}
    </button>
  )
}