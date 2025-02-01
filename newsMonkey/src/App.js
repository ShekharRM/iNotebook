import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pagesize = 6;
  const apiKey = "03fac6cd68f64f5f9f91a8345874dcf1";

  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
        />
        <Routes>
          <Route
            exact path="/"
            element={<News setProgress={setProgress} apiKey={apiKey} pagesize={pagesize} country="us" category="general" />}
          />
          <Route
            exact path="/business"
            element={<News setProgress={setProgress} apiKey={apiKey} key="business" pagesize={pagesize} country="us" category="business" />}
          />
          <Route
            exact path="/entertainment"
            element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize={pagesize} country="us" category="entertainment" />}
          />
          <Route
            exact path="/general"
            element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pagesize} country="us" category="general" />}
          />
          <Route
            exact path="/health"
            element={<News setProgress={setProgress} apiKey={apiKey} key="health" pagesize={pagesize} country="us" category="health" />}
          />
          <Route
            exact path="/science"
            element={<News setProgress={setProgress} apiKey={apiKey} key="science" pagesize={pagesize} country="us" category="science" />}
          />
          <Route
            exact path="/sports"
            element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pagesize={pagesize} country="us" category="sports" />}
          />
          <Route
            exact path="/technology"
            element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize={pagesize} country="us" category="technology" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
