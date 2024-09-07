import React, { useState } from "react";
import SignUp from "./signUp";
import SignIn from "./signIn";

export default function AuthModal() {
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(true);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  return (
    <div>
      {isSignUpOpen && <SignUp setIsSignUpOpen={setIsSignUpOpen} />}

      {isSignInOpen && <SignIn />}
    </div>
  );
}
