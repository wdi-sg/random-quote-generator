$(function(){

  var myHeader = new Headers({
    "X-Mashape-Key": "c4vYgfOINAmshnnJighZi26DLxMcp1NUYY7jsnRkY6RVXbKLHY",
  });
// console.log(myHeader);
  var myInit = {
    method: 'POST',
    headers: myHeader
  };

  var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10"

  var ul = $('ul');
  var $button = $('button')

  $button.on('click', function(){
    fetch(url, myInit)
    .then((response) => {  //when we get response back
      // console.log('response received')
      // console.log(response.json())
      return response.json()
    })
    .then(data => {
      data.forEach(function (element) {
        var quote = element.quote;
        var author = element.author;
        var $p = $('<p>').text(`Author: ${author}`)
        var $li = $('<h3> <li>').text(`Quote: ${quote}`);
        ul.append($li, $p)
      })
      // console.log('data processed and converted into json');
      // console.log(data);
    })
    .catch((err) => {
      // console.log('error happened somewhere')
      // console.log(err);
    })
  });













});
