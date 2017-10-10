$(function() {

  $('.btnRandom').on('click', function random (){

  var myHeaders = {"X-Mashape-Key": "b2NSuJeuRAmshGUtkeEbSCR1i2kFp1CZqkzjsnS95psHNIgRYC",
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"}

  var myInit = { method: 'POST',
               headers: myHeaders
               };

  var getQuote = fetch('https://andruxnet-random-famous-quotes.p.mashape.com/', myInit)

    getQuote
    .then((response) => {
    return response.json()
    })

    .then(randomQuotes)

  function randomQuotes(data){
    // var $quoteText = $('<p>')
    // $quoteText.append($quotes)
    var $quotes = data.quote
    $('p').text($quotes)
    }

  })

  $('select').on('change', function (){
  console.log(this.value);
  if(this.value === '1'){
    var url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=233061e0313b48f0a7da344179808c62'
    console.log('techcrunch chosen');
  }
  if(this.value === '2'){
    var url = 'https://newsapi.org/v1/articles?source=buzzfeed&apiKey=233061e0313b48f0a7da344179808c62'
    console.log('buzzfeed chosen');
  }
  if(this.value === '3'){
    var url = 'https://newsapi.org/v1/articles?source=bloomberg&apiKey=233061e0313b48f0a7da344179808c62'
    console.log('bloomberg chosen');
  }

$('ul').empty()

var apiCall = fetch(url)

console.log('api call')
console.log(apiCall)
console.log(url);
apiCall
.then((response) => { // when we got response back
  // console.log('response received')
  // console.log(response.json())
  return response.json()
})

.then(writeLiEveryArticles)

.catch((err) => {
  console.log('error happened somewhere')
  console.log(err)
})

//dom manipulating part
function writeLiEveryArticles(data){
  // loop the data.articles

  for (var i = 0; i < data.articles.length; i++) {
    //title
    var $li = $('<li>')
    var $title = data.articles[i].title
    var $liTitle = $li.append($title)
    var $ulTitle = $('ul').append($liTitle)

    var $getImg = data.articles[i].urlToImage
    var $img = $(`<img src= ${$getImg} style= width:250px; height:250px; >`)
    var $imgAppend = $('ul').append($img)

    var $p = $('<p>')
    var $description = data.articles[i].description
    var $toParagraph = $p.append($description)
    var $descriptionAppend = $('ul').append($toParagraph)

    var $getLink = data.articles[i].url
    var $link = $(`<a href=${$getLink}>${$getLink}</a>`)
    var $linkAppend = $('ul').append($link)
  }


}
})


})
