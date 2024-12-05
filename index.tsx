import React, { StrictMode } from "react";
import App from "./src/app";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement !== null) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
          <App />
        </StrictMode>
      );
} else {
    console.log("oops")
}