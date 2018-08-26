
class Client {

  constructor(config = {}) {
    this.config = config
  }

  async request(method, uri = '', options = {}) {

    const headers = { 'Content-Type': 'application/json' }

    const init = { method, headers }

    const url = this.config.baseUri ? this.config.baseUri + uri : uri

    const response = await fetch(url, init)

    const jsonResponse = await response.json()

    return jsonResponse
  }

  get(url, options = {}) {
    return this.request('GET', url, options)
  }

  delete(url, options = {}) {
    return this.request('DELETE', url, options)
  }

  patch(url, options = {}) {
    return this.request('PATCH', url, options)
  }

  post(url, options = {}) {
    return this.request('POST', url, options)
  }

  put(url, options = {}) {
    return this.request('PUT', url, options)
  }
}

export default Client