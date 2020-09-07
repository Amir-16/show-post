import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Comment from './components/Comment/Comment';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>

      <Route path="/">
        <Home></Home>

        </Route>
        <Route path="/post/:postId">

        <Comment></Comment>
        </Route>

        <Route path="*">
<NotFound></NotFound>

        </Route>



      </Switch>
    </Router>
    
  );
}

export default App;
