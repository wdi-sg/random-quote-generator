$(function () {

  var myInit = { method: 'POST',
                headers: {'X-Mashape-Key': 'eAh6YOxdcdmshtwxKn7RFzo2o2dcp1hgNDejsnVSojB7lp4A4A'
    }
  }
  var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1'
  // var myRequest = new Request(url, myInit);
  // var apiCall = fetch(myRequest);
  var div = $('div');
  var $button = $('button');

  var res = response => {
    console.log('response received')
    return response.json()
  }
  var errors = err => {
    console.log('error happened somewhere')
    console.log(err)
  }

  function randomQuote(data) {
    var quote = data.quote
    var author = data.author
    var $p = $('<p>').text(quote)
    var $h3 = $('<h3>').text(author)
    var container = $('.container')
    div.append($h3)
    div.append($p)
    container.append(div)
  }

  $button.on('click', () => {
    var myRequest = new Request(url, myInit);
    var apiCall = fetch(myRequest);
    apiCall
    .then(res)
    .then(randomQuote)
    .catch(errors)
  })


})
