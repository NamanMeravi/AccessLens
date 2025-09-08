import React from "react";
import { Link } from "react-router";

const AuthFooter = ({ loading, linkToPage, textButtonContent, question }) => {
  return (
    <footer className="text-white flex justify-center gap-1 mt-2">
      {question}
      <button
        disabled={loading}
        className={`text-[#4294FF] font-medium ${
          !loading ? "cursor-pointer" : ""
        }`}
      >
        {!loading ? <Link to={linkToPage}>{textButtonContent}</Link> : "Signin"}
      </button>
    </footer>
  );
};

export default AuthFooter;
