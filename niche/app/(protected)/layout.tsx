import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navigation } from 'lucide-react'
import { Footer } from '@/components/Footer'

type ProtectedLayoutProps = {
  children: ReactNode
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()

  // Not authenticated → send to login
  if (error || !data.user) {
    redirect('/login')
  }

  // Authenticated → render protected content
  return (
    <div>
        <main>{children}</main>
    </div>
  )
}