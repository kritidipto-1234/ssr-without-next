const express = require("express");
const ReactDOMServer = require("react-dom/server");
const App = require("./client/App.jsx").default;

const app = express();
const port = 3000;

app.use(express.static("dist/client"));

//serve Server rendered index.html
app.get("/", async (req, res) => {
  console.log("/ Sending server rendered index.html");
  const html = ReactDOMServer.renderToString(<App />);

  // res.setHeader("Content-Type", "text/html");
  res.send(html);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});
