$(function () {
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1'
  var init = {
    method: 'POST',
    headers: { 'X-Mashape-Key': 'xONQa6hJi8mshG1BCCGIKmeiCnjNp1UOu2Bjsn7BkDSLsaR4Ua' }
  }
  var apiCall = fetch(url, init)

  var updateRandomQuote = data => {
    var $h2 = $('h2')
    $h2.text(data.quote)
  }

  apiCall.then((response) => {
    console.log('response received')
    return response.json()
  })
  .then(updateRandomQuote)
  .catch((error) => {
    console.log(error)
  })
})
