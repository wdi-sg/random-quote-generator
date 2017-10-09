$(function() {

var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10"

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
   var index = Math.floor(Math.random()*10)
  //  var newdata = data[index]
  console.log(data[index].quote)
     $('p').append(data[index].quote)
     $('h3').append(data[index].author)
     $('h2').append(data[index].category)
     setInterval(clearData, 2000)
   })

function clearData() {
  $('p').empty()
  $('h3').empty()
  $('h2').empty()
}


})
.catch((err) => {
 console.log(err)
})



})
