import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import SignupSigninOutline from "../components/Auth/SignupSigninOutline";
import { useToast } from "../contexts/ToastContext";
import { delay } from "../utils/delay";
import { isValidEmail } from "../utils/validateEmail";
import ToastError from "../components/Toast/ToastError";
import MyTextField from "../components/MUI/MyTextField";
import MyTextFieldPassword from "../components/MUI/MyTextFieldPassword";
import MyButtonMain from "../components/MUI/MyButtonMain";
import AuthFooter from "../components/Auth/AuthFooter";

const headline = "Create account";

const Signup = () => {
  const [name, setName] = useState("");
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
        `${import.meta.env.VITE_BACKEND_BASE_URL}/users/register`,
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
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-stretch gap-4 max-w-[430px] w-full sm:w-full"
      >
        <MyTextField
          name="name"
          label="Name"
          placeholder="Anish Dhomase"
          value={name}
          setValue={setName}
        />
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
          <MyButtonMain loading={loading} ButtonText="Register" />
        </div>
      </form>

      <AuthFooter
        linkToPage="/auth/signin"
        loading={loading}
        question="Already have an account?"
        textButtonContent="Signin"
      />
    </SignupSigninOutline>
  );
};

export default Signup;
