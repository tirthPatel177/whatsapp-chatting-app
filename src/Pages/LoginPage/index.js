import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import './style.css'
import {signin, isLoggedInUser} from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'


/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  
  const userLogin = (e) => {
    e.preventDefault();
    if(email==''){
      alert("Email is required!");
      return;
    }
    if(password == ''){
      alert("Password is required!");
      return;
    }
    dispatch(signin({email, password}));
  }

  if(auth.authenticated){
    return <Redirect to={`/`} />
  }


  return(
    <Layout>
      <div className='loginContainer'>
        <Card>
          <form className='formC' onSubmit={userLogin}>
            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              // className='centerIt'
              />
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              // className='centerIt'
              />
            <div>
              <button>Login</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
   )

 }

export default LoginPage