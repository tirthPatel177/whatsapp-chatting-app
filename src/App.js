import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/Home';
import PrivateRoute from './components/privateRoute'
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';


function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()


  useEffect(() => {
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
  }, []);

  return (
    <div className="App">
      <Router>
        {/* {PRIVATE !} */}
        <PrivateRoute path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
