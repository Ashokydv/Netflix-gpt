import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice.jsx";
import { removeUser } from "../utils/userSlice.jsx";
import { useDispatch } from "react-redux";
import { LOGO, USER_ICON } from "../utils/constants.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // when component unmount
    return ()=> unsubscribed();
  }, []);
  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between  w-full">
      <img
        className="w-44 "
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="userIcon"
            src={USER_ICON}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            signOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
