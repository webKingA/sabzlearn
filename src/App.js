import React, { useContext , useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./Routes";
import Context from "./Context";

export default function App() {

  let Router = useRoutes(routes);

  return (
    <Context.Provider value={{
    }}>
      <div>{Router}</div>
    </Context.Provider>
  );
}
