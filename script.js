var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/'


var myheader = {
  "X-Mashape-Key": "duBmMvCUngmshDxBMTxdzCartXIGp1G9qSSjsnqDC6TC4SH1x6",
  "Content-Type":  "application/x-www-form-urlencoded",
  'Accept': 'application/json'
  }

var getUrl = {
    method: "POST",
    headers: myheader
}

$('button').on('click',resetQuote)

function resetQuote (){
  //$('h2').remove()
  var getQuote = fetch(url, getUrl)

  getQuote
  .then((response)=>{ // when we got response
    console.log('response received')
    return response.json()
  })
  .then (getRandomQuotes)
  .catch((err)=>{
    console.log('error occured somewhere')
  })


  function getRandomQuotes (data){
    var quote = data.quote
    $('h2').text(quote)
  }

}
