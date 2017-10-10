$(function () {
  $('#button').on('click', randomiseQuote)

  function randomiseQuote() {
    var requestApi = fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies+and+famous&count=1',
      {method: 'POST',
        headers: new Headers({
          'X-Mashape-Key': 'akWsSBApPNmshKDzi6hnIxnTnhpCp1QDDbijsnG63ow6St7aWJ',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        })
      })
    console.log(requestApi)
    // Now use it!
    requestApi
    .then((response) => { // when we got response bacl
     console.log('response received')
    // console.log(response.json())
     return response.json()
    })
    .then(randomGen)
    .catch((err) => { // if fail run this part
    console.log('error happened somewhere')
    console.log(err)
     /* handle response */
   })
  }

  function randomGen (data) {
  //  console.log(data.author)
   console.log(data.category)
     var $p = $('<p>')
     var $quoteBox = $('.quotebox')
     $('p').text(data.quote + " - " + data.author)
     $quoteBox.append($p)
     $p.remove();
   }


})
