import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.username === username);

    if (exists) return alert("User exists");

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white shadow w-80">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <input className="border w-full p-2 mb-2" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
        <input className="border w-full p-2 mb-2" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

        <button className="bg-green-500 text-white w-full p-2" onClick={signup}>
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;