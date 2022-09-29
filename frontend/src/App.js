import {Routes, Route, Navigate} from "react-router-dom"
import Login from "./components/login/Login"
import Register from "./components/register/Register";
import Main from "./components/main/index"
function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
