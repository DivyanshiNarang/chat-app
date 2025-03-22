import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      {/* using Chats component because whenever user will send message the list of user Chats will
      change and we don't want the Navbar and Search component to re-render everytime it refreshes */}
      <Chats />
    </div>
  );
}
