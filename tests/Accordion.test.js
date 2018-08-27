import Accordion from "../src/components/Accordion";

describe('accordion', () => {

  let div = null
  let accordion = null

  beforeEach(() => {
    div = document.createElement('div')
    div.innerHTML = `
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
    
    accordion = new Accordion(div.querySelector('dl'))
    accordion.init()
  })

  afterEach(() => {
    if (div) div.remove()
    div = accordion = null
  })

  test('should first dd not be expanded', () => {

    const itemTitle = accordion.querySelector('dt:first-child')
    const itemBody = itemTitle.nextElementSibling

    expect(!itemBody.classList.contains('is-expanded')).toBeFalsy
  })

})