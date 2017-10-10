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


})
