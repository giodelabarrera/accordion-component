import Component from "../Component";

class Accordion extends Component {

  constructor(element) {
    super()

    this.element = element
    this._itemTitles = Array.from(this.element.querySelectorAll('dt'))
    this._itemBodies = Array.from(this.element.querySelectorAll('dd'))
  }

  _addClassNames() {
    this.element.classList.add('Accordion')
    this._itemTitles.forEach(itemTitle => itemTitle.classList.add('Accordion-itemTitle'))
    this._itemBodies.forEach(itemBody => itemBody.classList.add('Accordion-itemBody'))
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
  }

  _createItemTitle(content) {
    const itemTitle = document.createElement('dt')
    
    itemTitle.classList.add('Accordion-itemTitle')
    itemTitle.innerHTML = content
    itemTitle.addEventListener('click', this._handleItemTitleClick)

    return itemTitle
  }

  _createItemBody(content) {
    const itemBody = document.createElement('dd')

    itemBody.classList.add('Accordion-itemBody')
    itemBody.innerHTML = content

    return itemBody
  }

  addItem(titleContent, bodyContent) {

    const itemTitle = this._createItemTitle(titleContent)
    this._itemTitles.push(itemTitle)

    const itemBody = this._createItemBody(bodyContent)
    this._itemBodies.push(itemBody)

    this.element.appendChild(itemTitle)
    this.element.appendChild(itemBody)
  }

  init() {
    this._addClassNames()

    this._itemTitles.forEach(itemTitle => itemTitle.addEventListener('click', this._handleItemTitleClick))
  }
}

export default Accordion