import { movika } from '@interactiveplatform/movika-player'

import { createTestContainer } from './customs/TestContainer.js'
import manifest from './manifest.json' assert { type: 'json' }

const SOURCE = manifest

const API_KEY = '<YOUR_API_KEY>'
const APP_NAME = '<YOUR_APP_NAME>'

const videoContainerElement = document.querySelector('.video-container')
const videoElement = document.querySelector('.video')
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

const mp = new movika.Player(videoElement, playerOptions)
const mco = new movika.ControlsOverlay(
  mp,
  videoContainerElement,
  controlsOverlayOptions,
)

const mi = new movika.Interactives(mp, mco)
mi.addFactory('randompositionchoice', createTestContainer)

// delete event listeners
const destroyAll = () => {
  mi.destroy()
  mco.destroy()
  mp.destroy()
}
