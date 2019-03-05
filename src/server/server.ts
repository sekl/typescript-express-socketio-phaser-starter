import * as express from "express"
import * as path from "path"
import { Player } from "../shared/model/player"

const app = express()
app.set("port", process.env.PORT || 9001)

let http = require("http").Server(app)
let io = require("socket.io")(http)

app.use(express.static(path.join( __dirname, "../client")))

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./dist/client/index.html"))
})

io.on("connection", function(socket: any) {
  console.log("Client connected!")
  socket.on("msg", function(msg: any) {
    let player = new Player(msg)
    console.log(player.getName())
  })
})

http.listen(9001, function() {
  console.log("listening on *:9001")
})
