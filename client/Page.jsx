import App from "./App.jsx";
import Counter from "./Counter.jsx";

function Page() {
  return (
    <html>
      <head>
        <title>My server side Page!</title>
      </head>
      <body>
        <div id="ssr_root">
          <App />
        </div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  );
}

export default Page;
