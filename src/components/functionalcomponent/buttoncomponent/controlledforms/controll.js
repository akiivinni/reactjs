import { useState } from "react";
import axios from "axios";

const Controlledforms = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const userpasswordhandler = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setUsername(value);
      if (value.length > 10) {
        setUserNameError("Username must be less than 10 characters");
      } else {
        setUserNameError("");
      }
    } else if (name === "pswd") {
      setPassword(value);
      if (value.trim() === "" || value.length < 8) {
        setUserNameError("Password should not be blank and must be at least 8 characters");
      } else {
        setUserNameError("");
      }
    }
  };

  const loginapi = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos/1", { username, password })
      .then((response) => {
        setResponseMessage(response.username.message); 
      })
      .catch((error) => {
        setResponseMessage("Error: Unable to login"); // Set a default error message
      });
  };

  const submithandler = (event) => {
    event.preventDefault();
    console.log("Email:", username);
  console.log("Password:", password);
    loginapi();
  };

  return (
    <>
      <title>Bootstrap Example</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="container mt-3">
        <h2>Simple form</h2>
        <form onSubmit={submithandler}>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={username}
              onChange={userpasswordhandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              value={password}
              onChange={userpasswordhandler}
            />
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" />{" "}
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {userNameError && <p>{userNameError}</p>}
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </>
  );
};

export default Controlledforms;
