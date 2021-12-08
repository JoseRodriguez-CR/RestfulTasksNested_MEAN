//Adding dependancies
const express = require( 'express' );
const session = require( 'express-session' );
const flash = require( 'express-flash' );
const path = require( 'path' );
const {TaskAPIRouter} = require( './server/routes/taskApiRouter' );
const cors = require('cors');

//Connecting database with the server
require( './server/config/database' );
require( 'dotenv' ).config();

//Initializing express app
const app = express();

//Setting locations of views
app.set( 'views', __dirname + '/client/views' );
app.set( 'view engine', 'ejs' );
//Setting location of static folder
app.use(express.static(path.join(__dirname, "/client/static")));

//Setting dependancies  specs required
app.use( cors() );
app.use( flash() );
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 20 }
}));

//Setting which routers will be used
app.use( '/api', TaskAPIRouter );

//Setting the Port used to run the server
app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});