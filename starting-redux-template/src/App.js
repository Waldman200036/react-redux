import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { PostsList } from './features/posts/PostsList';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <PostsList />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
