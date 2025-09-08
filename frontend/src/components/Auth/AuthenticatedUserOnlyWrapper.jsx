import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useUser } from "../../contexts/UserContext";
import Loading from "../Loader/Loading";

const AuthenticatedUserOnlyWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser, isLoading, setIsLoading } = useUser();

  useEffect(() => {
    console.log(user, token);
    if (user && user !== null && user !== undefined) return;
    if (!token) {
      navigate("/auth/signin");
      return;
    }

    const fetchProfile = async () => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("res", response);
          if (response.data.success === true) {
            setUser(response.data.data);
          }
        })
        .catch(() => {
          console.log("err: ctach");
          localStorage.removeItem("token");
          navigate("/auth/signin");
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchProfile();
  }, [token, user, navigate, setUser, isLoading, setIsLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return <>{children}</>;
};

export default AuthenticatedUserOnlyWrapper;
