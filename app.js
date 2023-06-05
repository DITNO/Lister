const express = require("express");
const bodyparser = require("body-parser");

const app = express();

let items = ["buy food", "Cook food", "Eat food"];
let workItem = [];

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("hi-EN", options);
  res.render("list.ejs", { listTittle: day, newlistItems: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItem.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
  res.render("list", { listTittle: "Work List", newlistItems: workItem });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItem.push(item);
  res.redirect("/work");
});
app.listen(3000, function () {
  console.log("server is running on the 3000 server");
});
