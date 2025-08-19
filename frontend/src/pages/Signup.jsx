import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import SignupSigninOutline from "../components/Auth/SignupSigninOutline";
import { MUITextFieldSx } from "../styles/MUITextFieldSx";
import { useToast } from "../contexts/ToastContext";
import { delay } from "../utils/delay";
import { isValidEmail } from "../utils/validateEmail";
import ToastError from "../components/Toast/ToastError";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const headline = "Create account";

const Signup = () => {
  // Controlled form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  // Show and hide password MUI
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  // Submit Form handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await delay(1000); // Wait for 1 second

      if (name?.length < 2) {
        toast.open(
          <ToastError
            headline="Name Too Small"
            subHeadline="Name should be at least of length 2"
          />
        );
        return;
      }
      if (!isValidEmail(email)) {
        toast.open(
          <ToastError
            headline="Invalid Email"
            subHeadline="Incorrect Email format"
          />
        );
        return;
      }
      if (password?.length < 6) {
        toast.open(
          <ToastError
            headline="Password Too Small"
            subHeadline="Password should be at least of length 6"
          />
        );
        return;
      }
      const userData = { name, email, password };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        userData
      );

      console.log(response.data);
      if (response.data.success === true) {
        toast.open(<ToastAuthenticated />);
        const { token } = response.data.data;
        localStorage.setItem("token", token);

        await delay(2000); // Wait for 1 second
        navigate("/auth/verify-email");

        await delay(2000); // Wait for 1 second
        toast.open(<ToastOTPSent />);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error.response.data);
      const errCode = error.response.data.errorCode;
      const errSubHeadlineMsg = error.response.data.message;
      const errHeadlineMsg =
        errCode === "VALIDATION_ERROR"
          ? "Validation Error"
          : "User already exists";
      toast.open(
        <ToastError headline={errHeadlineMsg} subHeadline={errSubHeadlineMsg} />
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <SignupSigninOutline headline={headline}>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <TextField
          name="name"
          label="Name"
          placeholder="Anish Dhomase"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          id="standard-basic"
          variant="outlined"
          autoComplete="off"
          sx={MUITextFieldSx}
        />
        <TextField
          name="email"
          label="Email"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          id="standard-basic"
          variant="outlined"
          autoComplete="off"
          sx={MUITextFieldSx}
        />
        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="At least of length 6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="standard-basic"
          variant="outlined"
          sx={MUITextFieldSx}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ color: "#ffffff" }} />
                  ) : (
                    <Visibility sx={{ color: "#ffffff" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          disableElevation
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
              backgroundColor: "rgba(66, 148, 255, 0.5)", // 50% transparent
              color: "rgba(255, 255, 255, 0.7)", // lighter text
            },
          }}
        >
          {!loading ? (
            "Register"
          ) : (
            <div className="flex content-center">
              <CircularProgress size="31px" color="inherit" />
            </div>
          )}
        </Button>
      </form>

      <footer className="px-5 text-white flex justify-center gap-1 mt-1">
        Already have an account?
        <button
          disabled={loading}
          className={`text-[#4294FF] font-medium ${
            !loading ? "cursor-pointer" : ""
          }`}
        >
          {!loading ? <Link to="/auth/signin">Signin</Link> : "Signin"}
        </button>
      </footer>
    </SignupSigninOutline>
  );
};

export default Signup;
