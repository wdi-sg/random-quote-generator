$(function () {
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/'

  // var apiCall = fetch(url, {method:'post'}, {header: xhr.setRequestHeader("X-Mashape-Key", "YOURKEY")})

  var headerKey = new Headers()
  headerKey.append('X-Mashape-Key', 'jf3BSb5fISmshQPCGNR928NR0cKqp1T8hJXjsnzqXznBkpIqIL')

  var init = {method: 'POST',
    headers: headerKey}

  // console.log('api call')
  // console.log(apiCall)

  var apiCall = fetch(url, init)

  apiCall
  .then((response) => { // when we get a response back
  // console.log('response received')
  // console.log(response.json())

    return response.json()
  })

  // .then((data)
  .then(data => {
    console.log('data processed and converted into json')
    console.log(data)

    var $title = $('h1')

    $title.text(data.quote)
  })

  .catch((err) => {
    console.loh(err)
  })
})

  // function writeLiEveryArticle (data) {
