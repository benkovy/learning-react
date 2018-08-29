import { firebase, emailAuthProvider } from '../firebase/firebase';

export const startLogin = (credentials) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    };
};

export const startCreation = (credentials) => {
    return (dispatch) => {
        return firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
};

export const startLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut();
    };
};

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});