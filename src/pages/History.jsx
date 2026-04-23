import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("loggedUser");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const u = users.find((x) => x.username === user);

    if (u && u.history) {
      setHistory(u.history);
    }
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 flex-1">
        <h1 className="text-2xl mb-4">QR History</h1>

        {history.length === 0 ? (
          <p>No QR codes yet</p>
        ) : (
          history.map((item, i) => (
            <div key={i} className="bg-white p-3 mb-2 shadow rounded">
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}