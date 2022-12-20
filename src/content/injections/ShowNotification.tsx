import React from "react";
import { createRoot } from "react-dom/client";
import JobNotification from "../../components/job_notification/JobNotification";

export function showNotification() {
  if (typeof window !== "undefined" && !document.getElementById("react-root")) {
    const doc = document.querySelector("html");
    const body = document.querySelector("body") as HTMLElement;
    body.style.position = "relative";
    body.style.zIndex = "0";
    const app = document.createElement("div");
    app.id = "react-root";
    if (doc) {
      doc.prepend(app);
    }
    const container = document.getElementById("react-root") as HTMLElement;
    const root = createRoot(container);
    root.render(<JobNotification />); // Render react component
  }
}