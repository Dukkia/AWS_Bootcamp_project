import React from "react";
import Navbar from "./Navbar";
import Chat from "./Chat";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-contents">
        <div
          className="video-container"
          style={{
            opacity: "0.9",
            boxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.3)",
            maxWidth: "960px",
            marginTop: "20px",
            overflow: "hidden",
            marginLeft: "10px",
          }}
        >
          <div>
            <ReactPlayer
              url="https://youtube.com/watch?v=mnlsGN5Zwyg&feature=shares"
              width="960px"
              height="560px"
            />
          </div>
        </div>

        <div className="side-contents">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
