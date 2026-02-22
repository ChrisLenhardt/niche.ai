// hooks/useUser.ts
'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'

export function useUserData() {
  const [user, setUser] = useState<User | null>(null)
  const [providers, setProviders] = useState<string[]>([])
  const [metadata, setMetaData] = useState<string[]>([])


  useEffect(() => {
    const supabase = createClient()

    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setProviders(user?.app_metadata?.providers ?? [])
      setMetaData(user?.user_metadata?.providers ?? [])
    }

    getUser()
  }, [])
  
  return {user , providers, metadata, loading: user === null || providers === null || metadata === null, }
}

export function useUserHasSpotify() {
  const [providers, setProviders] = useState<string[]>([])


  useEffect(() => {
    const supabase = createClient()

    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setProviders(user?.app_metadata?.providers ?? [])
    }

    getUser()
  }, [])
  console.log(providers)
  return {
    hasSpotify: providers?.includes('Spotify') ?? false,
    loading: providers === null,
  }
}