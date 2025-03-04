import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { routerList } from "./routes";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "./css/main.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <CircularProgress size="3rem" />
            </div>
          }
        >
          <ToastContainer />
          <Header />
          <Routes>
            {routerList.map((item, index) => (
              <Route key={index} path={item.path} element={<item.element />} />
            ))}
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
