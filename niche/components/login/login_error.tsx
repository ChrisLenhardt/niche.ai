'use client'

import { useSearchParams } from 'next/navigation'

export function LoginError() {
  const params = useSearchParams()
  const error = params.get('error')

  if (!error) return null

  let message = 'Incorrect Username or Password'

  return (
    <p className="rounded bg-red-100 p-2 text-red-600">
      {message}
    </p>
  )
}