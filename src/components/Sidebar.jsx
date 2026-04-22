function Sidebar({ setTab }) {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      <h1 className="text-xl font-bold mb-8">QR Studio</h1>

      <button onClick={() => setTab("generate")} className="block mb-4">
        Generate QR
      </button>

      <button onClick={() => setTab("history")} className="block mb-4">
        History
      </button>

      <button onClick={() => setTab("profile")} className="block mb-4">
        Profile
      </button>
    </div>
  );
}

export default Sidebar;