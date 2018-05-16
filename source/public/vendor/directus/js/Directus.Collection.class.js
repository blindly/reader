class DirectusCollection {
  constructor(data) {
    this.client = new RemoteInstance({
      url:          data.url,
      accessToken:  data.token, // optional, can be used without on public routes
    });

    this.collection = data.collection;
  }

  all() {
    this.client.getItems(this.collection)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  one(id) {
    this.client.getItem(this.collection, id)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => console.log(err));
  }

  update(id, payload) {
    this.client.updateItem(this.collection, id, JSON.stringify(payload));
  }
}