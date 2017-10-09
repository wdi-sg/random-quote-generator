//fetch using post request
//h1 random quote
$(function() {
  let myHeaders = new Headers()

  myHeaders.append(
    "X-Mashape-Key",
    "6qClgHZ6abmshFPEOwtnIL5Jbn7tp1bbv0Ijsn9JINTyyizALz"
  )
  let myKey = {
    method: "POST",
    headers: myHeaders
  }
  let randomQuote = fetch(
    "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1",
    myKey
  )

  const updateRandomQuote = data => {
    console.log(data)
    $h2 = $("h2")
    $div = $("div")
    $author = $("<p>")
    $category = $("<p>")
    $h2.text(data.quote)
    $author.text("by: " + data.author)
    $category.text("category :" + data.category)
    $div.append($author)
    $div.append($category)
  }

  randomQuote
    .then(response => {
      return response.json()
    })
    .then(updateRandomQuote)
    .catch(err => {
      console.log(err)
    })
})
