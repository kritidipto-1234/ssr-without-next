import { hydrateRoot } from "react-dom/client";
import App from "./App";

console.log("client bundle js loaded");
hydrateRoot(document.querySelector("#ssr_root"), <App />);
