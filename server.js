const express = require("express");
const ReactDOMServer = require("react-dom/server");
const Page = require("./client/Page.jsx").default;
const path = require("path");

const app = express();
const port = 3000;

app.use("/bundle.js", async (req, res) => {
  //emulating slow network/heavy js
  res.setHeader("Content-Type", "text/javascript");
  setTimeout(() => res.sendFile(path.join(__dirname, "/client/bundle.js")), 3000);
});

// app.use(express.static("dist/client"));

//serve Server rendered index.html
app.get("/", async (req, res) => {
  console.log("/ Sending server rendered index.html");
  const html = ReactDOMServer.renderToString(<Page />);
  res.send(html);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});
