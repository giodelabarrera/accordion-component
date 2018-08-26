
class Component {

  constructor(tagName = '') {
    this._element = (tagName) ? document.createElement(tagName) : null
  }

  get element() {
    return this._element
  }

  set element(element) {
    this._element = element
  }
}

export default Component