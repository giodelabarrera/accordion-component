import Component from "../Component";
import './Accordion.sass'

class Accordion extends Component {

  constructor(element) {
    super(element)

    if (!(element instanceof HTMLDListElement)) throw new Error('element must be of type HTMLDListElement')

    this.element.classList.add('Accordion')

    this._terms = Array.from(this.element.querySelectorAll('dt'))
    this._descriptions = Array.from(this.element.querySelectorAll('dd'))

    this._terms.forEach(term => {
      this._addTermClass(term)
      this._addTermClickListener(term)
    })
    
    this._descriptions.forEach(description => this._addDescriptionClass(description))
  }

  get terms() {
    return this._terms
  }
  
  get descriptions() {
    return this._descriptions
  }

  _addTermClass(term) {
    term.classList.add('Accordion-itemTerm')
  }

  _addDescriptionClass(description) {
    description.classList.add('Accordion-itemDescription')
  }

  _addTermClickListener(term) {
    term.addEventListener('click', this._handleTermClick)
  }

  _expand(description) {
    description.classList.toggle('is-expanded')
  }

  _isExpanded(description) {
    return description.classList.contains('is-expanded')
  }

  _collapseSiblings(description) {
    this._descriptions.forEach(_description => {
      if (!_description.isSameNode(description)) _description.classList.remove('is-expanded')
    })
  }

  _handleTermClick = e => {
    const description = e.target.nextElementSibling

    this._collapseSiblings(description)

    this._expand(description)
  }

  _createTerm(content) {
    const term = document.createElement('dt')
    
    this._addTermClass(term)
    term.innerHTML = content
    this._addTermClickListener(term)

    return term
  }

  _createDescription(content) {
    const description = document.createElement('dd')

    this._addDescriptionClass(description)
    description.innerHTML = content

    return description
  }

  addItem(termContent, descContent) {
    const term = this._createTerm(termContent)
    this._addTermClass(term)
    this._terms.push(term)

    const description = this._createDescription(descContent)
    this._addDescriptionClass(description)
    this._descriptions.push(description)

    this.element.appendChild(term)
    this.element.appendChild(description)
  }
}

export default Accordion