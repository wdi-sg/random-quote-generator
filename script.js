$(function () {

  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/'
  var quoteText = ""
  var quoteAuthor = ""
  var headers = new Headers()

  headers = {
    'X-Mashape-Key': 'B9R2k43o8dmshpgKEIc90NRAPN88p1dJ9wLjsnueovKDDWMdH1'
  }

  var apiCall = fetch(url, {
                      method: 'POST',
                      headers: headers})

  console.log('api call')
  console.log(apiCall)

  // // ------------- start of success function ------------- //

  apiCall
  .then((response) => { // when we get response back
    // console.log('response received')
    // console.log(response.json())
    return response.json()
  })
  .then((data) => { //because this is doing the same thing as function writeLiEveryArticle(data)
     console.log('data processed and converted to json')
     console.log(data)
     var $p = $('p')
     $p.text(data.quote)
  })

  // // ------------- end of success function ------------- //

  // // ------------- start of fail function ------------- //

  .catch((err) => {
    console.log('error happened somewhere')
    console.log(err)
  })

  // ------------- end of fail function ------------- //

})
