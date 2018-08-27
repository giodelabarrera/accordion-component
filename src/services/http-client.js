
class HttpClient {

  constructor(config = {}) {
    this.config = config
  }

  async request(method, uri = '', options = {}) {

    const headers = { 'Content-Type': 'application/json' }

    const init = { method, headers }

    const url = this.config.baseUri ? this.config.baseUri + uri : uri

    try {
      let response = await fetch(url, init)
      let jsonResponse = await response.json()

      return jsonResponse
    }
    catch (err) {
      throw new Error(err.message)
    }
  }

  get(url, options = {}) {
    return this.request('GET', url, options)
  }
}

export default HttpClient