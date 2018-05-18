//@ts-check
class Newsblur {
  constructor(data) {
    this.apiUrl = "//www.newsblur.com/reader/river_stories";
    //this.apiUrl = "http://www.newsblur.com/reader/river_stories?page=1,2&feeds=2,12,1665281,161,576138,6188470";
    this.template = data.template;
    this.domId = data.domId;
  }

  trending() {
    const trending = new Request(this.apiUrl);
    fetch(trending)
      .then( response => response.json() )
      .then( response => {

        let myStories = [];
        let titles = [];

        for (const story of response.stories){
          let myStory = {
            "id": generateQuickGuid(),
            "title": story.story_title,
            "link": story.story_permalink,
            "date": story.long_parsed_date,
            "content": story.story_content,
            "domain": getDomain( story.story_permalink ),
            "favicon": generateFavicon( story.story_permalink ),
            "show": true
          };

          // No stories that have questions for title
          const isQuestion = myStory.title.indexOf('?') > -1;
          console.debug(isQuestion);
          if ( isQuestion ) {
            myStory.show = false;
          }

          // Blacklisted domains because they have crap stories
          const blacklistDomains = getBlacklistedDomains();
          const blacklisted = blacklistDomains.indexOf( myStory.domain ) != -1;
          console.debug(blacklisted);
          if ( blacklisted ) {
            myStory.show = false;
          }

          // Remove duplicate stories
          var duplicate = titles.indexOf(story.story_title) != -1;
          console.debug(story.story_title + ": dup: " + duplicate );
          if ( duplicate ) {
            myStory.show = false;
          } else {
            titles.push(story.story_title);
          }

          console.debug(myStory);
          if (myStory.show) {
            myStories.push(myStory);
          }
        }

        const template = $.templates(this.template);
        const htmlOutput = template.render(myStories);
        $(this.domId).html(htmlOutput);

        console.debug(myStories);

      });
  }
  
}