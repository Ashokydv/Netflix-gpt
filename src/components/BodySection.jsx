import { useEffect } from 'react'
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Login from './Login.jsx';
import Browse from './Browse.jsx';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase.jsx";
import {useDispatch} from "react-redux";
import { addUser } from '../utils/userSlice.jsx';
import { removeUser } from '../utils/userSlice.jsx';
const BodySection = () => {

  const dispatch = useDispatch();


  useEffect (()=>{

      onAuthStateChanged(auth, (user) => {

  if (user) {
  
    const {uid, email,displayName,photoURL }= user;
    dispatch(
      addUser({
        uid:uid, 
        email:email,
        displayName:displayName,
        photoURL:photoURL
      }
    ));
     
    
  } else {
    // User is signed out
      dispatch(removeUser());
      
  }
});
  },[])
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/browse" element={<Browse/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default BodySection;