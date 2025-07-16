import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/Validate";

const Login = () => {
  const [showMore, setshowMore] = useState(false);
  const [isSignInForm, setSignForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef(null);
  const password = useRef(null);
  
  const toggleSignForm = () => {
    setSignForm(!isSignInForm)
  }

  const handleClick =() => {
      const message = checkValidData(email.current.value, password.current.value) 
      setErrorMessage(message)
      
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
          alt="backgroundImage"
        />
      </div>

      <div className="flex">
        <form onSubmit={(e) => {e.preventDefault()}} className="p-10 flex-col absolute w-1/4 my-40 mx-auto right-0 left-0 bg-[#020301] opacity-85">
          <div className="flex text-white m-2 font-bold text-3xl mb-5">
            {isSignInForm ? "Sign In" : "Sign up"}
          </div>

          {!isSignInForm && <div className="pr-5">
            <input
              type="text"
              placeholder="User name"
              className="p-2 m-2 text-white bg-[#242735] w-full rounded-sm"
            />
          </div>}
          <div className="pr-5">
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="p-2 m-2 text-white bg-[#242735] w-full rounded-sm"
            />
          </div>
          <div className="pr-5">
            <input
              ref={password}
              type="text"
              placeholder="Password"
              className="p-2 m-2 text-white bg-[#242735] w-full rounded-sm"
            />
          </div>
          <div className="p-2 m-2 text-[#C11119] font-bold">
            <p>{errorMessage}</p>
          </div>
          <div className=" mr-5 flex-col">
            <button
              type="submit"
              className="w-full m-2 p-2 text-white font-bold bg-[#C11119] rounded-sm"
              onClick={handleClick}
            >
              {isSignInForm ? "Sign In" : "Sign up"}
            </button>

            {isSignInForm && <div>
            <h3 className="text-white flex items-center justify-center font-bold">
              OR
            </h3>

            <button
              type="submit"
              className="w-full m-2 p-2 text-white font-bold bg-[#252323] rounded-sm"
              onClick={toggleSignForm}
              >
              Sign up
            </button>
            </div>}
          </div>

          <div className="py-2 m-2 text-white">

            {isSignInForm ? <div>
            <span>New to Netflix?</span>
            <a className="font-bold hover:underline cursor-pointer"
            onClick={toggleSignForm}>Sign up now.</a>
            </div> :
            <div>
            <span>Already a member?</span>
            <a className="font-bold hover:underline cursor-pointer"
            onClick={toggleSignForm}>Sign in now.</a>
            </div>}

            <h6 className="text-sm py-5">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </h6>

            <h6
              className="hover:underline cursor-pointer text-[#3860BE]"
              onClick={() => setshowMore(!showMore)}
            >
              Learn more
            </h6>

            {showMore && (
              <div>
                <span className="text-sm py-2">
                  The information collected by Google reCAPTCHA is subject to
                  the Google{" "}
                </span>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferre" className="hover:underline text-[#3860BE] font-bold cursor-pointer">
                  Privacy Policy
                </a>
                <span> and </span>
                <a href="https://policies.google.com/terms"
                target="_blank" rel="noopener noreferre" 
                className="hover:underline  text-[#3860BE] font-bold cursor-pointer">
                  Terms of Service
                </a>
                <span>
                  , and is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalised advertising by Google).
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
