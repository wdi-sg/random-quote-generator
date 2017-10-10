$(function() {
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=3'
  var myHeaders = new Headers({
    'X-Mashape-Key': 'GhlVH0tapJmshXdUM8M5oCgL2vG0p1nFlhrjsnuUkb3fyGMux9',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  });
  //fix this.
  var myInit = {
    method: 'POST',
    headers: myHeaders
  }
  var apiCall = fetch(url, myInit)

  apiCall
    .then((response) => {
      // console.log(response.json()) //also async
      return response.json()
    })
    .then(writeJoke)
    .catch((err) => {
      console.log(err);
    })

  function writeJoke(jokes) {
    var $quotes = $('#quotes')
    var $body = $('body')
    var $newULList = $('<ul>')

    jokes.forEach(joke => {
      var $newListItem = $('<li class="article title">')
      var $newP = $('<h3>')
      var $newAuth = $('<p>')
      $newP.text(`"${joke.quote}"`)
      $newAuth.text('by ' + joke.author)
      $newListItem.append($newP, $newAuth)
      $newULList.append($newListItem)
    })
    // $body.append($newULList)
    $quotes.append($newULList)
    // console.log(joke);
    // console.log(joke.quote);
    // console.log(joke.author);
    // console.log(joke.category);
  }

});
