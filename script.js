// find out how to use fetch to make a post request using API
//change h1 html to random quotes
var quoteApi = fetch("https://andruxnet-random-famous-quotes.p.mashape.com/",
{method: 'POST',
headers: new Headers({'X-Mashape-Key': 'Wunx69knbMmshCiFtYgfvfDBT20Pp1dWmEHjsnwZu4VK6QCjWR',
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    })
                  })


console.log(quoteApi)
quoteApi
.then((response) => {
  console.log('response received')
  return response.json()
})
.catch((err) => { //if fail run this part
 console.log('error happened somewhere');
 console.log(err)
 })

.then(inputApiIntoSite)

function inputApiIntoSite(data) {
  // console.log(data)
  // console.log(data.author)
  // console.log(data.quote)
  $h1new = $('<h1>')
  $h1new.text(data.quote + " -" + data.author)
  $('body').append($h1new)
}
