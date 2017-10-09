$(function() {
  let myKey = {
    method: "POST",
    headers: {
      "X-Mashape-Key": "6qClgHZ6abmshFPEOwtnIL5Jbn7tp1bbv0Ijsn9JINTyyizALz"
    }
  }

  const $getFamous = $(".getFamous")
  const $getMovie = $(".getMovie")

  const updateRandomQuote = data => {
    let $h2 = $("<h2>")
    let $author = $("<p>")
    let $category = $("<p>")
    $div = $("div")
    $h2.text(data.quote)
    $author.text("by: " + data.author)
    $category.text("category: " + data.category)
    $div.append($h2)
    $div.append($author)
    $div.append($category)
  }

  const getRandomQuote = type => {
    let url = `https://andruxnet-random-famous-quotes.p.mashape.com/?cat=${type}&count=1`
    let randomQuote = fetch(url, myKey)
    randomQuote
      .then(response => {
        return response.json()
      })
      .then(updateRandomQuote)
      .catch(err => {
        console.log(err)
      })
  }

  getRandomQuote("movie")
  getRandomQuote("famous")

  $getFamous.on("click", () => {
    getRandomQuote("famous")
  })
  $getMovie.on("click", () => {
    getRandomQuote("movie")
  })
})
