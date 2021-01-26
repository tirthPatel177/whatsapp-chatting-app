import React, {useState} from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Layout/UI/Card'
import './style.css'
/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return(
    <Layout>
      <div className='loginContainer'>
        <Card>
          <form>
            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              />
            <input
              name="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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