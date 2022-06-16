import "./App.css";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
