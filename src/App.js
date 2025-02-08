import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routerList } from "./routes";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {routerList.map((item) => {
            return <Route path={item.path} element={item.element} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
