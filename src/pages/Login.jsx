import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      localStorage.setItem("loggedUser", username);
      navigate("/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input className="border w-full p-2 mb-2" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
        <input className="border w-full p-2 mb-2" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

        <button className="bg-blue-500 text-white w-full p-2" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;