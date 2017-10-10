$(function(){

  $(".quoteButton").on("click",function() {
    

    var myInit = { method: 'POST',
      headers: {
        'X-Mashape-Key': 'SPJC93KUGAmshJA6zzRMzYDjXoKRp1j1dRwjsnL0wdwfZyjVKb'
      }
    }

    fetch('https://andruxnet-random-famous-quotes.p.mashape.com/', myInit)
    .then(function (response) {
      return response.json()
    }).then(data=>{
      replaceQuote(data)
      twttr.widgets.createShareButton(
            '/',
            document.getElementById('container'), {
              size: 'large',
              text: data.quote +"- " + data.author
            }
          )
    })
    .catch(err=>{
      console.log(err);
    })

    function replaceQuote(data){
      $(".quote").empty()
      // var index = Math.floor(Math.random()*100)
        console.log(data)
        var quoteDiv = $("<h1>").text("Quote: "+data.quote)
        var name = $("<p>").text("Author: " +data.author)
        var cat = $("<p>").text("Category: " + data.category)
        $(".quote").append(quoteDiv)
        $(".quote").append(name)
        $(".quote").append(cat)

    }
    })

})
