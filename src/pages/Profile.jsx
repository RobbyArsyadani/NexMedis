import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import axios from "axios";
import { getUser } from "../api/auth";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const email = user.email;
      const fetchUser = async () => {
        try {
          const data = await getUser(email);
          setUserData(data);
        } catch (err) {
          console.log("error: ", err.message);
        }
      };
      fetchUser();
    }
  }, [user, navigate]);

  if (!userData) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Profile</h2>
        <img
          src={userData.avatar}
          alt={userData.first_name}
          className="rounded-full w-32 h-32 mt-4"
        />
        <p className="text-lg">
          {userData.first_name} {userData.last_name}
        </p>
        <p className="text-gray-600">{userData.email}</p>
      </div>
    </>
  );
};

export default Profile;

