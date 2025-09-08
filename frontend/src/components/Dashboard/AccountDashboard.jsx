import { Link, NavLink, useParams } from "react-router";
import { useUser } from "../../contexts/UserContext";
import { useState } from "react";
import { useToast } from "../../contexts/ToastContext";
import { useRef } from "react";
import { useEffect } from "react";
import MyModal from "../Other/MyModal";
import MyButton from "../Button/MyButton";
import LogoutModalContent from "./Account/LogoutModalContent";
import { delay } from "../../utils/delay";
import { isValidEmail } from "../../utils/validateEmail";
import axios from "axios";
import ToastAuthenticated from "../Toast/ToastAuthenticated";
import ToastError from "../Toast/ToastError";
import { CircularProgress } from "@mui/material";

const AccountDashboard = () => {
  const { user } = useUser();
  const [email, setEmail] = useState(user?.email);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const inputRef = useRef(null);
  const spanRef = useRef(null);

  // Submit Form handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await delay(1000); // Wait for 1 second
      if (!isValidEmail(email)) {
        console.log("wrong format of email");
        toast.open(
          <ToastError
            headline="Can't update email"
            subHeadline="Invalid email format"
          />
        );
        setEmail(user.email);
        return;
      }
      const userData = { email };
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/users/email`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success === true) {
        toast.open(
          <ToastAuthenticated
            headline="Email updated"
            subHeadline="We've updated your email"
          />
        );
      } else {
        setEmail(user.email);
        console.log("");
      }
    } catch (error) {
      const errSubHeadlineMsg = error.response.data.message;
      const errHeadlineMsg = "Can't change email";
      toast.open(
        <ToastError headline={errHeadlineMsg} subHeadline={errSubHeadlineMsg} />
      );
      setEmail(user.email);
    } finally {
      setLoading(false);
      setIsEditing(false);
    }
  };

  // To focus in input as soon as editing begins
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus(); // Focus input when edit mode begins
    }
  }, [isEditing]);

  // To adjust size of input based on content
  useEffect(() => {
    if (inputRef.current && spanRef.current) {
      inputRef.current.style.width = `${spanRef.current.offsetWidth + 4}px`; // extra padding
    }
  }, [email, isEditing]);

  return (
    <main className="">
      <header className="flex gap-4 mb-8 items-center justify-start">
        {/* Back button */}
        <NavLink to={`/dashboard/home`}>
          <i className="ri-arrow-left-long-line text-white text-[20px] inline-block transform origin-center hover:scale-120 transition-transform duration-300 ease-in-out hover:text-[#ffffff72]"></i>
        </NavLink>

        {/* Title of page */}
        <h1 className="text-white text-2xl font-semibold">Account</h1>
      </header>
      <header className="mb-5">
        <main className="bg-gray-900 rounded-xl p-10">
          <h1 className="text-white text-xl flex items-center gap-4 justify-between">
            <div className="text-white text-xl flex items-center gap-4">
              <span className="h-10 w-10 border-2 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </span>
              {user?.name}
            </div>
            {/* Logout Modal */}
            <MyModal
              width={550}
              btn={
                <MyButton
                  variant="outlined"
                  sx={{
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "start",
                    fontSize: "16px",
                    color: "white",
                    padding: "8px 15px",
                    border: "2px solid #ffffff1a",
                    height: "100%",
                  }}
                >
                  Log Out
                </MyButton>
              }
            >
              <span className="mx-auto p-4 h-20 w-20 bg-[#B6013E] rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/images/logout.png"
                  className="h-full w-full object-cover"
                />
              </span>
              <h1 className="mx-auto text-2xl font-semibold text-white mt-12">
                Are you sure you want to log out?
              </h1>
              <h1 className="mx-auto text-gray-400 mt-2">
                You will be asked to log in again to access your dashboard
              </h1>
              <LogoutModalContent />
            </MyModal>
          </h1>
          <div className="border-1 border-gray-800 mt-5"></div>
          <h1 className="text-white text-xl flex items-center gap-5 mt-5 p-2">
            <span>
              {user?.isEmailVerified ? (
                <i className="ri-mail-check-line text-[20px]"></i>
              ) : (
                <i className="ri-mail-unread-line text-[25px]"></i>
              )}
            </span>
            <form
              onSubmit={handleFormSubmit}
              className="flex gap-2 items-center relative"
            >
              <span
                ref={spanRef}
                className="absolute opacity-0 pointer-events-none whitespace-pre text-[18px]"
              >
                {email || " "}
              </span>
              <input
                ref={inputRef}
                disabled={!isEditing}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className={`${
                  isEditing
                    ? "border-b border-blue-500 focus:outline-none"
                    : "bg-transparent"
                } text-gray-300 text-[18px]`}
              />
              {/* Edit Email btn */}
              {!user?.isEmailVerified && (
                <>
                  {!isEditing ? (
                    <span
                      onClick={() => setIsEditing(true)}
                      className={`px-[4px] rounded-full cursor-pointer hover:text-[#376CFB] ${
                        isEditing && "text-[#376CFB]"
                      }`}
                    >
                      <i className="ri-pencil-line"></i>
                    </span>
                  ) : (
                    <>
                      {!loading ? (
                        <button
                          type="submit"
                          className={`flex px-[4px] rounded-full cursor-pointer hover:text-[#376CFB] ${
                            isEditing && "text-[#376CFB]"
                          } border-2 hover:bg-[#376CFB] hover:text-white`}
                        >
                          <i className="ri-check-line"></i>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className={`flex rounded-full ${
                            isEditing && "text-[#376CFB]"
                          }`}
                        >
                          <CircularProgress size="25px" />
                        </button>
                      )}
                    </>
                  )}
                </>
              )}
              {/* Verify Email btn */}
              {!user?.isEmailVerified && (
                <Link to={`/auth/verify-email`} end>
                  <button className="bg-[#4294FF] cursor-pointer hover:bg-white hover:text-[#4294FF] border-2 border-white text-white text-[15px] rounded-2xl pl-4 pr-2 font-semibold">
                    Verify
                    <span>
                      <i className="ri-arrow-right-s-line"></i>
                    </span>
                  </button>
                </Link>
              )}
            </form>
          </h1>
        </main>
      </header>
    </main>
  );
};

export default AccountDashboard;
