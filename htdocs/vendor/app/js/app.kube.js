// Newsblur / Trending
var newsblur = new Newsblur({
  'domId': "#newsblur",
  'template': "#story"
});
newsblur.trending();

// Startup
var startup = new FeedApi({
  'category': "startup",
  'domId': "#startup",
  'template': "#link"
});
startup.render();

// Web Development
var webdev = new Reddit({
  'subreddit': "webdev+javascript",
  'domId': "#webdev",
  'template': "#link"
});
webdev.hot();

// Programming
var programming = new FeedApi({
  'category': "programming",
  'domId': "#programming",
  'template': "#link"
});
programming.render();

// Browser News
var browsernews = new FeedApi({
  'category': "browsers",
  'domId': "#browsers",
  'template': "#link"
});
browsernews.render();

// Enterprise
var enterprise = new FeedApi({
  'category': "enterprise",
  'domId': "#enterprise",
  'template': "#link"
});
enterprise.render();

// Cryptocurrency
var altcoin = new FeedApi({
  'category': "crypto",
  'domId': "#crypto",
  'template': "#link"
});
altcoin.render();

// Gaming News
var gaming = new FeedApi({
  'category': "gaming",
  'domId': "#gaming",
  'template': "#link"
});
gaming.render();


// Comics
var comics = new FeedApi({
  'category': "comic",
  'domId': "#comics",
  'template': "#story"
});
comics.render();

// Programming Humor
var devfun = new Reddit({
  'subreddit': "ProgrammerHumor",
  'domId': "#devfun",
  'template': "#image",
  "image": true,
});
devfun.hot();

// Pro Tips
var protips = new Reddit({
  'subreddit': "LifeProTips+UnethicalLifeProTips",
  'domId': "#protips",
  'template': "#text",
  'selfpost': true,
});
protips.hot();