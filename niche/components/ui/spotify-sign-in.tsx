import SpotifyLinkButton from "../SpotifyLinkButton"

export default function Overlay({ show }: { show: boolean }) {
  if (!show) return null

  return (
    <div className="flex-col fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="flex flex-col bg-white rounded-lg p-6 shadow-lg">
        <span className="text-2xl font-medium text-black m-10 max-w-xs text-center">
            Connect Your Spotify Account to Continue
        </span>
        <SpotifyLinkButton />
      </div>
    </div>
  )
}