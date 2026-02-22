import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import SpotifyLinkButton from '@/components/SpotifyLinkButton'

export default async function LoginPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  async function login(formData: FormData) {
    'use server'

    const dis_name = formData.get('display_name') as string
    const supabase = await createClient()

    const { error } = await supabase.auth.updateUser({
      data: { display_name: dis_name },
    })

    if (error) {
      console.error(error)
      redirect('/dashboard?error=update_failed')
    }

    redirect('/user_settings')
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-10">
      <h1 className="text-4xl font-bold tracking-tight mb-3">
        Hello again,{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          {user.user_metadata?.display_name}
        </span>
      </h1>

      <form
        action={login}
        className="w-full max-w-sm space-y-4 p-8 shadow-2xl bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-3xl"
      >
        <div className="space-y-2 pb-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">
            Change Display Name
          </label>

          <input
            name="display_name"
            type="text"
            placeholder="example_user_name"
            required
            className="block w-full px-4 py-4 bg-black/40 border border-white/5 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all outline-none text-sm font-mono placeholder:text-zinc-700"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-zinc-100 active:scale-[0.98] transition-all"
        >
          Submit
        </button>
      </form>

      <div className="shadow-xl shadow-green-300/5 border-2 rounded-3xl border-zinc-700">
        <SpotifyLinkButton />
      </div>
    </div>
  )
}