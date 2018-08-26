import App from './App';

const root = document.getElementById('root')

const app = new App()
app.init()

root.appendChild(app.element)