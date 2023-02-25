import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyle } from "./Theme";
import { Avatar, IconButton } from "@mui/material";
import {
  Nightlight,
  WbSunny,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import "./Navbar.css";

const twitchLogoSrc =
  "https://www.pngplay.com/wp-content/uploads/12/Twitch-Logo-Transparent-Image.png";
function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="navbar">
      <div className="Header_logo">
        <img src={twitchLogoSrc} alt="" />
      </div>

      <div className="Header_followtext">
        <h4>팔로잉</h4>
      </div>

      <div className="Header_findtext">
        <h4>탐색</h4>
      </div>

      <div className="Header_noticeicon">
        <IconButton color="primary">
          <NotificationsOutlined />
        </IconButton>
      </div>

      <div className="Header_input">
        <input type="text" placeholder="검색" />
        <button type="submit">
          <Search />
        </button>
      </div>

      <div className="Header_ava">
        <Avatar />
      </div>

      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <div className="Header_dark">
          <IconButton onClick={toggleDarkMode} color="primary">
            {darkMode ? <Nightlight /> : <WbSunny />}
          </IconButton>
        </div>
      </ThemeProvider>

    </div>
  );
}
export default Navbar;
