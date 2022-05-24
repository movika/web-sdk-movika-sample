import React from 'react'
import { movika } from '@interactiveplatform/movika-player'

const API_KEY = ''
const APP_NAME = ''
const SOURCE = ''

function App() {
  const videoRef = React.useRef(null)
  const videoContainerRef = React.useRef(null)

  React.useEffect(() => {
    const playerOptions = {
      apiKey: API_KEY,
      appName: APP_NAME,
      src: SOURCE,
    }

    const controlsOverlayOptions = {
      endOfMovieScreen: true,
      width: '100vw',
      height: '100vh',
    }

    const mp = new movika.Player(videoRef.current, playerOptions)
    const mco = new movika.ControlsOverlay(
      mp,
      videoContainerRef.current,
      controlsOverlayOptions,
    )
    const mi = new movika.Interactives(mp, mco)

    return () => {
      mi.destroy()
      mco.destroy()
      mp.destroy()
    }
  }, [])

  return (
    <div ref={videoContainerRef}>
      <video ref={videoRef} />
    </div>
  )
}

export default App
