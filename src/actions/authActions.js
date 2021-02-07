import firebase from 'firebase';
// import auth from 'firebase';
// import firestore from 'firebase';
import {authConstant} from './constants';


export const signup = (user) => {

    return async (dispatch) => {
        const db = firebase.firestore();
        dispatch({type: `${authConstant.USER_LOGIN}_REQUEST`});
        firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(data=>{
            console.log(data);
            const currentUser = firebase.auth().currentUser;
            const name = `${user.firstName} ${user.lastName}`;
            currentUser.updateProfile({
                displayName: name
            })
            .then(() => {
                // Success
                db.collection('users').add({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    uid: data.user.uid,
                    createdAt: new Date()
                })
                .then(()=>{
                    const loggedInUser = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        uid: data.user.uid,
                        email: user.email
                    }
                    localStorage.setItem('user', JSON.stringify(loggedInUser));
                    console.log('User Login Successful');
                    dispatch({
                        type: `${authConstant.USER_LOGIN}_SUCCESS`,
                        payload: {user: loggedInUser}

                    })
                })
                .catch(error => {
                    console.log(error);
                    dispatch({
                        type: `${authConstant.USER_LOGIN}_FAILURE`,
                        payload: {error}
                    });
                });
            });
        })
        .catch(error=>{
            console.log(error);
        })
    }
}