'use client'

import { useSearchParams } from 'next/navigation'

export function DashboardError() {
  const params = useSearchParams()
  const error = params.get('error')

  if (!error) return null

  let message = 'Something went wrong'

  if (error === 'missing_name') {
    message = 'Display name is required'
  }

  if (error === 'update_failed') {
    message = 'Failed to update display name'
  }

  return (
    <p className="rounded bg-red-100 p-2 text-red-600">
      {message}
    </p>
  )
}