import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => {
        navigate(`/error`);
      });
  };
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between items-center ">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix"
        width={150}
      />
      {user && (
        <div className="flex ">
          <img
            src="https://occ-0-1241-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201"
            alt="profile"
            width={30}
            height={30}
            className="mx-2"
          />
          <button onClick={handleSignout}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
