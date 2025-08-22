import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import SignupSigninOutline from "../components/Auth/SignupSigninOutline";
import { useToast } from "../contexts/ToastContext";
import { delay } from "../utils/delay";
import { isValidEmail } from "../utils/validateEmail";
import ToastError from "../components/Toast/ToastError";
import ToastLogin from "../components/Toast/ToastLogin";
import MyTextField from "../components/MUI/MyTextField";
import MyTextFieldPassword from "../components/MUI/MyTextFieldPassword";
import MyButtonMain from "../components/MUI/MyButtonMain";
import AuthFooter from "../components/Auth/AuthFooter";

const headline = "Welcome Back";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  // Submit Form handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await delay(1000); // Wait for 1 second

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
      const userData = { email, password };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );

      if (response.data.success === true) {
        toast.open(<ToastLogin />);
        const { token, user } = response.data.data;
        localStorage.setItem("token", token);

        await delay(2000); // Wait for 1 second
        navigate(`/dashboard/${user.name}`);
      } else {
        console.log("Error");
      }
    } catch (error) {
      const errCode = error.response.data.errorCode;
      const errSubHeadlineMsg = error.response.data.message;
      const errHeadlineMsg =
        errCode === "INVALID_CREDENTIALS"
          ? "Invalid credentials"
          : "Login Failed";
      toast.open(
        <ToastError headline={errHeadlineMsg} subHeadline={errSubHeadlineMsg} />
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignupSigninOutline headline={headline}>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-4 max-w-[430px] w-full sm:w-full"
      >
        <MyTextField
          name="email"
          label="Email"
          placeholder="example@example.com"
          value={email}
          setValue={setEmail}
        />
        <MyTextFieldPassword
          name="password"
          label="Password"
          placeholder="At least of length 6"
          value={password}
          setValue={setPassword}
        />
        <div className="mt-4">
          <MyButtonMain loading={loading} ButtonText="Login" />
        </div>
      </form>
      <AuthFooter
        linkToPage="/auth/signup"
        loading={loading}
        question="Don't have an account?"
        textButtonContent="Signup"
      />
    </SignupSigninOutline>
  );
};

export default Signin;
