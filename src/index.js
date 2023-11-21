import React from 'react';
import { createRoot } from 'react-dom/client';
import News from './News';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function Index() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<News pageSize={28} />}
          />
          <Route
            exact path="/NewsApp"
            element={<News pageSize={28}
            key="NewsApp"
            />}
          />
          <Route
            exact path="/Business"
            element={<News pageSize={2}
            key="Business"
            />}
          />
          <Route
            exact path="/Entertainment"
            element={<News pageSize={3}
            key="Entertainment"
            />}
          />
        </Routes>
      </Router>
    </>
  )
}
createRoot(document.getElementById("root")).render(
  <Index />
)