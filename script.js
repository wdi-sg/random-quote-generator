$(function () {
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1'
  var init = {
    method: 'POST',
    headers: { 'X-Mashape-Key': 'xONQa6hJi8mshG1BCCGIKmeiCnjNp1UOu2Bjsn7BkDSLsaR4Ua' }
  }
  var myRequest = new Request(url, init)
  // api call
  var apiCall = fetch(myRequest)

  // functions
  var returnResponse = response => {
    console.log('response received')
    return response.json()
  }

  var updateRandomQuote = data => {
    var $h2 = $('h2')
    $h2.text(data.quote)
  }

  var logError = error => {
    console.log(error)
  }

  // logic
  apiCall.then(returnResponse)
  .then(updateRandomQuote)
  .catch(logError)
})
