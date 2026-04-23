import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [text, setText] = useState("");
  const user = localStorage.getItem("loggedUser");
const saveQR = () => {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const index = users.findIndex(
    (u) => u.username === localStorage.getItem("loggedUser")
  );

  if (index === -1) {
    alert("User not found");
    return;
  }

  // ensure history exists
  if (!users[index].history) {
    users[index].history = [];
  }

  users[index].history.push(text);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Saved to history");
};
  const download = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    link.download = "qr.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-4">Generate QR</h1>

        <input
          className="border p-2 w-80 mb-4"
          placeholder="Enter URL"
          onChange={e=>setText(e.target.value)}
        />

        {text && (
          <div className="bg-white p-4 shadow rounded w-80 text-center">
            <QRCodeCanvas value={text} size={180} />

            <div className="mt-4 flex gap-2 justify-center">
              <button onClick={download} className="bg-blue-500 text-white px-3 py-1 rounded">Download</button>
              <button onClick={saveQR} className="bg-green-500 text-white px-3 py-1 rounded">Save</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}