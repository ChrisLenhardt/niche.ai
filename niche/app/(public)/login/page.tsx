import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { LoginError } from '@/components/login/login_error'

export default function LoginPage() {
  async function login(formData: FormData) {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const supabase = await createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      redirect('/login?error=invalid_credentials')
    }

    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        action={login}
        className="w-full max-w-sm space-y-4 rounded border p-6 shadow"
      >
        <h1 className="text-xl font-semibold">Sign in</h1>
        <LoginError />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded border p-2"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full rounded border p-2"
        />

        <button
          type="submit"
          className="w-full rounded bg-black p-2 text-white"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}