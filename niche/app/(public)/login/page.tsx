import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { LoginError } from '@/components/login/login_error'
import { Music, Mail, Lock, ArrowRight, ShieldCheck, Fingerprint, Terminal, Cpu, Zap } from 'lucide-react'

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
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_70%)]"></div>

        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-md w-full px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white mb-6 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <Music className="w-8 h-8 text-black" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Niche.ai Access
          </h1>

          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em]">
            NeuralSound™ Engine Authentication
          </p>
        </div>

        {/* Card */}
        <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-2xl">

          <form action={login} className="space-y-6">

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">
                Identity Point
              </label>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-zinc-500" />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="name@gmail.com"
                  required
                  className="block w-full pl-11 pr-4 py-4 bg-black/40 border border-white/5 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all outline-none text-sm font-mono placeholder:text-zinc-700"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">
                Access Key
              </label>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-zinc-500" />
                </div>

                <input
                  name="password"
                  type="password"
                  placeholder="••••••••••••"
                  required
                  className="block w-full pl-11 pr-4 py-4 bg-black/40 border border-white/5 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all outline-none text-sm font-mono placeholder:text-zinc-700"
                />
              </div>
            </div>

            <LoginError />

            {/* Submit */}
            <button
              type="submit"
              className="w-full relative group overflow-hidden bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-zinc-100 active:scale-[0.98] transition-all"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Initialize Connection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>

        </div>

        {/* Bottom Status Row */}
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <Cpu className="w-4 h-4 text-purple-500 mx-auto opacity-50" />
            <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
              Neural Core<br />Sync 99.9%
            </p>
          </div>

          <div className="space-y-2">
            <Terminal className="w-4 h-4 text-purple-500 mx-auto opacity-50" />
            <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
              Protocol<br />AES-256-GCM
            </p>
          </div>

          <div className="space-y-2">
            <Zap className="w-4 h-4 text-purple-500 mx-auto opacity-50" />
            <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
              Latency<br />0.4ms Peak
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}