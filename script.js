$(function() {
//method 1
// var requestApi =fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1',
// {method: 'POST',
//  headers: new Headers({
//  'X-Mashape-Key': 'JxxdjKpeB9msh4B3z1YtAwSqzinzp1So7WFjsnQ560bb79djEx',
//  'Content-Type': 'application/x-www-form-urlencoded',
//  'Accept': 'application/json'
//  })
// })
//
// console.log(requestApi)
// requestApi
// .then((response) => { //when we got response bacl
// console.log('response received');
// // console.log(response.json())
// return response.json()
// })
// .then(writeLiEveryArticle)
// .catch((err) => { //if fail run this part
//  console.log('error happened somewhere');
//  console.log(err)
//  /* handle response */
//
// })
// function writeLiEveryArticle(data) {
// console.log(data);
//
// }
// })


//method 2
  let myKey = {
    method: "POST",
    headers: {"X-Mashape-Key": "JxxdjKpeB9msh4B3z1YtAwSqzinzp1So7WFjsnQ560bb79djEx"}
  }

  let randomQuote = fetch(
    "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1",
    myKey
  )

  const updateRandomQuote = data => {
    console.log(data)
    $h2 = $("h2")
    $h2.text(data.quote)

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
