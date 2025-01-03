import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import "../Styles/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    confirmPasswordError: false,
  });

  const handleChange = (event) => {
    const field = event.target.id;
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, [field]: value }));

    // Clear confirm password error when user edits the field
    if (field === "confirmPassword") {
      setError((prevError) => ({ ...prevError, confirmPasswordError: false }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError({ confirmPasswordError: true });
      return;
    }

    if (
      !formData.Username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Make API call to the backend
    try {
      const response = await axios.post(
        "https://formbot-backend-uxol.onrender.com/api/auth/signup",
        {
          username: formData.Username,
          email: formData.email,
          password: formData.password,
        }
      );

      // successfully registered the new user
      if (response.status === 201) {
        alert("User registered successfully!");
        navigate("/signin"); // Redirect to sign-in page
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.msg); // Show error message from the backend
      } else {
        console.error("Error during sign-up:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="signUpContainer">
      {/* Back Button */}
      <button className="backButton" onClick={() => navigate(-1)}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </button>

      {/* Sign-Up Form */}
      <form className="signUpForm" onSubmit={handleSubmit}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          id="Username"
          placeholder="Enter your Username"
          className="inputField"
          value={formData.Username}
          onChange={handleChange}
          autoComplete="off"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="inputField"
          value={formData.email}
          autoComplete="off"
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

        <label
          htmlFor="confirmPassword"
          style={{ color: error.confirmPasswordError ? "red" : "white" }}
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="********"
          className={`inputField ${
            error.confirmPasswordError ? "errorBorder" : ""
          }`}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {error.confirmPasswordError && (
          <p className="errorText">Enter the same password in both fields</p>
        )}

        <button type="submit" className="signUpButton">
          Sign Up
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
          Already have an account? <Link to="/signin">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
