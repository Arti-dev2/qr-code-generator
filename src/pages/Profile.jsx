import Sidebar from "../components/Sidebar";

export default function Profile() {
  const user = localStorage.getItem("loggedUser");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const u = users.find(x => x.username === user);

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 flex-1">
        <h1 className="text-2xl mb-4">Profile</h1>

        <div className="bg-white p-4 shadow rounded w-80">
          <p><b>Username:</b> {user}</p>
          <p><b>Total QR Created:</b> {u?.history?.length || 0}</p>
        </div>
      </div>
    </div>
  );
}