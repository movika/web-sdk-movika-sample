export const createTestLayout = layout => {
  if (layout.type.trim().toLowerCase() === 'customlayout') {
    return new TestLayout(layout)
  }
}

export class TestLayout {
  constructor(layout) {
    this.layout = layout
  }

  setContainerLayout(target) {
    target.style.position = 'relative'
  }

  setControlLayout(target, layoutParams) {
    target.style.position = 'absolute'
    target.style.width = `calc(var(--video-content-width) * ${layoutParams.width})`
    target.style.height = `calc(var(--video-content-height) * ${layoutParams.height})`
    target.style.left = `calc(var(--video-content-width) * ${layoutParams.x} + ((var(--player-width) - var(--video-content-width)) / 2))`
    target.style.top = `calc(var(--video-content-height) * ${layoutParams.y} + ((var(--player-height) - var(--video-content-height)) / 2))`
  }
}
