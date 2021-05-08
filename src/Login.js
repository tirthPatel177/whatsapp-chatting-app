import React from 'react'
import './Login.css'
import {auth, provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { Button } from '@material-ui/core';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
           <div className="login_container">
                <img src="https://img.icons8.com/clouds/100/000000/whatsapp.png" alt='' />
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn} >Sign in With Google</Button>
           </div>
        </div>
    );
}

export default Login
