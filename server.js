let express = require('express');
const path = require('path')
//const cookieParser = require('cookie-parser')
const router = require('./Routes/Page_Router')
const app = express()

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
//app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use(router)

app.listen(9000,()=>{
    console.log("runserver")
})