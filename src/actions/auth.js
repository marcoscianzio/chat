import { types } from "../components/types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLoginWithGoogle = () => {
    return async (dispatch) => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(loginWithGoogle(user.uid, user.displayName, user.photoURL));
            });
    };
};

export const loginWithGoogle = (uid, displayName, photoURL) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        profilePic: photoURL
    },
});


export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})