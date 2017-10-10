
$('select').change(function(){


  var source = $('select option:selected').text()
  var url = 'https://newsapi.org/v1/articles?source=' + source +'&apiKey=43e72e768c96496a9d0d20b68ce97391';
  $('ul').empty()


  var apiCall =  fetch(url)
  console.log('api Call')
  console.log(apiCall)

apiCall
.then((response)=>{//when we get response back
  console.log('response received')
  // console.log(response.json())
  return response.json()
})
.then(writeLiEveryArticle)
.catch((err)=>{
  console.log(err)
})

function writeLiEveryArticle(data){
  //loop the data.article
  var articles = data.articles
  var $ul =$('ul')
  var $button = $('<button>')

console.log(articles)

  articles.map((article) => {
    var $title = $('<h3>')
    $title.text(article.title)
    var $content = $('<p>')
    $content.text(article.description)
    var $img = $('<img>')
    $img.attr('src',article.urlToImage )

    var $li = $('<li>')
    $li.append($title, $content, $img)
    $ul.append($li)

  })



  // articles.forEach(function(article){
  //   $('ul').append("<li><h2>" + article.title)
  //   $('ul').append("<p>" + article.description)
  //   $('ul').append("<img src=" +article.urlToImage +">")
  // })

}
})
