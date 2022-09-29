import React, { useState } from "react";
import "./Register.css";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    // rePassword: "",
  });
  const [error, setError] = useState("")
  const navigate = useNavigate()

  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

//   console.log({ data });

  const register = async(e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5000/api/users/";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
    } catch (error) {
      if(
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
        )
        {
          setError(error.response.data.message)
        }
      }
      // console.log(data)
  };
  return (
    <div className="register">
      <div className="flex-container">
        <form onSubmit={register}>
        {error ? <label class="text-danger">{error}</label> : null}
          <div className="names">
            <div className="input">
              <label className="label" for="firstName">
                First Name
              </label>
              <div className="nameField">
                <input
                  className="name"
                  name="firstName"
                  id="firstName"
                  type="text"
                  value={data.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input">
              <label className="label" for="lastName">
                Last Name
              </label>
              <div className="nameField">
                <input
                  className="name"
                  name="lastName"
                  id="lastName"
                  type="text"
                  value={data.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="input">
            <label className="label" for="email">
              Email Address
            </label>
            <div className="emailField">
              <input
                className="email"
                name="email"
                id="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input">
            <label className="label" for="contact">
              Phone Number
            </label>
            <div className="contactField">
              <input
                className="phoneNo"
                name="contact"
                id="contact"
                type="tel"
                value={data.contact}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="passes">
            <div className="input">
              <label className="label" for="password">
                Password
              </label>
              <div className="passField">
                <input
                  className="password"
                  name="password"
                  id="password"
                  type="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {/* <div className="input">
              <label className="label" for="rePassword">
                Re-enter Password
              </label>
              <div className="passField">
                <input
                  className="password"
                  name="rePassword"
                  id="rePassword"
                  type="password"
                  value={data.rePassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div> */}
          </div>
          <div className="LoginBtn">
            <button type="submit" className="Loginbutton">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
