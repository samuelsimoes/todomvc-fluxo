var express = require("express"),
    app = express();

app.use(express.static("public"));
app.use("/bower_components",  express.static(__dirname + "/bower_components"));
app.use("/node_modules",  express.static(__dirname + "/node_modules"));

var server = app.listen(process.env.PORT || 3000);
