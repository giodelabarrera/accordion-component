import Accordion from '../src/components/Accordion'

describe('accordion', () => {

  let wrapper = null
  let dlElement = null

  const accordionMarkup = `
    <dl>
      <dt>Section 1</dt>
      <dd>
        <p>Section 1 Content...</p>
      </dd>
      <dt>Section 2</dt>
      <dd>
        <p>Section 2 Content...</p>
      </dd>
      <dt>Section 3</dt>
      <dd>
        <p>Section 3 Content...</p>
      </dd>
    </dl>
  `

  beforeEach(() => {
    wrapper = document.createElement('div')
    wrapper.innerHTML = accordionMarkup

    dlElement = wrapper.querySelector('dl')
  })

  afterEach(() => {
    dlElement = null
    wrapper = null
  })

  describe('entry', () => {

    test('should accept an element dl', () => {
      expect(new Accordion(dlElement)).toBeDefined()
    })

    test('should not accept an element that is not an dl element', () => {
      const ulElement = document.createElement('ul')
      expect(() => {
        new Accordion(ulElement)
      }).toThrowError('element must be of type HTMLDListElement')
    })
  })

  describe('initial', () => {

    let accordion = null

    beforeEach(() => {
      accordion = new Accordion(dlElement)
    })

    test('accordion should be an instance of Accordion', () => {
      expect(accordion).toBeInstanceOf(Accordion)
    })

    test('element of accordion should not be null', () => {
      expect(accordion.element).toBeDefined()
      expect(accordion.element).not.toBeNull()
    })

    test('accordion should not have any expanded dd', () => {
      const allCollapsed = accordion.descriptions.every(description => !description.classList.contains('is-expanded'))

      expect(allCollapsed).toBeTruthy()
    })

    afterEach(() => {
      accordion = null
    })
  })

  describe('expand', () => {

    let accordion = null

    beforeEach(() => {
      accordion = new Accordion(dlElement)
    })

    test('should expand dd by clicking on your dt', () => {
      const term = accordion.terms[0]
      const description = term.nextElementSibling

      term.dispatchEvent(new Event('click'))

      expect(description.classList.contains('is-expanded')).toBeTruthy()
    })

    test('should keep only one dd expanded', () => {
      const term = accordion.terms[0]

      term.dispatchEvent(new Event('click'))

      let onlyOneExpanded = true

      accordion.descriptions.slice(1, 3).forEach(_description => {
        if (_description.classList.contains('is-expanded')) onlyOneExpanded = false
      })

      expect(onlyOneExpanded).toBeTruthy()
    })

    afterEach(() => {
      accordion = null
    })

  })

  describe('addItem', () => {

    let accordion = null

    beforeEach(() => {
      accordion = new Accordion(dlElement)
    })

    test('should correctly add a new item', () => {

      accordion.addItem('New Section', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.')

      expect(accordion.terms.length).toEqual(4)
      expect(accordion.descriptions.length).toEqual(4)

      const title = accordion.terms[3]
      expect(title).toBeDefined()

      const description = accordion.descriptions[3]
      expect(description).toBeDefined()

      expect(title.classList.contains('Accordion-itemTerm')).toBeTruthy()
      expect(description.classList.contains('Accordion-itemDescription')).toBeTruthy()
    })

    afterEach(() => {
      accordion = null
    })

  })

})