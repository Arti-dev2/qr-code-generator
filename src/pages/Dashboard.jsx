import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function Dashboard() {
  const [tab, setTab] = useState("generate");
  const [text, setText] = useState("");
  const user = localStorage.getItem("loggedUser");

  const saveQR = () => {
    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.push({
      user,
      text,
      time: new Date().toLocaleString(),
    });

    localStorage.setItem("history", JSON.stringify(history));
    alert("Saved!");
  };

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "qr.png";
    link.click();
  };

  return (
    <div>
      {/* 🔥 NEW TOP BAR */}
      <Navbar />

      <div className="flex">
        <Sidebar setTab={setTab} />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          
          {/* GENERATE */}
          {tab === "generate" && (
            <div className="bg-white p-6 rounded shadow w-96">
              <h2 className="text-xl font-bold mb-3">Generate QR</h2>

              <input
                className="border w-full p-2 mb-3"
                placeholder="Enter text"
                onChange={(e) => setText(e.target.value)}
              />

              {text && (
                <div className="text-center">
                  <QRCodeCanvas value={text} size={180} />

                  <div className="mt-3 flex gap-2 justify-center">
                    <button
                      onClick={saveQR}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>

                    <button
                      onClick={downloadQR}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Download
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* HISTORY */}
          {tab === "history" && (
            <div>
              <h2 className="text-xl font-bold mb-4">History</h2>

              {(JSON.parse(localStorage.getItem("history")) || []).map(
                (h, i) => (
                  <div key={i} className="bg-white p-3 mb-2 shadow rounded">
                    <p className="font-semibold">{h.text}</p>
                    <small className="text-gray-500">{h.time}</small>
                  </div>
                )
              )}
            </div>
          )}

          {/* PROFILE */}
          {tab === "profile" && (
            <div className="bg-white p-6 shadow rounded">
              <h2 className="text-xl font-bold mb-2">Profile</h2>
              <p>Username: {user}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;