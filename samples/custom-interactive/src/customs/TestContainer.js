import { movika } from '@interactiveplatform/movika-player'
import { TestLayout } from './CustomLayout.js'
import { createTestControl } from './TestControl.js'

export const createTestContainer = container => {
  if (container.type.trim().toLowerCase() === 'randompositionchoice') {
    return new TestContainer(container)
  }
}

export class TestContainer extends movika.utils.Container {
  constructor(container) {
    super(container)
    this.layout = new TestLayout(this.container.layout)
    this.addControlFactory('simplebutton', createTestControl)
  }

  createView(eventCallback) {
    const containerEl = document.createElement('div')
    containerEl.classList.add(
      `${movika.utils.classnamesPrefix}-${this.container.id}`,
    )
    this.layout.setContainerLayout(containerEl)

    this.controls.forEach(control => {
      const secondArg = {
        ...control.control.layoutParams,
        ...this.randPos(this.container.props),
      }

      const el = control.createView({
        parent: containerEl,
        layoutFn: partialRight(this.layout.setControlLayout, secondArg),
      })

      control.setEvents(el, eventCallback)
    })

    movika.utils.getRootEl().append(containerEl)

    return containerEl
  }

  randPos(props) {
    if (!props) return {}

    return {
      x: getRandomNumber(props.xThreshold),
      y: getRandomNumber(props.yThreshold),
    }
  }

  hide() {
    const el = this.getElement()

    if (el) el.style.visibility = 'hidden'
  }

  show() {
    const el = this.getElement()

    if (el) el.style.visibility = 'visible'
  }

  removeView() {
    this.getElement()?.remove()
  }

  getElement() {
    return document.querySelector(
      `.${movika.utils.classnamesPrefix}-${this.container.id}`,
    )
  }
}

// helpers
const getRandomNumber = limit => Math.random() * limit
const partialRight = (fn, first) => second => fn(second, first)
