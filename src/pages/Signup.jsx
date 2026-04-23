import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const nav = useNavigate();

  const signup = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(x => x.username === u)) {
      alert("User exists");
      return;
    }

    users.push({ username: u, password: p, history: [] });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup success");
    nav("/");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <input className="border p-2 w-full mb-2" placeholder="Username" onChange={e=>setU(e.target.value)} />
        <input className="border p-2 w-full mb-3" type="password" placeholder="Password" onChange={e=>setP(e.target.value)} />

        <button onClick={signup} className="bg-green-500 text-white w-full p-2 rounded">Signup</button>
      </div>
    </div>
  );
}