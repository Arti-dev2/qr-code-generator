import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedUser");

  const logout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      <h1 className="text-xl font-bold">QR Code Generator</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">Hi, {user}</span>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;