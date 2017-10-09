$(function() {

var url = "https://andruxnet-random-famous-quotes.p.mashape.com/"

var myHeaders = { "X-Mashape-Key": "E7mOF7cXB5mshIUXlwOCIwe9Inw2p123ulxjsnIYRl7DXaKEHC",
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json" }

var myInit = { method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' }

var apiCall = fetch(url, myInit)

apiCall
.then((response)=> {
 return response.json()
})
.then((data)=> {
 console.log('data is processed and converted into json')
 console.log(data)

 $('.quote').on('click', function () {
     $('p').append(data.quote)
     $('h3').append(data.author)
     $('h2').append(data.category)
   })
})
.catch((err) => {
 console.log(err)
})



})
