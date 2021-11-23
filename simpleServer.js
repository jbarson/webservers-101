const http = require('http')
const port = 8080

const server = http.createServer((request, response) => {
  console.log(request.method, request.url)
  const routes = {
    "/": "this is the home page",
    "/about": "this is still the about page"
  }
  response.write(routes[request.url])
  // if (request.url === "/about") {
  //   response.write('this is the about page')
  // } else {
  //   response.write("This is a web server")
  // }
  response.end()
})

server.listen(port, () => console.log('listening on port', port))