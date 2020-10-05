import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Volunteer from './components/Voluntter/Voluteer';
import LogIn from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import SearchBanner from './components/Search/Search';




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <SearchBanner />
            <Volunteer/>
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
          <PrivateRoute path="/register">
          <Header />
           <Register/>
          
          </PrivateRoute>
          <Route path="/login">
          <LogIn/>
          </Route>
          <PrivateRoute path="/registerVolunteer">
            <Header />
           
          </PrivateRoute>
          <Route path="/allVolunteer">
        
          </Route>
          <Route path="/newEvent">
           
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
