

$('button').on('click',function(){

  var apiCall = fetch('https://andruxnet-random-famous-quotes.p.mashape.com/', {
    method: "POST",
    headers: {"X-Mashape-Key": 'tCaKCH3PLNmshllrY4Js9pw14VyXp12WHT1jsnO7Jq1NoEket8',
    "Content-Type": 'application/x-www-form-urlencoded',
    'Accept': 'application/json'},
  });

apiCall
.then((response)=>{//when we get response back
  console.log('response received')
  // console.log(response.json())
  return response.json()
})
.then(randomQuote)
.catch((err)=>{
  console.log(err)
})

function randomQuote(data){
  console.log(data)

  quote = data.quote
  console.log(quote)
  $('h2').text(quote)
}

})
