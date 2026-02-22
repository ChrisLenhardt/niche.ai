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
  }

  return (
    <button
      onClick={linkSpotify}
      disabled={loading}
      className="
        group inline-flex items-center justify-center gap-3
        rounded-full bg-[#1DB954] px-6 py-3
        text-sm font-semibold text-black
        transition-all duration-200
        hover:bg-[#1ed760] hover:scale-[1.02]
        active:scale-[0.98]
        disabled:cursor-not-allowed disabled:opacity-60
      "
    >
      {loading ? (
        <>
          <Spinner />
          Connecting…
        </>
      ) : (
        <>
          <SpotifyIcon />
          Connect Spotify
        </>
      )}
    </button>
  )
}

function Spinner() {
  return (
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
  )
}

function SpotifyIcon() {
  return (
    <svg
      viewBox="0 0 168 168"
      className="h-5 w-5 fill-black"
      aria-hidden
    >
      <path d="M84 0C37.7 0 0 37.7 0 84s37.7 84 84 84 84-37.7 84-84S130.3 0 84 0zm38.3 121.5c-1.5 2.5-4.7 3.3-7.2 1.8-19.7-12-44.6-14.7-74-8-2.9.7-5.8-1.2-6.5-4.1-.7-2.9 1.2-5.8 4.1-6.5 32.2-7.4 60.1-4.2 82.4 9.2 2.5 1.5 3.3 4.7 1.8 7.2zm10.3-22.7c-1.9 3.1-5.9 4-9 2.1-22.6-13.9-57.1-17.9-83.9-9.8-3.5 1.1-7.2-.9-8.3-4.4-1.1-3.5.9-7.2 4.4-8.3 30.6-9.3 68.7-4.8 94.8 11.3 3.1 1.9 4 5.9 2.1 9zm.9-23.6C105.9 58.9 66.2 57.7 43 65c-4.1 1.3-8.4-1-9.7-5.1-1.3-4.1 1-8.4 5.1-9.7 26.6-8.1 71-6.5 99.2 9.4 3.7 2.1 5 6.8 2.9 10.5-2.1 3.7-6.8 5-10.5 2.9z" />
    </svg>
  )
}