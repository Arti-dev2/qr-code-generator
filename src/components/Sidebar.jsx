import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const nav = useNavigate();

  return (
    <div className="w-60 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">QR App</h2>

      <p onClick={()=>nav("/dashboard")} className="mb-3 cursor-pointer">Dashboard</p>
      <p onClick={()=>nav("/history")} className="mb-3 cursor-pointer">History</p>
      <p onClick={()=>nav("/profile")} className="mb-3 cursor-pointer">Profile</p>

      <p onClick={()=>{
        localStorage.removeItem("loggedUser");
        nav("/");
      }} className="mt-6 text-red-400 cursor-pointer">Logout</p>
    </div>
  );
}