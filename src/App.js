
import './styles/App.css';
import React, { useContext } from "react";

import { ElementContextRoute } from "./context/RouteContext";
import { LoadingPage } from './pages/LoadingPage';
import { MainPage } from './pages/MainPage';
import {LoginPage} from './pages/LoginPage'
function App() {
  const {route} = useContext(ElementContextRoute);

  let currentPage ;
  console.log(1.2);
  switch (route) {
    case "":
      currentPage = (<LoadingPage></LoadingPage>)
      break;
    case "Main":
      currentPage = (<MainPage></MainPage>)
      break;
    case "Login":
      currentPage = (<LoginPage></LoginPage>)
      break;
    default:
      currentPage = (<LoadingPage></LoadingPage>)
      break;
  }

  return (
    <div className="App">
      <>{currentPage}</>
    </div>
  );
}

export default App;
