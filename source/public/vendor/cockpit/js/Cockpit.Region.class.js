class CockpitRegion {
  constructor(data) {
    this.endpoint = data.endpoint;
    this.accessToken = data.accessToken;
    this.region = data.region;
  }

  listRegions() {
    var url = `${this.endpoint}/api/regions/listRegions?token=${this.accessToken}`;
    fetch(url)
      .then(regions => regions.json())
      .then(regions => console.log(regions));
  }

  getSchema() {
    var url = `${this.endpoint}/api/regions/region/${this.region}?token=${this.accessToken}`;
    fetch(url)
      .then(region => region.json())
      .then(region => console.log(region));
  }

  get RegionUrl() {
    var url = `${this.endpoint}/api/regions/get/${this.region}?token=${this.accessToken}`;
    return url;
  }

  getRegion() {
    var url = `${this.endpoint}/api/regions/get/${this.region}?token=${this.accessToken}`;
    fetch(url)
      .then(regions => regions.json())
      .then(regions => console.log(regions));
  }

  filterRegion() {
    var url = `${this.endpoint}/api/regions/get/${this.region}?token=${this.accessToken}`;
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
          populate: 1 // resolve linked region items
        })
      })
      .then(regions => regions.json())
      .then(regions => console.log(regions));
  }

  updateRegion(data) {
    var url = `${this.endpoint}/api/regions/save/${this.region}?token=${this.accessToken}`;
    var body = { data };

    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
      })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

}