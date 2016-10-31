var newsData = function() {
  var url = 'http://api.rss2json.com/v1/api.json?rss_url=http://feeds.feedburner.com/TechCrunch/';
  var result = [];

  $.get(url).done(function(data){
    $.each(data.items, function(index, value){
      result.push({
        title: value.title,
        mention_name: value.author,
        picture: value.thumbnail,
        link: value.link,
        description: value.description,
        date: value.pubDate
        });
      });
  });
  return {news: result};
}

Vue.component('news-card', {
  template: '#news-card-template',
  props: ['item']
})

var vm = new Vue({
  el: '#example-2',
  data: newsData
})