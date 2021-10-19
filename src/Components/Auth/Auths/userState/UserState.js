import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { init } from '../initialize';

const UserState = () => {
    init()
    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
            }
        })
    }, [auth]);


    const googlePop = () => {
        return signInWithPopup(auth, provider)
    }

    const signinEmailAndPass = (email, password,) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUser(user);
                window.location.reload()
            })
            .catch((error) => {

                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    alert('Your email is invalid..........Please check Your email')
                } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    alert('Your password is wrong')
                } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    alert(`Your email already in use...Go to log in page`)
                } else {
                    alert(error.message)
                }
            });
    }

    const creatEmailAndPass = (email, password, displayName, phoneNumber) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUser(user)
                updateProfiles(displayName, phoneNumber)

            })
            .catch((error) => {
                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    alert('Your email is invalid..........Please check Your email')
                } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    alert('Your password is wrong')
                } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    alert(`Your email already in use...Go to login page`)
                } else {
                    alert(error.message)
                }
            });
    }
    
    const updateProfiles = (displayName, phoneNumber) => {
        updateProfile(auth.currentUser, {
            displayName: displayName, phoneNumber: phoneNumber
        })
            .then(() => {
            })
            .catch((error) => {
            });
    }


    const signout = () => {
        signOut(auth).then(() => {
            setUser({})
            window.location.reload()
        }).catch((error) => {
        });
    }
    return ({
        user,
        signinEmailAndPass,
        creatEmailAndPass,
        googlePop,
        signout
    });
};

export default UserState;