const express  = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080
//log rquest
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine

app.set("view engine","ejs");
// if we specify or put our ejs  in different folders than we use
// app.set("views",path.resolve(__dirname,"views/ejs")) here views/ejs is the path and __dirname is root directory

// load asset

app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));



app.get('/',(req,res) =>{
    // res.send("Crud Application");
    res.render('index');
})

app.get('/add_user',(req,res) =>{
    // res.send("Crud Application");
    res.render(`add_user`);
})
app.get('/update-user',(req,res) =>{
    // res.send("Crud Application");
    res.render(`update_user`);
})

app.listen(PORT,() => {console.log(`Server is running on http://localhost:${PORT}`)});