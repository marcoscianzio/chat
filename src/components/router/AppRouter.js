import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import {firebase} from "../../firebase/firebase"
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../../actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ChatScreen from '../chat/ChatScreen';
import LoginScreen from '../auth/LoginScreen'
const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {
            if(user?.uid){ // si existe el user y el uid
                dispatch(loginWithGoogle(user.uid, user.displayName, user.photoURL));
                setIsLoggedIn(true);
            }
            else{
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn])
    if (checking){
        return (
            <div>
                Cargando...
            </div>
        )
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/login" 
                        component={LoginScreen} 
                        isAuthenticated={isLoggedIn}/>
                    <PrivateRoute 
                        exact 
                        isAuthenticated={isLoggedIn}
                        path="/" 
                        component={ChatScreen} />
                    <Redirect to = "/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
