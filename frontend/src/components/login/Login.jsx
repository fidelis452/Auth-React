import React, {useState} from "react";
import "./Login.css";
import axios from "axios";
function Login() {
  const [data, setData] = useState({
    email: "", password: ""
  })
  const [error, setError] = useState("")

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const login = async(e) => {
    e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth/";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
  }

  return (
    <div className="login">
      <div className="flex-container">
        <div className="card">
          <form onSubmit={login}>
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
                  onChange={handleChange}
                  value={data.email}
                  required
                />
              </div>
            </div>
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
                  onChange={handleChange}
                  value={data.password}
                  required
                />
              </div>
            </div>
            <div className="LoginBtn">
              <button className="Loginbutton">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
