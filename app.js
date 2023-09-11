const path = require("path");

const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHb = require("express-handlebars");

const errorController = require('./controllers/error');

const app = express();

// app.engine(
//   "hbs",
//   expressHb({
//     layoutsDir: "views/layout /",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
app.set("view engine", "ejs");
// app.set("view engine", "hbs");
// app.set('view engine', 'pug');
app.set("views", "views");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use('/', errorController.get404);

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);
