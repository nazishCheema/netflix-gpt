import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Redux/userSlice";
import { LOGO, USER_AVATAR, langOptions } from "../../constants";
import { toggleSearchView } from "../../Redux/SearchSlice";
import { changeLang } from "../../Redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const isSearch = useSelector((store) => store?.search?.toggleSearch);
  const isPlaying = useSelector((store) => store?.movies?.toggleMovie);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate(`/error`);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uId: user?.uid,
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          })
        );
        navigate(`/browse`);
      } else {
        dispatch(removeUser());
        navigate(`/`);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearch = () => {
    dispatch(toggleSearchView());
  };

  const handleLanguage = (e) => {
    dispatch(changeLang(e?.target?.value));
  };

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between items-center ">
      <img src={LOGO} alt="netflix" width={150} />
      {user && (
        <div className="flex">
          {isSearch && (
            <select
              className="px-2 bg-slate-200 mx-2"
              onChange={handleLanguage}
            >
              {langOptions?.map((lang) => (
                <option key={lang?.value} value={lang?.value}>
                  {lang?.name}
                </option>
              ))}
            </select>
          )}

          <button onClick={handleSearch} className="  text-white">
            {isSearch || isPlaying ? `Home` : ` 🔎 Search`}
          </button>
          <img
            src={USER_AVATAR}
            alt="profile"
            width={40}
            height={40}
            className="mx-2"
          />
          <button className="text-white" onClick={handleSignout}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
