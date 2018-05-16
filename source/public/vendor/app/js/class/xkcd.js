//@ts-check
class Xkcd {
  constructor(data) {
    this.url = 'https://xkcd.com/info.0.json';
    this.template = "#myLink";
    this.domId = "#xkcd";
  }

  render() {
    const request = new Request(this.url);
    fetch(request)
      .then( response => response.json() )
      .then( response => {
        console.log(response);
      });
  }
}