$(function() {
  // var $input = $('#input1')
  // var song = $input.val
  // var song = "hello"
  // console.log(song);
  var url = 'https://instatunes.p.mashape.com/search'
  var myHeaders = new Headers({
    'X-Mashape-Key': 'GhlVH0tapJmshXdUM8M5oCgL2vG0p1nFlhrjsnuUkb3fyGMux9',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
    "title":"hello",
  });
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
    .then(showSong)
    .catch((err) => {
      console.log(err);
    })

  function showSong(song) {
    console.log(song);
    var $quotes = $('#other')
    // var $body = $('body')
    // var $newULList = $('<ul>')

    // songs.forEach(song => {
      // var $newListItem = $('<li>')
      var $link = $('<a>')
      var $newP = $('<h3>')
      // var $newAuth = $('<p>')
      $link.attr('href', song.stream_link)
      $newP.text(song.title)
      // $newAuth.text('by ' + joke.author)
      // $newListItem.append($newP, $link)
      // $newULList.append($newListItem)
    // })
    // $body.append($newULList)
    $quotes.append($newP, $link)
    // console.log(joke);
    // console.log(joke.quote);
    // console.log(joke.author);
    // console.log(joke.category);
  }

});
