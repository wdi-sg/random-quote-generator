$(function () {
  var $button = $('.changeQuote')
  $button.on('click', () => {
    var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/'

    var myHeaders = {
      'X-Mashape-Key': 'yP5t7cnOWymshbzm33vuhhlDBQimp1BXfKPjsn20GUMqM3rOJp',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }

    // jhk
    var myInit = { method: 'POST',
      headers: myHeaders
    }

    var apiCall = fetch(url, myInit)

apiCall
.then((response) => { // when we get response back
  console.log('response received')
 // console.log(response.json())
  return response.json()
})
.then((data) => {
  randomQuote(data)
 // console.log('data processed and converted into json')
})
.catch((err) => {
  console.log('error happened somewhere')
})

    function randomQuote (data) {
      $('.quotes').empty()
      var $randomQuote = $('<h1>').text(data.quote)
      var $randomAuthor = $('<h3>').text(data.author)
      var $randomCategory = $('<h3>').text(data.category)
      $('.quotes').append($randomQuote, $randomAuthor, $randomCategory)
    }
  })


  var $selectAgency = $('.choice')
  $selectAgency.on('change', function() {
  console.log(this);
  var value = $(this).val()
  console.log(value);
  url = `https://newsapi.org/v1/articles?source=${value}&apiKey=b6f7afc967cf4680832e7694d99b4e57`
  });

  var url = 'https://newsapi.org/v1/articles?source=buzzfeed&apiKey=b6f7afc967cf4680832e7694d99b4e57'

  var apiCall = fetch(url)

apiCall
.then((response) => { // when we get response back
  console.log('response received')
  // console.log(response.json())
  return response.json()
})

.then((data) => {
  writeLiEveryArticle(data)
  // console.log('data processed and converted into json')
  // console.log(data)
})

.catch((err) => {
  console.log('error happened somewhere')
  console.log(err)
})

  function writeLiEveryArticle (data) {

    var articles = data.articles
    articles.forEach((element) => {
      var $li = $('<li>').text(element.title)
      var $p = $('<p>').text(element.description)
      var $image = $('<img>').attr('src', element.urlToImage)
      $('ul').append($li, $p, $image)
    })
  }
})
