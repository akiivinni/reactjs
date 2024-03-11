import { useState } from "react";
import axios from "axios";

const ContactusForm = () => {
  const [username, setUsername] = useState("");
  const [userError, setUserError] = useState("");

  const usernameHandler = (event) => {
    const username = event.target.value;
    setUsername(username);

    if (username.length > 15) {
      setUserError("Username must be within 15 characters");
    } else {
      setUserError("");
    }
  };

  const loginApi = async () => {
    try {
      const result = await axios.post(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(result.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    loginApi();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('bg.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <p>
          contact us for variety of music downloads and for music training,
          Available at 8:00AM to 9:30 pm
        </p>
        <form onSubmit={submitHandler}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4" style = {{fontWeight:"bold",fontSize:"20"}}>Email</label>
              <input 
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4"style = {{fontWeight:"bold",fontSize:"20"}}>Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress" style = {{fontWeight:"bold",fontSize:"20"}}>Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2" style = {{fontWeight:"bold",fontSize:"20"}}>Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity" style = {{fontWeight:"bold",fontSize:"20"}}>City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState" style = {{fontWeight:"bold",fontSize:"20"}}>State</label>
              <select id="inputState" className="form-control">
                <option selected="">Andhrapradesh</option>
                <option>Telengana</option>
                <option>BAnglore</option>
                <option>Chennai</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip" style = {{fontWeight:"bold",fontSize:"20"}}>Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck" style = {{fontWeight:"bold",fontSize:"20"}}>
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
         submt
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactusForm;
