
var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/'

var myInit = {
  method: 'POST',
  headers: {'X-Mashape-Key': 'BbCyhX2jqUmshKKzBSgWHCxNEiDgp1g0YQZjsnDqcCpfK4Arto',
  }
}

$('button').on('click', () => {
  apiCall = fetch(url, myInit)
  apiCall
  .then((response) => {
    return response.json()
  })
  .then(createDiv)
  .catch((err) => {
    console.log('something went wrong')
  })
})

function createDiv(data) {
  console.log(data)
  var h3 = $('<h3>')
  var p = $('<p>')
  var poem = $('.poem')
  h3.text(data.author)
  p.text(data.quote)
  poem.append(h3)
  h3.append(p)
  
}
