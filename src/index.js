import App from './App';
import './index.sass'

const root = document.getElementById('root')

const app = new App()
app.init()

root.appendChild(app.element)