const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const PORT =  8081;
const Usuarios = require("./routesUsuarios");
const Posts = require("./routesPosts");


app.use(cors());
app.use(bodyParser.json());
app.use("/Usuarios", Usuarios);
app.use("/Posts", Posts);



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


