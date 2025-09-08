import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

import { UserDataContext, useUser } from "../contexts/UserContext";
import { useToast } from "../contexts/ToastContext";
import ToastError from "../components/Toast/ToastError";
import ToastEmailVerified from "../components/Toast/ToastEmailVerified";
import { delay } from "../utils/delay";
import ToastOTPSent from "../components/Toast/ToastOTPSent";
import SignupSigninOutline from "../components/Auth/SignupSigninOutline";
import MyTextField from "../components/MUI/MyTextField";
import MyTextFieldOTP from "../components/MUI/MyTextFieldOTP";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [otp, setOtp] = useState("");
  const toast = useToast();

  useEffect(() => {
    if (user.isEmailVerified) {
      navigate(`/dashboard`);
      return;
    }
  }, [navigate, user]);

  const handleOtpChange = (e) => {
    if (e.target.value.length > 6) return;
    setOtp(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await delay(1000);

    try {
      if (otp?.length !== 6) {
        toast.open(
          <ToastError
            headline="Invalid OTP"
            subHeadline="OTP should be of length 6"
          />
        );
        return;
      }

      const userData = { token: otp };
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/email/verify`,
        userData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.success === true) {
        toast.open(<ToastEmailVerified />);

        await delay(2000); // Wait for 2 second
        navigate(`/dashboard/home`);
        return;
      } else {
        console.log("");
      }
    } catch (error) {
      console.log(error.response.data);
      const errCode = error.response.data.errorCode;
      const errSubHeadlineMsg = error.response.data.message;
      let errHeadlineMsg =
        errCode === "VALIDATION_ERROR" ? "Validation Error" : "Incorrect OTP";
      errHeadlineMsg =
        errCode === "EMAIL_ALREADY_VERIFIED"
          ? "Email already verified"
          : errHeadlineMsg;
      toast.open(
        <ToastError headline={errHeadlineMsg} subHeadline={errSubHeadlineMsg} />
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      setIsResending(true);
      await delay(1000); // Wait for 1 second
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/email/verification-token`,
        {},
        {
          withCredentials: true, // enable sending cookies
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success === true) {
        toast.open(<ToastOTPSent />);
      } else {
        console.log("");
      }
    } catch (error) {
      console.log(error.response.data);
      const errCode = error.response.data.errorCode;
      const errSubHeadlineMsg = error.response.data.message;
      let errHeadlineMsg =
        errCode === "SEND_VERIFICATION_TOKEN_FAILED"
          ? "OTP resend failed"
          : "Email verified";

      toast.open(
        <ToastError headline={errHeadlineMsg} subHeadline={errSubHeadlineMsg} />
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <>
      <SignupSigninOutline headline={"Verify email"}>
        <div className="text-md text-gray-300 font-extralight text-center">
          We've sent OTP to
        </div>
        <div className="text-white text-md font-extralight text-center -mt-1 mb-8">
          {user.email}
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-4 max-w-[300px] w-full sm:w-full"
        >
          <MyTextFieldOTP
            value={otp}
            handleOnChange={handleOtpChange}
            label="OTP"
            name="otp"
            required={true}
            placeholder="6 Digit OTP"
          />

          <Button
            type="submit"
            variant="contained"
            disableElevation
            disabled={loading || isResending}
            sx={{
              textTransform: "capitalize",
              fontSize: "18px",
              fontWeight: "500",

              color: "#ffffff",
              backgroundColor: "#4294FF",

              padding: "5px 10px",
              "&:hover": {
                backgroundColor: "#376CFB",
              },
              "&.Mui-disabled": {
                color: "#b9b2b2",
                backgroundColor: "#4294ff6b",
                cursor: "not-allowed",
              },
            }}
          >
            {loading ? "Verifying ..." : "Verify"}
          </Button>
        </form>

        <footer className="px-5 text-white flex justify-center gap-1 mt-5">
          Didn't receive an email?
          <button
            // className="text-[#4294FF] cursor-pointer font-medium"
            className={`text-[#4294FF] font-medium ${
              loading || isResending
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={handleResendOtp}
            disabled={loading || isResending}
          >
            {isResending ? "Resending ..." : "Resend"}
          </button>
        </footer>
      </SignupSigninOutline>

      {/* Skip button */}
      <Link to={`/dashboard`}>
        <Button
          disabled={loading || isResending}
          variant="text"
          sx={{
            position: "fixed",
            top: 16,
            right: 16,

            border: "1px solid #ffffff3d",
            color: "#376CFB",
            fontWeight: "500",
            fontSize: "16px",
            textTransform: "none",
            zIndex: 1000,
            "&:hover": {
              backgroundColor: "rgba(66, 148, 255, 0.1)",
              border: "1px solid #4294FF",
            },
            "&.Mui-disabled": {
              color: "#376bfb6b",
              cursor: "not-allowed",
            },
          }}
        >
          Skip
        </Button>
      </Link>
    </>
  );
};

export default VerifyEmail;
