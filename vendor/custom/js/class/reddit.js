//@ts-check
class Reddit {
  constructor(data) {
    this.subreddit = data.subreddit;
    this.apiUrl = `https://www.reddit.com/r/${this.subreddit}/hot.json`;
    this.template = data.template;
    this.domId = data.domId;
  }

  hot() {
    const trending = new Request(this.apiUrl);
    fetch(trending)
      .then( response => response.json() )
      .then( response => {
        console.debug(response);
        let myStories = [];

        for (const story of response.data.children){

          console.debug(story);

          let myStory = {
            "id": generateQuickGuid(),
            "title": story.data.title,
            "link": story.data.url,
            //"date": story.date,
            "content": story.data.url,
            "domain": story.data.domain,
            "favicon": generateFavicon( story.data.url ),
            "show": true
          };

          // No Self Posts!
          if ( story.data.is_self ) {
            myStory.show = false;
          }

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