// hooks/useTopGenres.ts
import { useEffect, useState } from 'react';

export function useTopGenres() {
  const [genres, setGenres] = useState<string[]>([]);
  const [generating, setGenerating] = useState(true);

  useEffect(() => {
    fetch('/api/spotify/top-genres')
      .then(res => res.json())
      .then(data => setGenres(data.genres ?? []))
      .finally(() => setGenerating(false));
  }, []);

  return { genres, generating };
}