// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards'])


.config(function($stateProvider, $urlRouterProvider) {

})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  };
})

.controller('CardsCtrl', function($scope, TDCardDelegate) {
  console.log('CARDS CTRL');

  $scope.click = function( $event ) {

    console.log('Clicked!');

    // Keep the button from being clicked
    $event.preventDefault();

    var subreddit = $('#subreddit-search').val();

    console.log( subreddit );

    // Make the ajax request with the form data.
    $.ajax({
      url: subreddit,
      type: 'GET',
      success: function(res) {
        console.log( res );
        $scope.cards = res;
      }
    });

  };

  console.log( 'Let\'s get the posts from /r/videos'  );

  var cardTypes = [];

  $.getJSON('/r/videos', function(json, textStatus) {
    var cardTypes = json;
    cardTypes.push(json);
  });

  var cardTypes =[
      {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fbf11-ruYgOo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dbf11-ruYgOo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fbf11-ruYgOo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Leave a comment for next topic.",
                 "title":"Korean girls taste American snacks (ENG sub)",
                 "url":"http://www.youtube.com/watch?v=bf11-ruYgOo",
                 "author_name":"sw yoon",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fbf11-ruYgOo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dbf11-ruYgOo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fbf11-ruYgOo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fbf11-ruYgOo%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/channel/UC6XZ4fmiUPQk6ws6fGs2rQg"
              }
           },
           "link_flair_text":null,
           "id":"2stcwc",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fbf11-ruYgOo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dbf11-ruYgOo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fbf11-ruYgOo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"traizie",
           "media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Leave a comment for next topic.",
                 "title":"Korean girls taste American snacks (ENG sub)",
                 "url":"http://www.youtube.com/watch?v=bf11-ruYgOo",
                 "author_name":"sw yoon",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fbf11-ruYgOo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dbf11-ruYgOo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fbf11-ruYgOo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/bf11-ruYgOo/hqdefault.jpg",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/channel/UC6XZ4fmiUPQk6ws6fGs2rQg"
              }
           },
           "score":4019,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":2720,
           "thumbnail":"http://b.thumbs.redditmedia.com/UW7pnnaRImJXkpITkelGt9Ata_C1mY5jwn5mI-0jnqU.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2stcwc/korean_girls_taste_american_snacks/",
           "name":"t3_2stcwc",
           "created":1421596677,
           "url":"https://www.youtube.com/watch?v=bf11-ruYgOo",
           "author_flair_text":null,
           "title":"Korean girls taste American snacks",
           "created_utc":1421567877,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":4019
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FJXXoFfJ4O6k%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJXXoFfJ4O6k&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FJXXoFfJ4O6k%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"I was able to video this girl winning to the manager about the restaurant she was trying to eat at in Disney World. The manager was very nice about it and she said she could charge him for sexual harassment for him pointing his finger at her!",
                 "title":"Crazy Girl at Disney World gets Mad!",
                 "url":"http://www.youtube.com/watch?v=JXXoFfJ4O6k",
                 "author_name":"freakincrazycrap",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FJXXoFfJ4O6k%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJXXoFfJ4O6k&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FJXXoFfJ4O6k%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FJXXoFfJ4O6k%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/freakincrazycrap"
              }
           },
           "link_flair_text":null,
           "id":"2str4s",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FJXXoFfJ4O6k%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJXXoFfJ4O6k&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FJXXoFfJ4O6k%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"AreYouHuman",
           "media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"I was able to video this girl winning to the manager about the restaurant she was trying to eat at in Disney World. The manager was very nice about it and she said she could charge him for sexual harassment for him pointing his finger at her!",
                 "title":"Crazy Girl at Disney World gets Mad!",
                 "url":"http://www.youtube.com/watch?v=JXXoFfJ4O6k",
                 "author_name":"freakincrazycrap",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FJXXoFfJ4O6k%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJXXoFfJ4O6k&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FJXXoFfJ4O6k%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/JXXoFfJ4O6k/hqdefault.jpg",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/freakincrazycrap"
              }
           },
           "score":976,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":353,
           "thumbnail":"http://b.thumbs.redditmedia.com/3kdfKRXbvdiRRJctdBgq2uHuM8patmFUBbKwWmAJ7Ks.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2str4s/girl_doesnt_make_reservation_and_gets_angry_then/",
           "name":"t3_2str4s",
           "created":1421613299,
           "url":"https://www.youtube.com/watch?v=JXXoFfJ4O6k",
           "author_flair_text":null,
           "title":"Girl doesn't make reservation and gets angry then tells the manager that he was sexually harassing her at Walt Disney World.",
           "created_utc":1421584499,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":976
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FwbSMcUTOfNU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwbSMcUTOfNU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FwbSMcUTOfNU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"video shot by Chance Miller: an octopus escapes from a boat through an unbelievably small hole. Filmed near the Chiswell Islands, Alaska. * credit millerslandingak.com Feel free to friend or follow me https://www.facebook.com/michelle.priddy.33 Join us here https://m.facebook.com/groups/610596255659692?ref=bookmark Check us out here Www.Thewaronweight.com",
                 "title":"Octopus Intelligence",
                 "url":"http://www.youtube.com/watch?v=wbSMcUTOfNU",
                 "author_name":"Michelle Priddy",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwbSMcUTOfNU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwbSMcUTOfNU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FwbSMcUTOfNU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FwbSMcUTOfNU%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/channel/UCLxgoCnrYiB8WQ2GeHER9pw"
              }
           },
           "link_flair_text":null,
           "id":"2stvar",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwbSMcUTOfNU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwbSMcUTOfNU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FwbSMcUTOfNU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "clicked":false,
           "report_reasons":null,
           "author":"Account_Eliminator",
           "media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"video shot by Chance Miller: an octopus escapes from a boat through an unbelievably small hole. Filmed near the Chiswell Islands, Alaska. * credit millerslandingak.com Feel free to friend or follow me https://www.facebook.com/michelle.priddy.33 Join us here https://m.facebook.com/groups/610596255659692?ref=bookmark Check us out here Www.Thewaronweight.com",
                 "title":"Octopus Intelligence",
                 "url":"http://www.youtube.com/watch?v=wbSMcUTOfNU",
                 "author_name":"Michelle Priddy",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FwbSMcUTOfNU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwbSMcUTOfNU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FwbSMcUTOfNU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/wbSMcUTOfNU/hqdefault.jpg",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/channel/UCLxgoCnrYiB8WQ2GeHER9pw"
              }
           },
           "score":573,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":71,
           "thumbnail":"http://b.thumbs.redditmedia.com/JJC6IrE8hHFcK_kkuiFZ7NUHrUlplAAc0_ey9m_7sIA.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2stvar/large_octopus_tiny_gap_incredible_squeeze/",
           "name":"t3_2stvar",
           "created":1421617461,
           "url":"https://www.youtube.com/watch?v=wbSMcUTOfNU",
           "author_flair_text":null,
           "title":"Large Octopus - tiny gap. Incredible squeeze!",
           "created_utc":1421588661,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":573
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F1rVZbxrC9jo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1rVZbxrC9jo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1rVZbxrC9jo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Subscribe: http://www.youtube.com/channel/UCWImhb6oGQJh7oGaEK85nbQ?sub_confirmation=1",
                 "title":"Having a Bad Day (GTA V Online)",
                 "url":"http://www.youtube.com/watch?v=1rVZbxrC9jo",
                 "type":"video",
                 "author_name":"NickTN",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1rVZbxrC9jo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1rVZbxrC9jo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1rVZbxrC9jo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1rVZbxrC9jo%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/Nicklas8361"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2st1o5",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1rVZbxrC9jo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1rVZbxrC9jo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1rVZbxrC9jo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"TheMightyCrate",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Subscribe: http://www.youtube.com/channel/UCWImhb6oGQJh7oGaEK85nbQ?sub_confirmation=1",
                 "title":"Having a Bad Day (GTA V Online)",
                 "url":"http://www.youtube.com/watch?v=1rVZbxrC9jo",
                 "type":"video",
                 "author_name":"NickTN",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F1rVZbxrC9jo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1rVZbxrC9jo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1rVZbxrC9jo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/1rVZbxrC9jo/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/Nicklas8361"
              },
              "type":"youtube.com"
           },
           "score":2199,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":93,
           "thumbnail":"http://b.thumbs.redditmedia.com/mYxoAJfKfB9XJfTUw5Apgp8sjkzAc5m68lfo91qZv4E.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2st1o5/having_a_bad_day_gta_v/",
           "name":"t3_2st1o5",
           "created":1421587450,
           "url":"https://www.youtube.com/watch?v=1rVZbxrC9jo",
           "author_flair_text":null,
           "title":"Having A Bad Day (GTA V)",
           "created_utc":1421558650,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":2199
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FXM-HJT8_esM%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXM-HJT8_esM&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FXM-HJT8_esM%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Starring: Neel Kolhatkar Caitlin Burley Josh Wade Written by Neel Kolhatkar Directed by Neel Kolhatkar Produced by Conceptional Media Cinematography by Tim Mann Edited by Adam Krowitz Sound Design by Can Okan Tickets to Shows: http://www.andrewtaylormanagement.com/gig-guide-neel-kolhatkar/ Twitter: https://twitter.com/neelkolhatkar Instagram: http://instagram.com/neelkolhatkar @neelkolhatkar Facebook: https://www.facebook.com/Neel.Kolhatkar94 Vine: Neel Kolhatkar Music: Darkest Child - Mysterious &amp; Creepy Music (Kevin MacLeod)",
                 "title":"#Equality - A Short Film by Neel Kolhatkar",
                 "url":"http://www.youtube.com/watch?v=XM-HJT8_esM",
                 "author_name":"Neel Kolhatkar",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXM-HJT8_esM%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXM-HJT8_esM&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FXM-HJT8_esM%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FXM-HJT8_esM%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/neel30394"
              }
           },
           "link_flair_text":null,
           "id":"2stjt8",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXM-HJT8_esM%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXM-HJT8_esM&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FXM-HJT8_esM%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"MrTuxedoMan",
           "media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Starring: Neel Kolhatkar Caitlin Burley Josh Wade Written by Neel Kolhatkar Directed by Neel Kolhatkar Produced by Conceptional Media Cinematography by Tim Mann Edited by Adam Krowitz Sound Design by Can Okan Tickets to Shows: http://www.andrewtaylormanagement.com/gig-guide-neel-kolhatkar/ Twitter: https://twitter.com/neelkolhatkar Instagram: http://instagram.com/neelkolhatkar @neelkolhatkar Facebook: https://www.facebook.com/Neel.Kolhatkar94 Vine: Neel Kolhatkar Music: Darkest Child - Mysterious &amp; Creepy Music (Kevin MacLeod)",
                 "title":"#Equality - A Short Film by Neel Kolhatkar",
                 "url":"http://www.youtube.com/watch?v=XM-HJT8_esM",
                 "author_name":"Neel Kolhatkar",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FXM-HJT8_esM%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXM-HJT8_esM&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FXM-HJT8_esM%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/XM-HJT8_esM/hqdefault.jpg",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/neel30394"
              }
           },
           "score":705,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":308,
           "thumbnail":"http://b.thumbs.redditmedia.com/Dk3d3dTwTJE7fhdnHhITT04qEDTQDpbNeHTz6VJkcSw.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2stjt8/equality/",
           "name":"t3_2stjt8",
           "created":1421604594,
           "url":"https://www.youtube.com/watch?v=XM-HJT8_esM",
           "author_flair_text":null,
           "title":"#Equality",
           "created_utc":1421575794,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":705
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"vine.co",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fmtc.cdn.vine.co%2Fv%2Fvideos%2FA5084801-6F8F-4371-A784-8BD3E0ED909C-787-00000161C37E520D_17a54ba4a99.1.2.mp4%3FversionId%3DyAPI7TQY7fnGUkYB9xfO_17HrxPs_c2.&amp;src_secure=1&amp;url=https%3A%2F%2Fvine.co%2Fv%2FhBjWIrWUwv1&amp;image=https%3A%2F%2Fv.cdn.vine.co%2Fv%2Fthumbs%2FA5084801-6F8F-4371-A784-8BD3E0ED909C-787-00000161C37E520D_14eda0a0dcf.1.2.mp4.jpg%3FversionId%3Dv7.0e.wz.6qUzxMNKZE7rwKTvrIawTFR&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=video%2Fmp4&amp;schema=vine\" width=\"600\" height=\"600\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":600
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":null,
           "link_flair_text":"Loud",
           "id":"2ssle8",
           "gilded":0,
           "secure_media_embed":{

           },
           "clicked":false,
           "report_reasons":null,
           "author":"_TheBlackGuy",
           "media":{
              "type":"vine.co",
              "oembed":{
                 "provider_url":"http://vine.co/",
                 "description":"Watch jesse lopez's Vine taken on 17 June 2013. It has 352054 likes. Vine is the best way to see and share life in motion. Create short, beautiful, looping videos in a simple and fun way for your friends and family to see.",
                 "title":"Vine by jesse lopez",
                 "thumbnail_width":480,
                 "height":600,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fmtc.cdn.vine.co%2Fv%2Fvideos%2FA5084801-6F8F-4371-A784-8BD3E0ED909C-787-00000161C37E520D_17a54ba4a99.1.2.mp4%3FversionId%3DyAPI7TQY7fnGUkYB9xfO_17HrxPs_c2.&amp;src_secure=1&amp;url=https%3A%2F%2Fvine.co%2Fv%2FhBjWIrWUwv1&amp;image=https%3A%2F%2Fv.cdn.vine.co%2Fv%2Fthumbs%2FA5084801-6F8F-4371-A784-8BD3E0ED909C-787-00000161C37E520D_14eda0a0dcf.1.2.mp4.jpg%3FversionId%3Dv7.0e.wz.6qUzxMNKZE7rwKTvrIawTFR&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=video%2Fmp4&amp;schema=vine\" width=\"600\" height=\"600\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "author_name":"jesse lopez",
                 "version":"1.0",
                 "provider_name":"Vine",
                 "thumbnail_url":"https://v.cdn.vine.co/v/thumbs/A5084801-6F8F-4371-A784-8BD3E0ED909C-787-00000161C37E520D_14eda0a0dcf.1.2.mp4.jpg?versionId=v7.0e.wz.6qUzxMNKZE7rwKTvrIawTFR",
                 "type":"video",
                 "thumbnail_height":480,
                 "author_url":"https://vine.co/u/939372006267301888"
              }
           },
           "score":2879,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":388,
           "thumbnail":"http://b.thumbs.redditmedia.com/A-Een7oU4t1J1m2Kz761vewj1HyyjSyQidZWfh4PCes.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":"red",
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2ssle8/rip_jimmy/",
           "name":"t3_2ssle8",
           "created":1421576970,
           "url":"https://vine.co/v/hBjWIrWUwv1",
           "author_flair_text":null,
           "title":"R.I.P Jimmy",
           "created_utc":1421548170,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":2879
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtu.be",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FFwoI2luPN1k%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFwoI2luPN1k&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FFwoI2luPN1k%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Excelente muy bueeno!!",
                 "title":"Foo Fighters - Chile 2015 - Ole Ole Ole!! Chi Lee! CHILEE!",
                 "url":"http://www.youtube.com/watch?v=FwoI2luPN1k",
                 "type":"video",
                 "author_name":"Rodrigo Baeza",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FFwoI2luPN1k%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFwoI2luPN1k&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FFwoI2luPN1k%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FFwoI2luPN1k%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/iotengo"
              },
              "type":"youtu.be"
           },
           "link_flair_text":null,
           "id":"2ss5cn",
           "gilded":1,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FFwoI2luPN1k%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFwoI2luPN1k&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FFwoI2luPN1k%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"presence4presents",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Excelente muy bueeno!!",
                 "title":"Foo Fighters - Chile 2015 - Ole Ole Ole!! Chi Lee! CHILEE!",
                 "url":"http://www.youtube.com/watch?v=FwoI2luPN1k",
                 "type":"video",
                 "author_name":"Rodrigo Baeza",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FFwoI2luPN1k%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFwoI2luPN1k&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FFwoI2luPN1k%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/FwoI2luPN1k/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/iotengo"
              },
              "type":"youtu.be"
           },
           "score":4316,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":1040,
           "thumbnail":"http://b.thumbs.redditmedia.com/Z-midMzu-ozrutlJGQTyVzHvrROk-zSBY83G6WUltNA.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2ss5cn/foo_fighters_came_to_chile_on_thursday_the_crowd/",
           "name":"t3_2ss5cn",
           "created":1421567609,
           "url":"http://youtu.be/FwoI2luPN1k",
           "author_flair_text":null,
           "title":"Foo Fighters came to chile on thursday. The crowd was super hyped, singing along to everything, so they went with it",
           "created_utc":1421538809,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":4316
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtu.be",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIrhu6iTagFA&amp;src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FIrhu6iTagFA%3Ffeature%3Doembed&amp;type=text%2Fhtml&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "type":"youtu.be",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Samuel Ettinger on 2015-01-17.",
                 "title":"Burger King Ballin",
                 "url":"http://www.youtube.com/watch?v=Irhu6iTagFA",
                 "author_name":"Samuel Ettinger",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIrhu6iTagFA&amp;src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIrhu6iTagFA%3Ffeature%3Doembed&amp;type=text%2Fhtml&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "author_url":"http://www.youtube.com/user/bobthebob",
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "type":"video"
              }
           },
           "link_flair_text":null,
           "id":"2srdfw",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIrhu6iTagFA&amp;src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIrhu6iTagFA%3Ffeature%3Doembed&amp;type=text%2Fhtml&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "clicked":false,
           "report_reasons":null,
           "author":"FishiZPr0",
           "media":{
              "type":"youtu.be",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Samuel Ettinger on 2015-01-17.",
                 "title":"Burger King Ballin",
                 "url":"http://www.youtube.com/watch?v=Irhu6iTagFA",
                 "author_name":"Samuel Ettinger",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIrhu6iTagFA&amp;src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FIrhu6iTagFA%3Ffeature%3Doembed&amp;type=text%2Fhtml&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "author_url":"http://www.youtube.com/user/bobthebob",
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "type":"video"
              }
           },
           "score":3738,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":1045,
           "thumbnail":"default",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2srdfw/thieves_decided_to_go_to_burger_king_and_take/",
           "name":"t3_2srdfw",
           "created":1421552783,
           "url":"http://youtu.be/Irhu6iTagFA",
           "author_flair_text":null,
           "title":"Thieves decided to go to Burger King and take selfies with a stolen IPod. After I posted them to r/Houston someone sent me a link to their Facebook where they had posted this video from the same night.",
           "created_utc":1421523983,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":3738
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"theherald.com.au",
           "banned_by":null,
           "media_embed":{

           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":null,
           "link_flair_text":null,
           "id":"2stqu9",
           "gilded":0,
           "secure_media_embed":{

           },
           "clicked":false,
           "report_reasons":null,
           "author":"montyburnz258",
           "media":null,
           "score":131,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":52,
           "thumbnail":"http://b.thumbs.redditmedia.com/EpRKHuLpuz0o4YrM2DzKWIFCT7fToNsPMFcM4BA-Coc.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2stqu9/a_5_metre_great_white_shark_spotted_off_newcaste/",
           "name":"t3_2stqu9",
           "created":1421612982,
           "url":"http://www.theherald.com.au/story/2823839/shark-sighting-these-guys-might-need-a-bigger-boat-video/?cs=303#ooid=5nazR1cjqA2nUJZ2SMZowHK0QO8FVBA9",
           "author_flair_text":null,
           "title":"A 5 metre Great White shark spotted off Newcaste, Australia, prompting the closure of all beaches for the last 5 days.",
           "created_utc":1421584182,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":131
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtu.be",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FZFdu-HcyOx4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZFdu-HcyOx4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FZFdu-HcyOx4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Pana Fire Department's controlled burn of a house infested with cockroaches. October 30, 2010 Watch in 720p if you can.",
                 "title":"Roach House Burn",
                 "url":"http://www.youtube.com/watch?v=ZFdu-HcyOx4",
                 "type":"video",
                 "author_name":"puck025",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZFdu-HcyOx4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZFdu-HcyOx4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FZFdu-HcyOx4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FZFdu-HcyOx4%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/puck025"
              },
              "type":"youtu.be"
           },
           "link_flair_text":null,
           "id":"2stukn",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZFdu-HcyOx4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZFdu-HcyOx4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FZFdu-HcyOx4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"RAIKANA",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Pana Fire Department's controlled burn of a house infested with cockroaches. October 30, 2010 Watch in 720p if you can.",
                 "title":"Roach House Burn",
                 "url":"http://www.youtube.com/watch?v=ZFdu-HcyOx4",
                 "type":"video",
                 "author_name":"puck025",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FZFdu-HcyOx4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZFdu-HcyOx4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FZFdu-HcyOx4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/ZFdu-HcyOx4/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/puck025"
              },
              "type":"youtu.be"
           },
           "score":99,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":36,
           "thumbnail":"http://b.thumbs.redditmedia.com/YCSczGiN06JKizY3FPqjVNJccafdSBMjuuYstxUkb7c.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2stukn/burning_a_house_infested_with_roaches/",
           "name":"t3_2stukn",
           "created":1421616802,
           "url":"http://youtu.be/ZFdu-HcyOx4",
           "author_flair_text":null,
           "title":"Burning a house infested with roaches.",
           "created_utc":1421588002,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":99
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FWb096Dv8qlc%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWb096Dv8qlc&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FWb096Dv8qlc%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Gus McCormick on 2015-01-17.",
                 "title":"Gus's Magic Legs!",
                 "url":"http://www.youtube.com/watch?v=Wb096Dv8qlc",
                 "type":"video",
                 "author_name":"Gus McCormick",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FWb096Dv8qlc%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWb096Dv8qlc&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FWb096Dv8qlc%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FWb096Dv8qlc%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/channel/UCmI4L1dKVaw6AMUnMY-qMSQ"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2sr1sa",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FWb096Dv8qlc%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWb096Dv8qlc&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FWb096Dv8qlc%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"safetyinthenumbers",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Gus McCormick on 2015-01-17.",
                 "title":"Gus's Magic Legs!",
                 "url":"http://www.youtube.com/watch?v=Wb096Dv8qlc",
                 "type":"video",
                 "author_name":"Gus McCormick",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FWb096Dv8qlc%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWb096Dv8qlc&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FWb096Dv8qlc%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/Wb096Dv8qlc/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/channel/UCmI4L1dKVaw6AMUnMY-qMSQ"
              },
              "type":"youtube.com"
           },
           "score":3175,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":198,
           "thumbnail":"http://a.thumbs.redditmedia.com/I7aE-exs20lYK5Rc648Wdcp9mRVemort26JMwjhMNv4.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2sr1sa/reddit_you_helped_pay_for_my_parapelgic_fiances/",
           "name":"t3_2sr1sa",
           "created":1421546740,
           "url":"https://www.youtube.com/watch?v=Wb096Dv8qlc&amp;feature=youtu.be",
           "author_flair_text":null,
           "title":"Reddit! You helped pay for my Parapelgic Fiance's Magic Legs! Here is the update video! (Including his first time walking!)",
           "created_utc":1421517940,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":3175
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F4koLWPq2qDY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4koLWPq2qDY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F4koLWPq2qDY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Titus Velez on 2010-10-23.",
                 "title":"ridiculous edited for tv movie lines",
                 "url":"http://www.youtube.com/watch?v=4koLWPq2qDY",
                 "type":"video",
                 "author_name":"Titus Velez",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F4koLWPq2qDY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4koLWPq2qDY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F4koLWPq2qDY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F4koLWPq2qDY%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/titusvelez"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2sr5qi",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F4koLWPq2qDY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4koLWPq2qDY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F4koLWPq2qDY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"ChristoWhat",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Titus Velez on 2010-10-23.",
                 "title":"ridiculous edited for tv movie lines",
                 "url":"http://www.youtube.com/watch?v=4koLWPq2qDY",
                 "type":"video",
                 "author_name":"Titus Velez",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F4koLWPq2qDY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4koLWPq2qDY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F4koLWPq2qDY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/4koLWPq2qDY/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/titusvelez"
              },
              "type":"youtube.com"
           },
           "score":2806,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":308,
           "thumbnail":"http://a.thumbs.redditmedia.com/VfNXn7bxR4WtuWPHi4sxTLX7viuvJ5BfdOQO_XQdv44.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2sr5qi/its_always_funny_when_they_edit_swears_words_out/",
           "name":"t3_2sr5qi",
           "created":1421548732,
           "url":"https://www.youtube.com/watch?app=desktop&amp;persist_app=1&amp;v=4koLWPq2qDY",
           "author_flair_text":null,
           "title":"It's always funny when they edit swears words out of movies so they can go on TV.",
           "created_utc":1421519932,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":2806
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fq7NxL4II_vI%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dq7NxL4II_vI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fq7NxL4II_vI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"No part of this video was sped up.** Fortunately no one was seriously injured when a customer stepped on the gas instead of the brake and flew through the car wash at high speed. Notice the other customer leaving the vacuum area just seconds before this one crashes.",
                 "title":"High speed accident at Quick Quack Car Wash",
                 "url":"http://www.youtube.com/watch?v=q7NxL4II_vI",
                 "type":"video",
                 "author_name":"QuickQuackCarWash",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fq7NxL4II_vI%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dq7NxL4II_vI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fq7NxL4II_vI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fq7NxL4II_vI%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/QuickQuackCarWash"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2srd4a",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fq7NxL4II_vI%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dq7NxL4II_vI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fq7NxL4II_vI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"pelennor_fields",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"No part of this video was sped up.** Fortunately no one was seriously injured when a customer stepped on the gas instead of the brake and flew through the car wash at high speed. Notice the other customer leaving the vacuum area just seconds before this one crashes.",
                 "title":"High speed accident at Quick Quack Car Wash",
                 "url":"http://www.youtube.com/watch?v=q7NxL4II_vI",
                 "type":"video",
                 "author_name":"QuickQuackCarWash",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fq7NxL4II_vI%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dq7NxL4II_vI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fq7NxL4II_vI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/q7NxL4II_vI/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/QuickQuackCarWash"
              },
              "type":"youtube.com"
           },
           "score":2031,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":622,
           "thumbnail":"http://b.thumbs.redditmedia.com/IfLuDPVJVtVrP4kQXNIR1TGjtGw2saQEnrh06HibDIQ.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2srd4a/elderly_driver_confuses_pedals_speeds_through_car/",
           "name":"t3_2srd4a",
           "created":1421552622,
           "url":"http://www.youtube.com/watch?v=q7NxL4II_vI",
           "author_flair_text":null,
           "title":"Elderly driver confuses pedals, speeds through car wash destroying all equipment inside",
           "created_utc":1421523822,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":2031
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FlSr-IRS2X-w%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlSr-IRS2X-w&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FlSr-IRS2X-w%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Jack Hodgkiss on 2015-01-12.",
                 "title":"GTA Backup Has Arrived",
                 "url":"http://www.youtube.com/watch?v=lSr-IRS2X-w",
                 "type":"video",
                 "author_name":"Jack Hodgkiss",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FlSr-IRS2X-w%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlSr-IRS2X-w&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FlSr-IRS2X-w%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FlSr-IRS2X-w%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/channel/UCdd3vG-5fsoWP1lrKSpT32A"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2sqn3b",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FlSr-IRS2X-w%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlSr-IRS2X-w&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FlSr-IRS2X-w%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"hokiesAllDaWay",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Jack Hodgkiss on 2015-01-12.",
                 "title":"GTA Backup Has Arrived",
                 "url":"http://www.youtube.com/watch?v=lSr-IRS2X-w",
                 "type":"video",
                 "author_name":"Jack Hodgkiss",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FlSr-IRS2X-w%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlSr-IRS2X-w&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FlSr-IRS2X-w%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/lSr-IRS2X-w/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/channel/UCdd3vG-5fsoWP1lrKSpT32A"
              },
              "type":"youtube.com"
           },
           "score":4091,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":611,
           "thumbnail":"http://b.thumbs.redditmedia.com/WSKfB-osT-V5NBwHWMjsucIWXOESHetSByptfcEcDlA.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2sqn3b/gta_backup_has_arrived/",
           "name":"t3_2sqn3b",
           "created":1421538456,
           "url":"https://www.youtube.com/watch?v=lSr-IRS2X-w",
           "author_flair_text":null,
           "title":"GTA Backup Has Arrived",
           "created_utc":1421509656,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":4091
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F0O8NzMTVvYk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0O8NzMTVvYk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F0O8NzMTVvYk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Etapa #7 en el rally Dakar 2015 entre Iquiqui-Uyuni el coche Nº 356-El Martillo Racing conducido por Matthew Campbell, Luis Cesar Ramirez Jr. y Nicolas Alberto Ambriz Suarez en su Durango Jimco tuvieron un desafortunado accidente.Felizmente todos salieron solo con golpes leves pese a tremendo accidente.",
                 "title":"TREMENDO ACCIDENTE MATT CAMPBELL DAKAR 2015!!!",
                 "url":"http://www.youtube.com/watch?v=0O8NzMTVvYk",
                 "author_name":"Nicolas Kilibarda",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F0O8NzMTVvYk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0O8NzMTVvYk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F0O8NzMTVvYk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F0O8NzMTVvYk%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/nkilibard"
              }
           },
           "link_flair_text":null,
           "id":"2srdie",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F0O8NzMTVvYk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0O8NzMTVvYk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F0O8NzMTVvYk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"Lilday",
           "media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Etapa #7 en el rally Dakar 2015 entre Iquiqui-Uyuni el coche Nº 356-El Martillo Racing conducido por Matthew Campbell, Luis Cesar Ramirez Jr. y Nicolas Alberto Ambriz Suarez en su Durango Jimco tuvieron un desafortunado accidente.Felizmente todos salieron solo con golpes leves pese a tremendo accidente.",
                 "title":"TREMENDO ACCIDENTE MATT CAMPBELL DAKAR 2015!!!",
                 "url":"http://www.youtube.com/watch?v=0O8NzMTVvYk",
                 "author_name":"Nicolas Kilibarda",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F0O8NzMTVvYk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0O8NzMTVvYk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F0O8NzMTVvYk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/0O8NzMTVvYk/hqdefault.jpg",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/nkilibard"
              }
           },
           "score":1918,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":298,
           "thumbnail":"http://b.thumbs.redditmedia.com/d4HXmjCNdvJpenkYUxWWEweBypKSOmhI6ovN5DTVtqA.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2srdie/crashing_a_truck_at_110mph/",
           "name":"t3_2srdie",
           "created":1421552815,
           "url":"https://www.youtube.com/watch?v=0O8NzMTVvYk",
           "author_flair_text":null,
           "title":"Crashing a truck at 110mph",
           "created_utc":1421524015,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":1918
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dhrs8omWYN_0&amp;src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fhrs8omWYN_0%3Ffeature%3Doembed&amp;type=text%2Fhtml&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Benjamin Bennett on 2015-01-18.",
                 "title":"Sitting and Smiling #25",
                 "url":"http://www.youtube.com/watch?v=hrs8omWYN_0",
                 "author_name":"Benjamin Bennett",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dhrs8omWYN_0&amp;src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fhrs8omWYN_0%3Ffeature%3Doembed&amp;type=text%2Fhtml&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "author_url":"http://www.youtube.com/channel/UCqW54i24PGw1q7IxciRmgTA",
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "type":"video"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2stzy1",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dhrs8omWYN_0&amp;src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fhrs8omWYN_0%3Ffeature%3Doembed&amp;type=text%2Fhtml&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"glaue",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Benjamin Bennett on 2015-01-18.",
                 "title":"Sitting and Smiling #25",
                 "url":"http://www.youtube.com/watch?v=hrs8omWYN_0",
                 "author_name":"Benjamin Bennett",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dhrs8omWYN_0&amp;src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fhrs8omWYN_0%3Ffeature%3Doembed&amp;type=text%2Fhtml&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "author_url":"http://www.youtube.com/channel/UCqW54i24PGw1q7IxciRmgTA",
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "type":"video"
              },
              "type":"youtube.com"
           },
           "score":56,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":17,
           "thumbnail":"default",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2stzy1/this_guy_streams_himself_sitting_and_smiling_for/",
           "name":"t3_2stzy1",
           "created":1421621443,
           "url":"https://www.youtube.com/watch?v=hrs8omWYN_0",
           "author_flair_text":null,
           "title":"This guy streams himself sitting and smiling for hours. I'm not sure what to make of it. He's on right now.",
           "created_utc":1421592643,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":56
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FbicN4ryVQSI%3Ffeature%3Doembed%26start%3D60&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbicN4ryVQSI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FbicN4ryVQSI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Broadcast by: http://lordswarovski.blogspot.com/ http://www.facebook.com/lordswarovski?ref=profile http://twitter.com/lordswarovski http://www.myspace.com/lordswarovski",
                 "title":"Ice T 99 Problems",
                 "url":"http://www.youtube.com/watch?v=bicN4ryVQSI",
                 "type":"video",
                 "author_name":"LordSwarovski",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FbicN4ryVQSI%3Ffeature%3Doembed%26start%3D60&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbicN4ryVQSI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FbicN4ryVQSI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FbicN4ryVQSI%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/LordSwarovski"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2srn5z",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FbicN4ryVQSI%3Ffeature%3Doembed%26start%3D60&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbicN4ryVQSI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FbicN4ryVQSI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "clicked":false,
           "report_reasons":null,
           "author":"wqzu",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Broadcast by: http://lordswarovski.blogspot.com/ http://www.facebook.com/lordswarovski?ref=profile http://twitter.com/lordswarovski http://www.myspace.com/lordswarovski",
                 "title":"Ice T 99 Problems",
                 "url":"http://www.youtube.com/watch?v=bicN4ryVQSI",
                 "type":"video",
                 "author_name":"LordSwarovski",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FbicN4ryVQSI%3Ffeature%3Doembed%26start%3D60&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbicN4ryVQSI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FbicN4ryVQSI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/bicN4ryVQSI/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/LordSwarovski"
              },
              "type":"youtube.com"
           },
           "score":1293,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":217,
           "thumbnail":"http://a.thumbs.redditmedia.com/cnByffbLbn8d72H9Gomo8A0MVWFQ7g_y5Nao5aV1ly4.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2srn5z/apparently_icet_released_a_song_called_99/",
           "name":"t3_2srn5z",
           "created":1421557812,
           "url":"https://www.youtube.com/watch?v=bicN4ryVQSI#t=1m",
           "author_flair_text":null,
           "title":"Apparently Ice-T released a song called \"99 Problems\" eleven years before Jay-Z did, with the same chorus.",
           "created_utc":1421529012,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":1293
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F463PxspFNR4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D463PxspFNR4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F463PxspFNR4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"My brother thought it was a good idea to try and drink beer and smoke while infront of an Industrial Aircompressor.",
                 "title":"Redneck Bogan vs Industrial Aircompressor",
                 "url":"http://www.youtube.com/watch?v=463PxspFNR4",
                 "type":"video",
                 "author_name":"Moons Moments",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F463PxspFNR4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D463PxspFNR4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F463PxspFNR4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F463PxspFNR4%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/channel/UCpyKXI0utSb-QB9X3GnDeTg"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2sqozi",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F463PxspFNR4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D463PxspFNR4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F463PxspFNR4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"snapjenk",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"My brother thought it was a good idea to try and drink beer and smoke while infront of an Industrial Aircompressor.",
                 "title":"Redneck Bogan vs Industrial Aircompressor",
                 "url":"http://www.youtube.com/watch?v=463PxspFNR4",
                 "type":"video",
                 "author_name":"Moons Moments",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F463PxspFNR4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D463PxspFNR4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F463PxspFNR4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/463PxspFNR4/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/channel/UCpyKXI0utSb-QB9X3GnDeTg"
              },
              "type":"youtube.com"
           },
           "score":3173,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":473,
           "thumbnail":"http://a.thumbs.redditmedia.com/5XWuhTIDrEYAqa1pRBRWX7qZl7fWp3EApiCvd1mgUY0.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2sqozi/redneck_bogan_vs_industrial_aircompressor/",
           "name":"t3_2sqozi",
           "created":1421539639,
           "url":"https://www.youtube.com/watch?v=463PxspFNR4",
           "author_flair_text":null,
           "title":"Redneck Bogan vs Industrial Aircompressor",
           "created_utc":1421510839,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":3173
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Feb1vcaqAivY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Deb1vcaqAivY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Feb1vcaqAivY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"An amazing post I found on Tumblr, now in video form. Dramatic reading by KR-Y: http://kr-y.tumblr.com/post/51212214553 THIS ISN'T ME I ONLY MADE THE VIDEO",
                 "title":"Chicken Nugger",
                 "url":"http://www.youtube.com/watch?v=eb1vcaqAivY",
                 "author_name":"ninjamitsuki",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Feb1vcaqAivY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Deb1vcaqAivY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Feb1vcaqAivY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2Feb1vcaqAivY%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/ninjamitsuki"
              }
           },
           "link_flair_text":null,
           "id":"2ss1l3",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Feb1vcaqAivY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Deb1vcaqAivY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Feb1vcaqAivY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "clicked":false,
           "report_reasons":null,
           "author":"Bert306",
           "media":{
              "type":"youtube.com",
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"An amazing post I found on Tumblr, now in video form. Dramatic reading by KR-Y: http://kr-y.tumblr.com/post/51212214553 THIS ISN'T ME I ONLY MADE THE VIDEO",
                 "title":"Chicken Nugger",
                 "url":"http://www.youtube.com/watch?v=eb1vcaqAivY",
                 "author_name":"ninjamitsuki",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Feb1vcaqAivY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Deb1vcaqAivY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2Feb1vcaqAivY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/eb1vcaqAivY/hqdefault.jpg",
                 "type":"video",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/ninjamitsuki"
              }
           },
           "score":813,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":65,
           "thumbnail":"http://a.thumbs.redditmedia.com/DIj-dPkTUrVqu454rByFE5q75a4oBgWIJyauL_iRT40.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2ss1l3/chicken_nugger/",
           "name":"t3_2ss1l3",
           "created":1421565486,
           "url":"https://www.youtube.com/watch?v=eb1vcaqAivY",
           "author_flair_text":null,
           "title":"Chicken Nugger",
           "created_utc":1421536686,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":813
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F6ISjdl3E5iI%3Ffeature%3Doembed%26start%3D86&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6ISjdl3E5iI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F6ISjdl3E5iI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"This is absolutely insane, I thought he was gonna die!!",
                 "title":"Guy Jumps into Swimming Pool from a Hotel Balcony!!!",
                 "url":"http://www.youtube.com/watch?v=6ISjdl3E5iI",
                 "type":"video",
                 "author_name":"tmgiant123",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F6ISjdl3E5iI%3Ffeature%3Doembed%26start%3D86&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6ISjdl3E5iI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F6ISjdl3E5iI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F6ISjdl3E5iI%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/tmgiant123"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2stzet",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F6ISjdl3E5iI%3Ffeature%3Doembed%26start%3D86&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6ISjdl3E5iI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F6ISjdl3E5iI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "clicked":false,
           "report_reasons":null,
           "author":"Bicmex",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"This is absolutely insane, I thought he was gonna die!!",
                 "title":"Guy Jumps into Swimming Pool from a Hotel Balcony!!!",
                 "url":"http://www.youtube.com/watch?v=6ISjdl3E5iI",
                 "type":"video",
                 "author_name":"tmgiant123",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F6ISjdl3E5iI%3Ffeature%3Doembed%26start%3D86&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6ISjdl3E5iI&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F6ISjdl3E5iI%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/6ISjdl3E5iI/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/tmgiant123"
              },
              "type":"youtube.com"
           },
           "score":48,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":26,
           "thumbnail":"http://a.thumbs.redditmedia.com/V6GKt6iC-5o0OJ69gbOr0P5JAOG0TezpNQ4TEjKTUt0.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2stzet/the_scariest_jump_into_a_pool_from_a_balcony_ive/",
           "name":"t3_2stzet",
           "created":1421620976,
           "url":"https://www.youtube.com/watch?v=6ISjdl3E5iI#t=86",
           "author_flair_text":null,
           "title":"The scariest jump into a pool from a balcony I've ever seen",
           "created_utc":1421592176,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":48
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FNewiSNS-vLk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNewiSNS-vLk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FNewiSNS-vLk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"お屋敷のメイドさん100人が、ご主人様にアツアツの朝食を届けるため、 フライパンリレーに挑戦！ 使用したフライパンは油無しでも焦げつきにくいフレーバーストーン。 果たして、無事に届けることはできるのでしょうか。 100 Japanese maids challenge a frying pan relay to deliver a fresh and hot breakfast to their master!! The frying pans they use are called\"FlavorStone\", which is known for the non-stick technology even when used without cooking oil.Can they successfully bring the breakfast to the master??",
                 "title":"メイド100人 魅せパンリレー｜100 Sizzling Japanese maids in Action｜フレーバーストーン",
                 "url":"http://www.youtube.com/watch?v=NewiSNS-vLk",
                 "type":"video",
                 "author_name":"tvshop",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FNewiSNS-vLk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNewiSNS-vLk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FNewiSNS-vLk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FNewiSNS-vLk%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/tvshop"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2ssir2",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FNewiSNS-vLk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNewiSNS-vLk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FNewiSNS-vLk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"Riley1066",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"お屋敷のメイドさん100人が、ご主人様にアツアツの朝食を届けるため、 フライパンリレーに挑戦！ 使用したフライパンは油無しでも焦げつきにくいフレーバーストーン。 果たして、無事に届けることはできるのでしょうか。 100 Japanese maids challenge a frying pan relay to deliver a fresh and hot breakfast to their master!! The frying pans they use are called\"FlavorStone\", which is known for the non-stick technology even when used without cooking oil.Can they successfully bring the breakfast to the master??",
                 "title":"メイド100人 魅せパンリレー｜100 Sizzling Japanese maids in Action｜フレーバーストーン",
                 "url":"http://www.youtube.com/watch?v=NewiSNS-vLk",
                 "type":"video",
                 "author_name":"tvshop",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FNewiSNS-vLk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNewiSNS-vLk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FNewiSNS-vLk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/NewiSNS-vLk/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/tvshop"
              },
              "type":"youtube.com"
           },
           "score":475,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":130,
           "thumbnail":"http://b.thumbs.redditmedia.com/16AstkGo8H49w-dA9uKleUtAk7Ai06Ol21dUwSYtW9g.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2ssir2/100_japanese_maids_one_pancake/",
           "name":"t3_2ssir2",
           "created":1421575371,
           "url":"https://www.youtube.com/watch?feature=player_embedded&amp;v=NewiSNS-vLk",
           "author_flair_text":null,
           "title":"100 Japanese Maids ... One Pancake",
           "created_utc":1421546571,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":475
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FVdRXuyBOyow%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVdRXuyBOyow&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FVdRXuyBOyow%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"The weasel war dance is a colloquial term for a behavior of excited ferrets and weasels. In wild animals, it is speculated that this dance is used to confuse or disorient prey. In domestic animals, the war dance usually follows play or the successful capture of a toy or a stolen object and is commonly held to mean that the weasel is thoroughly enjoying itself.",
                 "title":"Ozzy the Weasel's War Dance.",
                 "url":"http://www.youtube.com/watch?v=VdRXuyBOyow",
                 "type":"video",
                 "author_name":"Frisco68",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FVdRXuyBOyow%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVdRXuyBOyow&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FVdRXuyBOyow%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FVdRXuyBOyow%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/Frisco68"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2stmcy",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FVdRXuyBOyow%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVdRXuyBOyow&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FVdRXuyBOyow%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"Sweetmilk_",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"The weasel war dance is a colloquial term for a behavior of excited ferrets and weasels. In wild animals, it is speculated that this dance is used to confuse or disorient prey. In domestic animals, the war dance usually follows play or the successful capture of a toy or a stolen object and is commonly held to mean that the weasel is thoroughly enjoying itself.",
                 "title":"Ozzy the Weasel's War Dance.",
                 "url":"http://www.youtube.com/watch?v=VdRXuyBOyow",
                 "type":"video",
                 "author_name":"Frisco68",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FVdRXuyBOyow%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVdRXuyBOyow&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FVdRXuyBOyow%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/VdRXuyBOyow/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/Frisco68"
              },
              "type":"youtube.com"
           },
           "score":89,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":20,
           "thumbnail":"http://a.thumbs.redditmedia.com/N2V-U4cyfiIVSYRGrAAAKMHr1ybXSTS0xWUSdflciZ8.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2stmcy/great_now_i_need_to_buy_a_weasel/",
           "name":"t3_2stmcy",
           "created":1421607765,
           "url":"https://www.youtube.com/watch?v=VdRXuyBOyow",
           "author_flair_text":null,
           "title":"Great. Now I need to buy a weasel.",
           "created_utc":1421578965,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":89
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F-VnAKGFo-rM%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-VnAKGFo-rM&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F-VnAKGFo-rM%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Louis C.K. Ingeniously pointing out Rational Common Themes and relating them to the bigger subjects, All whilst still bringing the funny, Doing what he does best, Stand up. My Channel: https://www.youtube.com/channel/UCGbevHjSS-8B9DYIQfTRkMg Chewed up Oh my god",
                 "title":"Louis C.K. GENIUS SNL Monologue [God,Men,and Hunger]",
                 "url":"http://www.youtube.com/watch?v=-VnAKGFo-rM",
                 "type":"video",
                 "author_name":"un1fy003 .",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F-VnAKGFo-rM%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-VnAKGFo-rM&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F-VnAKGFo-rM%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F-VnAKGFo-rM%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/un1fy003"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2sr2ih",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F-VnAKGFo-rM%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-VnAKGFo-rM&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F-VnAKGFo-rM%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"fuckedyourfarthole",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Louis C.K. Ingeniously pointing out Rational Common Themes and relating them to the bigger subjects, All whilst still bringing the funny, Doing what he does best, Stand up. My Channel: https://www.youtube.com/channel/UCGbevHjSS-8B9DYIQfTRkMg Chewed up Oh my god",
                 "title":"Louis C.K. GENIUS SNL Monologue [God,Men,and Hunger]",
                 "url":"http://www.youtube.com/watch?v=-VnAKGFo-rM",
                 "type":"video",
                 "author_name":"un1fy003 .",
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F-VnAKGFo-rM%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-VnAKGFo-rM&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F-VnAKGFo-rM%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/-VnAKGFo-rM/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/un1fy003"
              },
              "type":"youtube.com"
           },
           "score":1792,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":421,
           "thumbnail":"http://a.thumbs.redditmedia.com/Nu_UFpEr39e-1wFrzMP2wbwxtoVR26K-NnkrKFVuYR4.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2sr2ih/louie_cks_snl_monologue_is_so_great/",
           "name":"t3_2sr2ih",
           "created":1421547119,
           "url":"https://www.youtube.com/watch?v=-VnAKGFo-rM",
           "author_flair_text":null,
           "title":"Louie CK's SNL Monologue is so great",
           "created_utc":1421518319,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":1792
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"vimeo.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F116582567&amp;src_secure=1&amp;url=http%3A%2F%2Fvimeo.com%2F116582567&amp;image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F502983008_1280.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=vimeo\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "type":"vimeo.com",
              "oembed":{
                 "provider_url":"https://vimeo.com/",
                 "description":"These are 3-D printed sculptures designed to animate when spun under a strobe light. The placement of the appendages is determined by the same method nature uses in pinecones and sunflowers. The rotation speed is synchronized to the strobe so that one flash occurs every time the sculpture turns 137.5º-the golden angle.",
                 "title":"Fibonacci Zoetrope Sculptures",
                 "thumbnail_width":1280,
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F116582567&amp;url=http%3A%2F%2Fvimeo.com%2F116582567&amp;image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F502983008_1280.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=vimeo\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "author_name":"Pier 9",
                 "version":"1.0",
                 "provider_name":"Vimeo",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F502983008_1280.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "type":"video",
                 "thumbnail_height":720,
                 "author_url":"http://vimeo.com/pier9"
              }
           },
           "link_flair_text":null,
           "id":"2ssbvd",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F116582567&amp;url=http%3A%2F%2Fvimeo.com%2F116582567&amp;image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F502983008_1280.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=vimeo\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":338
           },
           "clicked":false,
           "report_reasons":null,
           "author":"DanTheButcher",
           "media":{
              "type":"vimeo.com",
              "oembed":{
                 "provider_url":"https://vimeo.com/",
                 "description":"These are 3-D printed sculptures designed to animate when spun under a strobe light. The placement of the appendages is determined by the same method nature uses in pinecones and sunflowers. The rotation speed is synchronized to the strobe so that one flash occurs every time the sculpture turns 137.5º-the golden angle.",
                 "title":"Fibonacci Zoetrope Sculptures",
                 "thumbnail_width":1280,
                 "height":338,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F116582567&amp;src_secure=1&amp;url=http%3A%2F%2Fvimeo.com%2F116582567&amp;image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F502983008_1280.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=vimeo\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "author_name":"Pier 9",
                 "version":"1.0",
                 "provider_name":"Vimeo",
                 "thumbnail_url":"http://i.vimeocdn.com/video/502983008_1280.jpg",
                 "type":"video",
                 "thumbnail_height":720,
                 "author_url":"http://vimeo.com/pier9"
              }
           },
           "score":435,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":42,
           "thumbnail":"http://b.thumbs.redditmedia.com/ZKPdSSQoWCrymbNfjEjL3dsFEuoCFoa7UoDXcqp0gRc.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2ssbvd/ready_to_get_mind_fucked_by_these_spinning/",
           "name":"t3_2ssbvd",
           "created":1421571311,
           "url":"https://vimeo.com/116582567",
           "author_flair_text":null,
           "title":"Ready to get mind fucked by these spinning sculptures?",
           "created_utc":1421542511,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":435
        }
     },
     {
        "kind":"t3",
        "data":{
           "domain":"youtube.com",
           "banned_by":null,
           "media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FdFQIR1mvxG4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdFQIR1mvxG4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdFQIR1mvxG4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "subreddit":"videos",
           "selftext_html":null,
           "selftext":"",
           "likes":null,
           "user_reports":[

           ],
           "secure_media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Gratia Forensi Equus on 2015-01-17.",
                 "title":"Dancing Cow at Brazil",
                 "url":"http://www.youtube.com/watch?v=dFQIR1mvxG4",
                 "type":"video",
                 "author_name":"Gratia Forensi Equus",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FdFQIR1mvxG4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdFQIR1mvxG4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdFQIR1mvxG4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdFQIR1mvxG4%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/lacaio2"
              },
              "type":"youtube.com"
           },
           "link_flair_text":null,
           "id":"2ss2yn",
           "gilded":0,
           "secure_media_embed":{
              "content":"&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FdFQIR1mvxG4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdFQIR1mvxG4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdFQIR1mvxG4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
              "width":600,
              "scrolling":false,
              "height":450
           },
           "clicked":false,
           "report_reasons":null,
           "author":"cococof2",
           "media":{
              "oembed":{
                 "provider_url":"http://www.youtube.com/",
                 "description":"Uploaded by Gratia Forensi Equus on 2015-01-17.",
                 "title":"Dancing Cow at Brazil",
                 "url":"http://www.youtube.com/watch?v=dFQIR1mvxG4",
                 "type":"video",
                 "author_name":"Gratia Forensi Equus",
                 "height":450,
                 "width":600,
                 "html":"&lt;iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FdFQIR1mvxG4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdFQIR1mvxG4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdFQIR1mvxG4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube\" width=\"600\" height=\"450\" scrolling=\"no\" frameborder=\"0\" allowfullscreen&gt;&lt;/iframe&gt;",
                 "thumbnail_width":480,
                 "version":"1.0",
                 "provider_name":"YouTube",
                 "thumbnail_url":"http://i.ytimg.com/vi/dFQIR1mvxG4/hqdefault.jpg",
                 "thumbnail_height":360,
                 "author_url":"http://www.youtube.com/user/lacaio2"
              },
              "type":"youtube.com"
           },
           "score":526,
           "approved_by":null,
           "over_18":false,
           "hidden":false,
           "num_comments":76,
           "thumbnail":"http://b.thumbs.redditmedia.com/Z8AN65iYcZzxQ1ti8rKYJLYcrOtuGyToYZOmizJqdwk.jpg",
           "subreddit_id":"t5_2qh1e",
           "edited":false,
           "link_flair_css_class":null,
           "author_flair_css_class":null,
           "downs":0,
           "saved":false,
           "stickied":false,
           "is_self":false,
           "permalink":"/r/videos/comments/2ss2yn/the_dancing_cow_is_at_it_again/",
           "name":"t3_2ss2yn",
           "created":1421566233,
           "url":"https://www.youtube.com/watch?v=dFQIR1mvxG4",
           "author_flair_text":null,
           "title":"The dancing cow is at it again.",
           "created_utc":1421537433,
           "distinguished":null,
           "mod_reports":[

           ],
           "visited":false,
           "num_reports":null,
           "ups":526
        }
     }
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  };
})

.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
});
