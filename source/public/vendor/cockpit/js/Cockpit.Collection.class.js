class CockpitCollection {
  constructor(data) {
    this.endpoint = data.endpoint;
    this.accessToken = data.accessToken;
    this.collection = data.collection;

    this.url = `${this.endpoint}/api/collections/get/${this.collection}?token=${this.accessToken}`;
  }

  listCollections() {
    var url = `${this.endpoint}/api/collections/listCollections?token=${this.accessToken}`;
    fetch(url)
      .then(collections => collections.json())
      .then(collections => console.log(collections));
  }

  getSchema() {
    var url = `${this.endpoint}/api/collections/collection/${this.collection}?token=${this.accessToken}`;
    fetch(url)
      .then(collection => collection.json())
      .then(collection => console.log(collection));
  }

  get CollectionUrl() {
    var url = `${this.endpoint}/api/collections/get/${this.collection}?token=${this.accessToken}`;
    return url;
  }

  getCollection() {
    var url = `${this.endpoint}/api/collections/get/${this.collection}?token=${this.accessToken}`;
    fetch(url)
      .then(collections => collections.json())
      .then(collections => console.log(collections));
  }

  filterCollection() {
    var url = `${this.endpoint}/api/collections/get/${this.collection}?token=${this.accessToken}`;
    fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          filter: {
            published: true
          },
          limit: 10,
          skip: 5,
          sort: {
            _created: -1
          },
          populate: 1 // resolve linked collection items
        })
      })
      .then(collections => collections.json())
      .then(collections => console.log(collections));
  }

  updateCollection(data) {
    var url = `${this.endpoint}/api/collections/save/${this.collection}?token=${this.accessToken}`;
    var body = {
      data
    };

    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

}