import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { HLS_VIDEO_SRC } from '../lib/data'

type UseHlsVideoOptions = {
  src?: string
}

export function useHlsVideo({ src = HLS_VIDEO_SRC }: UseHlsVideoOptions = {}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | null = null

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true })
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        void video.play().catch(() => undefined)
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      video.addEventListener('loadedmetadata', () => {
        void video.play().catch(() => undefined)
      })
    }

    return () => {
      hls?.destroy()
    }
  }, [src])

  return videoRef
}
