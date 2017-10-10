$(function(){

//console.log(requestApi)
//Now use it!
$('button').on('click',randomQuotes)

function randomQuotes(){
var requestApi = fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1',
{method: 'POST',
headers: new Headers({
  'X-Mashape-Key': 'akWsSBApPNmshKDzi6hnIxnTnhpCp1QDDbijsnG63ow6St7aWJ',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'application/json'
})
})
requestApi
  .then((response) => { //when we got response bacl
  console.log('response received');
  // console.log(response.json())
  return response.json()
  })
  .then(writeLiEveryArticle)
  .catch((err) => { //if fail run this part
    console.log('error happened somewhere');
    console.log(err)
    /* handle response */
  })
}


function writeLiEveryArticle(data) {
  console.log(data);
  var $h2 = $('h2')
  $h2.text(data.quote)

}


})
