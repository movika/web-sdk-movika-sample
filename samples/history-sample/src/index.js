import { movika } from '@interactiveplatform/movika-player'

const SOURCE =
  'https://pro.storage.movika.net/users/4239/projects/55/manifest-v3.json'

const API_KEY = '<YOUR_API_KEY>'
const APP_NAME = '<YOUR_APP_NAME>'

// playback history
const HISTORY = {
  id: '78505456-b73a-4952-8e57-890477d2d34b',
  manifestId: 'cd207694-67f0-4c0f-85ab-d1edcd31301f',
  manifestVersion: '3.0',
  manifestBuild: 0,
  sessions: [
    {
      id: '7db65fc2-07ac-4d0f-8a30-820665c7017d',
      startDate: '2022-05-05T10:07:12.832Z',
      updateOn: '2022-05-05T10:07:43.764Z',
      visitedChapters: [
        { chapterId: '42387a80-551e-4190-ae2d-c8fafdc93f77' },
        { chapterId: '693b1e55-607a-47df-9ce6-1b2c451db80e' }, // last watched chapterId
      ],
      branches: [
        { branchId: '43ea55d5a4434dce8ebc60981fff28dd', autoSelect: false },
        { branchId: 'f350fab2bdb34154801db1411bddc6e4', autoSelect: false },
      ],
    },
  ],
  isCompleted: false,
}

// starts on chapterId
const CHAPTER = '693b1e55-607a-47df-9ce6-1b2c451db80e'

const videoContainerElement = document.querySelector('.video-container')
const videoElement = document.querySelector('.video')
const playerOptions = {
  apiKey: API_KEY,
  appName: APP_NAME,
  src: SOURCE,
  // continue writing
  initialHistory: HISTORY,
  // starts on
  initialChapter: CHAPTER,
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
const mi = new movika.Interactives(mp)

// instead of using 'src' and 'initialChapter' in 'playerOptions' above
// mp.attachManifest(SOURCE, CHAPTER)

const onHistoryChange = ({ detail }) => {
  console.log(detail)
}

videoElement.addEventListener(movika.Events.HISTORY_CHANGED, onHistoryChange)

// delete event listeners
const destroyAll = () => {
  videoElement.removeEventListener(
    movika.Events.HISTORY_CHANGED,
    onHistoryChange,
  )
  mi.destroy()
  mco.destroy()
  mp.destroy()
}
