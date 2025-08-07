import { useState } from "react";
import Header from "./Header.jsx";
const Login = () => {
    const[isSignInForm,setSignInForm]=useState(false);
    const toggleSignInForm=()=>{
       setSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />

      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg" />

      </div>

      <form className="w-3/14 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ?"SignIn":"SignUp"}</h1>
      

        {!isSignInForm && (<input
         type="text" 
         placeholder="full name" 
         className="p-4 my-4 w-full bg-gray-900" 
         />)}

          <input
         type="text" 
         placeholder="Enter your email" 
         className="p-4 my-4 w-full bg-gray-900" 
         />

        <input
         type="password"
         placeholder="Password"
         className="p-4 my-4 w-full bg-gray-900" />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          SignIn
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
       {isSignInForm ? "New User ? SignUp Form" : " Already SignIn"}</p>

      </form>
    </div>
  );
};

export default Login;
