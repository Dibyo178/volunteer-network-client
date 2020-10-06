import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import AllRegVolunteer from './components/RegisterVolunteer/RegisterVolunteer';
import Volunteer from './components/Volunteer/Volunteer';
import LogIn from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import SearchBanner from './components/Search/Search';
import RegisterList from './components/RegisterList/RegisterList';
import NewEventAdd from './components/NewEventList/NewEventList';



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
          <PrivateRoute path="/register/:registerId">
          
           <Register/>
          
          </PrivateRoute>
          <Route path="/login">
          <LogIn/>
          </Route>
          <PrivateRoute path="/registerVolunteer">
            <Header />
            <RegisterList/>
          </PrivateRoute>
          <Route path="/allVolunteer">
          <AllRegVolunteer/>
          </Route>
          
          <Route path="/newEvent">
          <NewEventAdd/>
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