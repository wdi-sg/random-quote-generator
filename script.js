$(function() {
  var ul = $('ul');
  var myHeaders = new Headers({
   "X-Mashape-Key": "V6MbXJDZysmsh47slacZuCcATTLap1OEWHjjsnT7mLwcOTxTAU"
  });

  var myInit = { Method: 'POST',
                 headers: myHeaders
  };
  var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10"

  $('button').on('click', function() {
     fetch(url, myInit)
       .then((response) => {
        //  console.log('fetched')
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
     })
       .catch((err) => {
        //  console.log(err)
       })
  })


});
