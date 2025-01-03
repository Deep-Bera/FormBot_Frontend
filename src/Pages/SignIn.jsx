import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import "../Styles/SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const field = event.target.id;
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    // Input validation
    if (!formData.email) {
      alert("Email is required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!formData.password) {
      alert("Password is required.");
      return;
    }

    try {
      // API call to the backend for sign-in
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // If sign-in is successful
      if (response.status === 200) {
        alert("Sign In Successful!");
        console.log("User Data:", response.data);

        // Save token or user details to sessionStorage/localStorage if needed
        localStorage.setItem("token", response.data.token); // Example: Save token

        // Navigate to the dashboard
        navigate("/Dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.msg); // Show error message from backend
      } else {
        console.error("Error during sign-in:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      {/* <img
        src="FrontEnd\public\images\DownEllipse 1.png"
        className="DownEllipse"
        alt=""
      />
      <img
        src="FrontEnd\public\images\RightEllipse 2.png"
        className="RightEllipse"
        alt=""
      />
      <img
        src="FrontEnd\public\images\Triangle.png"
        className="triangle"
        alt=""
      /> */}
      <div className="signInContainer">
        {/* Back Button */}
        <button className="backButton" onClick={() => navigate(-1)}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>

        {/* Sign-In Form */}
        <form className="signInForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="inputField"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="inputField"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="logInButton">
            Log In
          </button>

          <p className="orText">OR</p>

          <button type="button" className="googleSignInButton">
            <img
              src="public/images/Google Icon.png"
              alt="Google"
              className="googleIcon"
            />
            Sign in with Google
          </button>

          <p className="registerText">
            Don’t have an account? <Link to="/signup">Register now</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
