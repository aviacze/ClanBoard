const express = require('express')
const path = require('path')
const app = express()
const port = 80

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/anim', (request, response) => {
  response.sendFile(path.join(__dirname + '/anim.html'))
})

app.get('/kogolubipatryk', (req, res) => {
  if(typeof req.query.dupa !== 'undefined') {
    res.send('<h1>Moim parametrem jest: '+req.query.dupa+'</h1>')
  } else {
    res.send('<h1>Nie dales zadnego parametru</h1>')
  }
})



app.get('/mati', (request, response) => {
  var liczba=request.query.liczba
  response.send('Twoja liczba to: ' + Math.pow(10, liczba))
})


app.post('/suma', (request, response) => {
  var liczba1=parseInt(request.query.liczba1)
  var liczba2=parseInt(request.query.liczba2)
  var suma=liczba1 + liczba2
  response.send({suma})
})


app.get('/powtorz', (request, response)=> {
  //petla for
  var result = ''
  for (var i=1000; i >= 0; i--) {
    result = result + i + "<br />"
  }
  response.send(result)
}
)



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
