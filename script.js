$(function() {
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1'
  Headers = new Headers({
    'X-Mashape-Key': 'FvmUWI6rgrmshqm8cX2yYkkZrf0Cp1emuubjsn258j1p5qa90K',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
});
$('button').on('click', call)
  function call() {

    var apiCall = fetch(url, { method: 'post',
    headers: Headers
    })

    console.log('api call')
    console.log(apiCall)

    apiCall
    .then((response) => { // when we got response back
      console.log('response received')
      return response.json()
    })
    .then(genRandomQuote)
    .catch((err) => {
      console.log('error happened somewhere')
      console.log(err)
    })

  }

    function genRandomQuote (data) {
      console.log(data)
        $('h2').text(data.quote)

    }


})
