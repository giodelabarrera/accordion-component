
class Component {

  constructor(tagNameOrElement) {
    if (tagNameOrElement instanceof String) {
      this._element = document.createElement(tagNameOrElement)
    } else if (tagNameOrElement instanceof HTMLElement) {
      this._element = tagNameOrElement
    }
  }

  get element() {
    return this._element
  }

  set element(element) {
    this._element = element
  }
}

export default Component