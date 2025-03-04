import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { routerList } from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "./css/main.css";

function Layout({ children }) {
  const location = useLocation();

  // Check if the current path matches any defined route
  const isNotFoundPage = !routerList.some(
    (route) => route.path === location.pathname
  );

  return (
    <>
      {!isNotFoundPage && <Header />}
      {children}
      {!isNotFoundPage && <Footer />}
    </>
  );
}

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
          <Layout>
            <Routes>
              {routerList.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.element />}
                />
              ))}
              {/* 404 Page Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
