import { movika } from '@interactiveplatform/movika-player'

export const createTestControl = control => {
  if (control.type.trim().toLowerCase() === 'simplebutton') {
    return new TestControl(control)
  }
}

export class TestControl {
  constructor(control) {
    this.control = control
  }

  createView({ parent, layoutFn }) {
    const buttonEl = document.createElement('button')
    buttonEl.type = 'button'
    buttonEl.style.cursor = 'pointer'
    buttonEl.classList.add(
      `${movika.utils.classnamesPrefix}-${this.control.id}`,
    )

    layoutFn(buttonEl)

    buttonEl.style.backgroundColor = this.control.props.backgroundColor
    buttonEl.textContent = this.control.props.text
    parent.append(buttonEl)

    return buttonEl
  }

  setEvents(element, callback) {
    if (!element) return

    this.control.events.forEach(event => {
      const type = event.type.trim().toLowerCase()

      switch (type) {
        case 'onclick':
          element.addEventListener('click', () => {
            if (callback) callback(event.action)
          })
          break
        case 'ondblclick':
          element.addEventListener('dblclick', () => {
            if (callback) callback(event.action)
          })
          break
        default:
          break
      }
    })
  }

  getElement() {
    return document.querySelector(
      `.${movika.utils.classnamesPrefix}-${this.control.id}`,
    )
  }
}
