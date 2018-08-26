import Component from "./components/Component";
import Accordion from "./components/Accordion";
import './App.sass'

class App extends Component {

  constructor() {
    super('div')
  }

  render() {
    return `
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
  }

  init() {
    this.element.innerHTML = this.render()
    
    const accordion = new Accordion(this.element.querySelector('dl'))
    accordion.init()

    // TODO AJAX
  }
}

export default App