import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const nav = useNavigate();

  const login = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(x => x.username === u && x.password === p);

    if (found) {
      localStorage.setItem("loggedUser", u);
      nav("/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input className="border p-2 w-full mb-2" placeholder="Username" onChange={e=>setU(e.target.value)} />
        <input className="border p-2 w-full mb-3" type="password" placeholder="Password" onChange={e=>setP(e.target.value)} />

        <button onClick={login} className="bg-blue-500 text-white w-full p-2 rounded">Login</button>

        <p className="text-sm mt-2 text-center cursor-pointer text-blue-500" onClick={()=>nav("/signup")}>
          Create account
        </p>
      </div>
    </div>
  );
}