import React from "react";
import ReactDOM from "react-dom/client";
import "./style/reset.css";
import "./style/global.scss";
import App from "./App";
import { UsecaseDependenciesProvider } from "./context/usecaseDependenciesProvider";
import { UserContextProvider } from "./context/userContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <UsecaseDependenciesProvider>
        <App />
      </UsecaseDependenciesProvider>
    </UserContextProvider>
  </React.StrictMode>
);
