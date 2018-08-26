import Component from "../Component";

class Accordion extends Component {

  constructor(element) {
    super()

    this.element = element
    this._itemTitles = Array.from(this.element.querySelectorAll('dt'))
    this._itemBodies = Array.from(this.element.querySelectorAll('dd'))
  }

  _addClasses() {
    this.element.classList.add('Accordion')
    this._itemTitles.forEach(itemTitle => itemTitle.classList.add('Accordion-item-title'))
    this._itemBodies.forEach(itemBody => itemBody.classList.add('Accordion-item-body'))
  }

  _expand(itemBody) {
    itemBody.classList.toggle('is-expanded')
  }

  _isExpanded(itemBody) {
    return itemBody.classList.contains('is-expanded')
  }

  _collapseSiblings(itemBody) {
    this._itemBodies.forEach(_itemBody => {
      if (!_itemBody.isSameNode(itemBody)) _itemBody.classList.remove('is-expanded')
    })
  }

  _handleItemTitleClick = e => {

    const itemBody = e.target.nextElementSibling

    this._collapseSiblings(itemBody)

    this._expand(itemBody)

    // const expandEvent = new CustomEvent('expand')
    // if (this._isExpanded(itemBody)) itemBody.dispatchEvent(expandEvent)
  }

  init() {
    this._addClasses()

    this._itemTitles.forEach(itemTitle => itemTitle.addEventListener('click', this._handleItemTitleClick))
  }
}

export default Accordion