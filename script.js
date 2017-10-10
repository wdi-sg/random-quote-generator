$(function () {

  $('#quoteBtn').on('click', function () {
    var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/'

    var myHeader = {
      'X-Mashape-Key': 'p7rwmyfr7zmshPiw53o33MEVC4qDp1jQyqsjsnsJcmGMh9bOlr',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }

    var myInit = {
      method: 'POST',
      headers: myHeader,
      mode: 'cors',
      cache: 'default'
    }

    var apiCall = fetch(url, myInit)

// console.log(apiCall)

  apiCall
    .then((response) => { // when we got response back
      console.log('response received')
      return response.json()
    })
    .then((data) => {
      displayQuote(data)
    })
    .catch((err) => {
      console.log('error happened somewhere')
      console.log(err)
    })

    function displayQuote (data) {
      var $quote = $('#quote')
      var $author = $('#author')
      var $category = $('#category')
      $quote.empty()
      $author.empty()
      $category.empty()

      var $quotes = $('<h3>')
      $quotes.text(data.quote)

      var $authors = $('<p>')
      $authors.text(data.author)

      var $categories = $('<p>')
      $categories.text(data.category)

  // $quote.append($quotes, $authors, $categories)
      $quote.append($quotes)
      $author.append($authors)
      $category.append($categories)
    }
  })

  $('#tweetBtn').on('click', function () {
  // function tweetQuote() {
    var twitterURL = 'https://twitter.com/intent/tweet?&text="'
    var quote = $('#quote').text()
    var author = $('#author').text()
    var category = $('#category').text()
    var twitter = twitterURL += quote + '" - ' + author + ': ' + category
    // $('#tweet').attr('href', twitterURL);
    window.open(twitter, '_blank')
  // }
  })
})
