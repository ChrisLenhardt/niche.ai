import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardError } from '@/components/dashboard/dashboard_error'

export default function LoginPage() {

  async function login(formData: FormData) {
    'use server'
    const dis_name = formData.get('display_name') as string

    const supabase = await createClient()

    const { data, error } = await supabase.auth.updateUser({
      data: { display_name: dis_name}
    })

    if (error) {
        console.error(error)
        redirect('/dashboard?error=update_failed')
    }
    redirect('/dashboard')
  }
  


  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-6xl md:text-[84px] font-bold leading-[0.8] tracking-tighter mb-8">Hello again, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-pink-500 italic">User</span></h1>
      <form
        action={login}
        className="w-full max-w-sm space-y-4 rounded border p-6 shadow"
      >
        <h1 className="text-xl font-semibold">Change Display Name</h1>
        <DashboardError />
        <input
          name="display_name"
          type="string"
          placeholder="example_user_name"
          required
          className="w-full rounded border p-2"
        />

        <button
          type="submit"
          className="w-full rounded bg-black p-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  )
}