//@ts-check
class Hackernews {
  constructor(data) {
    this.apiUrl = "https://api.fivecat.xyz/api/index.php/feed/startup";
    this.template = data.template;
    this.domId = data.domId;
  }

  top() {
    const trending = new Request(this.apiUrl);
    fetch(trending)
      .then( response => response.json() )
      .then( response => {
        //console.log(response);
        let myStories = [];
        let titles = [];

        for (const story of response.stories){

          console.debug(story);

          let myStory = {
            "id": generateQuickGuid(),
            "title": story.title,
            "link": story.link,
            "date": story.date,
            //"content": story.story_content,
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
          const blacklistDomains = [
            'boingboing.net',
            //'www.theverge.com'
            ];
            
          const blacklisted = blacklistDomains.indexOf( myStory.domain ) != -1;
          console.debug(blacklisted);
          if ( blacklisted ) {
            myStory.show = false;
          }

          // Remove duplicate stories
          var duplicate = titles.indexOf(story.title) != -1;
          console.debug(story.title + ": dup: " + duplicate );
          if ( duplicate ) {
            myStory.show = false;
          } else {
            titles.push(story.title);
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