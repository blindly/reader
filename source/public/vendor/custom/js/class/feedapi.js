//@ts-check
class FeedApi {
  constructor(data) {
    //this.apiUrl = "https://api.fivecat.xyz/api/index.php/feed/startup";
    this.category = data.category;
    this.apiUrl = `https://api.fivecat.xyz/api/index.php/feed/${this.category}`;
    this.template = "#myLink";
    this.domId = data.domId;
  }

  render() {
    const trending = new Request(this.apiUrl);
    fetch(trending)
      .then( response => response.json() )
      .then( response => {
        //console.log(response);
        let myStories = [];

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