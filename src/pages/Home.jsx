import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { getUser } from "../api/auth";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      // Hindari eksekusi kode setelah navigasi
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

  // Jika user masih null, hindari render konten
  if (!userData) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <h2>
          Welcome, {userData.first_name} {userData.last_name}
        </h2>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 mt-4"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;

