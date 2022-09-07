import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RidersDetails from './Components/RidereDetails/RidersDetails';
import AppBar from './Components/AppBar/AppBar';
export const userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <AppBar/>
        <Switch>
          <Route exact path="/"><Home/></Route>

          <Route path="/home"><Home/></Route>

          <Route path="/blog"><Blog/></Route>

          <Route path="/contact"><Contact/></Route>

          <Route path="/login"> <Login/></Route>
          
          <PrivateRoute path="/rider/:riderType"><RidersDetails/></PrivateRoute>
                    
          <Route path="*"><NoMatch /></Route>
        </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
