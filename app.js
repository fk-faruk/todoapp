const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
const port = process.env.PORT || 3000;
// const e js = require('ejs')

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

let newlists = ["food", "playball"];

app.get("/", (req, res) => {
  let today = new Date();

  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { todayDay: day, newlistitems: newlists });
});

app.post("/", (req, res) => {
  let newlist = req.body.input;

  newlists.push(newlist);
  //   newlists.push(newlist);

  res.redirect("/");
  //   res.render("list", { newlistitem: newlist });
  //   res.write("well here we are my nigga");
  //   res.send();
  //   console.log(newlist);
});
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
