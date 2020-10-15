import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import { useState } from 'react';
import OrderService from './Components/OrderService/OrderService/OrderService/OrderService';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './Components/ServiceList/ServiceList/ServiceList';
import Review from './Components/Review/Review/Review';
import AddService from './Components/Admin/AddService/AddService';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: ''
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/order">
            <OrderService />
          </PrivateRoute>
          <PrivateRoute path="/serviceList/order">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/review/order">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/addService/order">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin/order">
            <AddAdmin />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
