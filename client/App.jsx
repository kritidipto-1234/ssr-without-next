import Counter from "./Counter.jsx";

function App() {
  return (
    <html>
      <head>
        <title>My server side app!</title>
      </head>
      <body>
        <div>Hello world!</div>
        <Counter />
        <script src="./bundle.js"></script>
      </body>
    </html>
  );
}

export default App;
