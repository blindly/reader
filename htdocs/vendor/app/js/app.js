// Newsblur / Trending
var newsblur = new Newsblur();
newsblur.trending();

showSection('newsblur');
$('#title').text("Trending");

$('#newsblurLink').click(function () {
  showSection('newsblur');
  $('#title').text("Trending");
});

// Startup
var startup = new FeedApi({
  'category': "startup",
  'domId': "#startup",
  'template': "#link"
});
startup.render();

$('#startupLink').click(function () {
  $('#title').text("Startup News");
  showSection('startup');
});

// Web Development
var webdev = new Reddit({
  'subreddit': "webdev+javascript",
  'domId': "#webdev",
  'template': "#link"
});
webdev.hot();

$('#webdevLink').click(function () {
  $('#title').text("Web Dev");
  showSection('webdev');
});

// Programming
var programming = new FeedApi({
  'category': "programming",
  'domId': "#programming",
  'template': "#link"
});
programming.render();

$('#programmingLink').click(function () {
  $('#title').text("Programming News");
  showSection('programming');
});

// Browser News
var browsernews = new FeedApi({
  'category': "browsers",
  'domId': "#browsers",
  'template': "#link"
});
browsernews.render();

$('#browsersLink').click(function () {
  $('#title').text("Web Dev");
  showSection('browsers');
});

// Enterprise
var enterprise = new FeedApi({
  'category': "enterprise",
  'domId': "#enterprise",
  'template': "#link"
});
enterprise.render();

$('#enterpriseLink').click(function () {
  $('#title').text("Enterprise News");
  showSection('enterprise');
});

// Cryptocurrency
var altcoin = new FeedApi({
  'category': "crypto",
  'domId': "#crypto",
  'template': "#link"
});
altcoin.render();

$('#cryptoLink').click(function () {
  showSection('crypto');
  $('#title').text("AltCoin News");
});

// Gaming News
var gaming = new FeedApi({
  'category': "gaming",
  'domId': "#gaming",
  'template': "#link"
});
gaming.render();

$('#gamingLink').click(function () {
  $('#title').text("Gaming News");
  showSection('gaming');
});

// Comics
var comics = new FeedApi({
  'category': "comic",
  'domId': "#comics",
  'template': "#myComic"
});
comics.render();

$('#comicsLink').click(function () {
  showSection('comics');
  $('#title').text("Comics");
});

// Programming Humor
var devfun = new Reddit({
  'subreddit': "ProgrammerHumor",
  'domId': "#devfun",
  'template': "#redditComic"
});
devfun.hot();

$('#devfunLink').click(function () {
  showSection('devfun');
  $('#title').text("Dev Humor");
});

// Pro Tips
var protips = new Reddit({
  'subreddit': "LifeProTips+UnethicalLifeProTips",
  'domId': "#protips",
  'template': "#text",
  'selfpost': true,
});
protips.hot();

$('#protipsLink').click(function () {
  showSection('protips');
  $('#title').text("Life Tips");
});

// Section

function showSection(currentCategory) {
  const categories = ['newsblur', 'startup', 'webdev', 'gaming', 'enterprise', 'browsers', 'comics', 'devfun', 'crypto', 'programming', 'protips'];
  categories.forEach(function (category) {
    var link = `#${category}Link`;
    var domId = `#${category}`;
    if (category === currentCategory) {
      $(domId).show();
      $(link).addClass("active");
      $('#title').text(`${category} News`);
    } else {
      $(domId).hide();
      $(link).removeClass("active");
    }
  });
}