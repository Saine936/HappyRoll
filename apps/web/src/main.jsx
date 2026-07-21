import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.requestAnimationFrame(() => {
  setTimeout(() => {
    const splash = document.getElementById("app-splash");

    if (splash) {
      splash.classList.add("hide");

      setTimeout(() => {
        splash.remove();
      }, 600);
    }
  }, 400);
});