document.addEventListener('DOMContentLoaded', function () {
  /* global getDomain */
  /* global generateFavicon */
  /* global $ */
    
  let url = "//www.newsblur.com/reader/river_stories&page=1,2";
  $.getJSON(url, function (json) {

    var stories = json.stories;
    var titles = [];

    $.each(stories, function (key, value) {
      
      var show = true;
      
      var title = stories[key].story_title;
      var link = stories[key].story_permalink;

      var favicon_img = generateFavicon(link);
      var domain = getDomain(link);
      
      // Start of Duplicate
      var duplicate = titles.indexOf(title) != -1;
      //console.log(title + ": dup: " + duplicate );
      if ( ! duplicate ) {
        titles.push(title);
        show = true;
      }
      //console.log(titles);
      // End of Duplicate
      
      // Start of Sponsored
      var isSponsored = title.indexOf('[Sponsor]') > -1;
      if ( isSponsored ) {
        show = false;
      }
      // End of Sponsored
      
      // Start of Questionmark
      var isQuestion = title.indexOf('?') > -1;
      if ( isQuestion ) {
        show = false;
      }
      // End of Questionmark
      
      // Start of Blacklist
      var blacklistDomains = [
        'boingboing.net',
        ];
        
      var blacklisted = blacklistDomains.indexOf( domain ) != -1;
      if (blacklisted) {
        show = false;
      } 
      // console.log(domain + ": : " + blacklisted );
      // End of Blacklist
      
      //console.log(domain + ": " + show );
        
      if ( show === true ) {

        let save = "<span class='pull-right'><a href=\"javascript:save_bookmark('" + link + "')\" ><i class='fa fa-bookmark' aria-hidden=\"true\"></i></a></span>";
        var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
        var article = "<article><p><a class='title' target='_blank' rel='noopener' href='" + link + "'>" + favicon + title + "</a>"+ save +"</p></article>";
  
        $('#news').append(article);
      
      }
    });
  });
}, false);

