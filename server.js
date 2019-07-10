const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

// invoke express
const app = express();

// create the port
const PORT = process.env.PORT || 3000;

// app.listen(3000, () => console.log("server started"));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// or
// // body parser
// app.use(express.urlencoded({ extended: true }));
// // invoke this
// app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
// sets the view engine to handlebars
app.set('view engine', 'handlebars');

// route for the controller
const routes = require('./controllers/burgers_controllers.js');
// using the route
app.use(routes);



// var burgers = [
//     { name: 'cheeseburger' },
//     { name: 'veggieburger' }
// ];

// // :name so it is a WILD CARD!
// app.get('/burger/:name', (req, res) => {
//     const name = req.params.name;

//     const chosenBurger = burgers.find(burger => burger.name === name);
//     // render response! on page called burger on handlebars and chosenburger
//     res.render('burger', chosenBurger);
// });

// app.get("/burgers", function(req, res) {
//     res.render('burgers', { burgers });
// });

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})