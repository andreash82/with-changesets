import Docs from "./pages";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Blobbs from "./blobbs";

createRoot(document.getElementById("root")??document.documentElement).render(
  <StrictMode>
    <Docs />
    <Blobbs />
  </StrictMode>
);
