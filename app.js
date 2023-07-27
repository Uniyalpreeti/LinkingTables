const express=require("express")
const bodyparser=require('body-parser')
const app=express()
const useRoute=require('./Router/useRoute')

require('./config/db')

app.set('view engine','ejs')
app.use(express.static('static'))

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use("/",useRoute);

let port=3000;
app.listen(port,console.log("Server is running in the port 3000!"))