'use client'

import { useEffect, useState } from 'react'

export function useSearch(params: string) {
  const [response, setResponse] = useState<unknown | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!params) return;
    setLoading(true);
    console.log('loading should be true:', loading)
    setResponse(null);
    setError(null);
    const backend_adrs = process.env.NEXT_PUBLIC_BACKEND_ADDRESS;

    async function fetchData() {
      try {
        const res = await fetch(`${backend_adrs}/vector/similar_albums/${params}`, { next: { revalidate: 3600 } });
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const [data] = await Promise.all([
        res.json(),
        new Promise(resolve => setTimeout(resolve, 1))
        ]);
        setResponse(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
        console.log(loading)
      }
    }

    fetchData()
  }, [params])
  
  return { response, loading, error }
}