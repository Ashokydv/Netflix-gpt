import { useState ,useRef} from "react";
import Header from "./Header.jsx";
import { checkValidate } from "../utils/validate.jsx";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice.jsx';
const Login = () => {
    const[isSignInForm,setSignInForm]=useState(true);
    const[error,setError]=useState(null);

    const navigate = useNavigate();
    const dispatch=useDispatch();

    const name=useRef(null);

    const email = useRef(null);

    const password= useRef(null);

    const handleButtonClick=()=>{
      console.log(email.current.value);
      console.log(password.current.value);
      // validate the form
      const message = checkValidate(email.current.value,password.current.value);
      setError(message);
      console.log(message);
      if(message) return;


      if(!isSignInForm){

         // signup

         createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
          )
           .then((userCredential) => {
              // Signed up 
           const user = userCredential.user;
           
           updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
            })
            .then(() => {
              const {uid, email,displayName,photoURL }= auth.currentUser;
             dispatch(
              addUser({
                      uid:uid, 
                      email:email,
                      displayName:displayName,
                      photoURL:photoURL
                    })
             );
  // Profile updated!
           navigate("/Browse");
}).catch((error) => {
  // An error occurred
  setError(error.message);
});

           
         })
           .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + "," + errorMessage);
    // ..
  });

      }else{
        // signin 
        signInWithEmailAndPassword(
           auth,
           email.current.value, 
           password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/Browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + "," + errorMessage);
  });
      }
      
      

    };
    const toggleSignInForm=()=>{
       setSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />

      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg" />

      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="w-3/14 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ?"SignIn":"SignUp"}</h1>
      

        {!isSignInForm && (<input
         type="text" 
         placeholder="full name" 
         className="p-4 my-4 w-full bg-gray-900" 
         />)}

        <input
         ref={email}
         type="text" 
         placeholder="Enter your email" 
         className="p-4 my-4 w-full bg-gray-900" 
         />

        <input
         ref={password}
         type="current-password"
         placeholder="Password"
         className="p-4 my-4 w-full bg-gray-900"
          />

         <p className="font-bold  text-red-500 py-2 text-3xl">{error}</p>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          SignIn
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
       {isSignInForm ? "New User ? SignUp Form" : " Already SignIn"}</p>

      </form>
    </div>
  );
};

export default Login;
