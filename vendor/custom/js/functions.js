function getDomain(link) {
  var a = document.createElement('a');
  a.href = link;
  var domain = a.hostname;
  return domain;
}

function generateFavicon(link) {
  var a = document.createElement('a');
  a.href = link;
  var domain = a.hostname;
  var favicon = "//www.google.com/s2/favicons?domain=" + domain;
  return favicon;
}

function generateQuickGuid() {
  return Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
}