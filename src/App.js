import Component from "./components/Component";
import Accordion from "./components/Accordion";
import HttpClient from "./services/http-client";

class App extends Component {

  constructor(element) {
    super(element)

    this.element.innerHTML = this.render()

    const accordion = new Accordion(this.element.querySelector('dl'))

    const client = new HttpClient({ baseUri: 'http://localhost:8080/' })

    client.get('section.json').then(({ title, description }) => accordion.addItem(title, `<p>${description}</p>`))
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
}

export default App